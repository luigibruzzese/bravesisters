
import {DataTypes, Sequelize} from "sequelize";
import {join} from "path";


const db = new Sequelize({
    dialect: 'sqlite',
    storage: join('C:\\Users\\antod\\Documenti\\bravesisters','database.sqlite')
//    storage: join('/mnt/Data/Didattica/Hypermedia/23_24/t06-nuxt','database.sqlite')
})

await db.authenticate()

const Person = db.define('person',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
    },
    surname: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
},{
    createdAt: false,
    updatedAt: false,

})

await Person.sync()
if(await Person.count()===0)
    await Person.bulkCreate([
        {
            name: 'Rex',
            description: 'German Shepherd'
        }
    ])

export function usePersonDb(){
    return Person
}


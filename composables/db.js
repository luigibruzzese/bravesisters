
import {DataTypes, Sequelize} from "sequelize";
import {join} from "path";


const db = new Sequelize({
    dialect: 'sqlite',
    storage: join('C:\\Users\\antod\\WebstormProjects\\bravesisters','database.sqlite')
//    storage: join('/mnt/Data/Didattica/Hypermedia/23_24/t06-nuxt','database.sqlite')
})

await db.authenticate()

const Person = db.define('person',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
},{
    createdAt: false,
    updatedAt: false,

})

/*await Person.sync()
if(await Dogs.count()===0)
    await Dogs.bulkCreate([
        {
            name: 'Rex',
            breed: 'German Shepherd'
        }
    ])
*/

export function usePeopleDb(){
    return Person
}
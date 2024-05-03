import { Sequelize, DataTypes } from 'sequelize';
import { join } from 'path';

const db = new Sequelize({
  dialect: "sqlite",
  storage: join("C:\\Users\\luigi\\Desktop\\Anno I\\Hypermedia applications\\Progetto\\Parte2\\bravesisters", "database.sqlite")
  //    storage: join('/mnt/Data/Didattica/Hypermedia/23_24/t06-nuxt','database.sqlite')
});
await db.authenticate();
const Dogs = db.define("dogs", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false
});
await Dogs.sync();
if (await Dogs.count() === 0)
  await Dogs.bulkCreate([
    {
      name: "Rex",
      breed: "German Shepherd"
    },
    {
      name: "Fuffy",
      breed: "Labrador"
    },
    {
      name: "Doggo",
      breed: "Basset town"
    }
  ]);
function useDogsDb() {
  return Dogs;
}

export { useDogsDb as u };
//# sourceMappingURL=db.mjs.map

import { Sequelize, DataTypes, Model } from "sequelize";
import { concerts } from "../data/starter_concerts.js";

const sequelize = new Sequelize("sqlite:../data/database.sqlite");

class Concert extends Model {}

class ShoppingCartItem extends Model {}

Concert.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.TEXT,
    venue:DataTypes.TEXT,
    artists: DataTypes.TEXT,
    date: DataTypes.TEXT,
    location: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    price: DataTypes.FLOAT,
  },
  {
    sequelize,
  }
);

ShoppingCartItem.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.TEXT,
    venue:DataTypes.TEXT,
    artists: DataTypes.TEXT,
    date: DataTypes.TEXT,
    location: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    price: DataTypes.FLOAT,
  },
  {
    sequelize,
  }
);

await sequelize.sync();

// // seed the database!
await Concert.bulkCreate(
  concerts.map((m) => {
    const { id, ...Concert } = m;
    return Concert;
  })
);

export { Concert, ShoppingCartItem };

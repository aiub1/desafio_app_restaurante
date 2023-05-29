import { DataTypes, Model } from "sequelize"

import { sequelize } from "../index"

export interface CustomersInstance extends Model {
  id: Number,
  name: String,
  cpf: String,
  birthday: Date
}

const Customers = sequelize.define<CustomersInstance>(
  'customers',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }
)

export { Customers }
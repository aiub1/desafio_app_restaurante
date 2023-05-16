import { DataTypes, Model } from 'sequelize'

import { sequelize } from '../index'

export interface RestaurantsIntance extends Model {
  id: number
  name: string
  cnpj: string
  since: Date
}

const Restaurants = sequelize.define<RestaurantsIntance>(
  'restaurants',
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
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false
    },
    since: DataTypes.DATE
  }
)

export { Restaurants }
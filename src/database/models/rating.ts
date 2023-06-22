import { DataTypes, Model } from "sequelize";
import { sequelize } from "../index"

export interface RatingInstance extends Model {
    id: number,
    customer_id: number,
    restaurant_id: number,
    stars: number
}

const Ratings = sequelize.define<RatingInstance>(
  'ratings',
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customers',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }
)

export { Ratings }
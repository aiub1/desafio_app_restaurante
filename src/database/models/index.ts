import { Customers } from "./customers"
import { Restaurants } from "./restaurants"
import { Ratings } from "./rating"

Customers.hasOne(Ratings)

Restaurants.hasOne(Ratings)

Ratings.belongsTo(Restaurants)
Ratings.belongsTo(Customers)

export {
  Customers,
  Restaurants,
  Ratings
}
import { Request, Response } from "express"
import { Restaurants } from "../database/models"

export const restaurantsController = {
  index: async (req: Request, res: Response) => {
    try {
      const restaurants = await Restaurants.findAll()
      return res.json(restaurants)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}
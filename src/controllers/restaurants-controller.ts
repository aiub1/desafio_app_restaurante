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
  },

  save: async (req: Request, res: Response) => {
    const { name, cnpj, since } = req.body

    try {
      const restaurant = await Restaurants.create({
        name,
        cnpj,
        since
      })

      return res.status(201).json(restaurant)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const restaurant = await Restaurants.findByPk(id)
      return res.json(restaurant)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, cnpj, since } = req.body

    try {
      const restaurant = await Restaurants.findByPk(id)

      if (restaurant == null) {
        return res.status(404).json({ message: 'Restaurante não encontrado!' })
      }

      restaurant.name = name ?? restaurant.name
      restaurant.cnpj = cnpj ?? restaurant.cnpj
      restaurant.since = since ?? restaurant.since

      await restaurant.save()
      return res.status(201).json(restaurant)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      await Restaurants.destroy({ where: { id } })

      return res.status(204).send()
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}
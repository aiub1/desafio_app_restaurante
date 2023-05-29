import { Request, Response } from "express"

import { Customers } from "../database/models"

export const customersController = {
  index: async (req: Request, res: Response) => {
    try {
      const customers = await Customers.findAll()
      return res.json(customers)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  save: async (req: Request, res: Response) => {
    const { name, cpf, birthday } = req.body

    try {
      const customers = await Customers.create({
        name,
        cpf,
        birthday
      })

      return res.status(201).json(customers)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}
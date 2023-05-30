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
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const customer = await Customers.findByPk(id)

      return res.status(201).json(customer)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, cpf, birthday } = req.body

    try {
      const customer = await Customers.findByPk(id)

      if (customer == null) {
        return res.status(404).json({ message: 'Cliente não encontrado!' })
      }

      customer.name = name ?? customer.name
      customer.cpf = cpf ?? customer.cpf
      customer.birthday = birthday ?? customer.birthday

      await customer.save()
      return res.status(201).json(customer)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      await Customers.destroy({ where: { id } })

      return res.status(204).send()
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}
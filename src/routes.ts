import express from 'express'

import { customersController } from './controllers/customers-controller'
import { restaurantsController } from './controllers/restaurants-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: "Olá, seja bem vindo ao meu treino de back-end" }))

router.get('/customers', customersController.index)
router.get('/customers/:id', customersController.show)
router.post('/customers', customersController.save)
router.patch('/customers/:id', customersController.update)
router.delete('/customers/:id', customersController.delete)

router.get('/restaurants', restaurantsController.index)
router.post('/restaurants', restaurantsController.save)
router.get('/restaurants/:id', restaurantsController.show)
router.patch('/restaurants/:id', restaurantsController.update)
router.delete('/restaurants/:id', restaurantsController.delete)

export { router }
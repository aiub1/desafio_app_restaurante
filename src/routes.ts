import express from 'express'

import { restaurantsController } from './controllers/restaurants-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: "Olá, seja bem vindo ao meu treino de back-end" }))

router.get('/restaurants', restaurantsController.index)
router.post('/restaurants', restaurantsController.save)
router.get('/restaurants/:id', restaurantsController.show)
router.patch('/restaurants/:id', restaurantsController.update)
router.delete('/restaurants/:id', restaurantsController.delete)
export { router }
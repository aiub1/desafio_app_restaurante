import express from 'express'
import { restaurantsController } from './controllers/restaurants-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: "Olá, seja bem vindo ao meu treino de back-end" }))

router.get('/restaurants', restaurantsController.index)
export { router }
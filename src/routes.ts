import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: "Olá, seja bem vindo ao meu treino de back-end" }))

export { router }
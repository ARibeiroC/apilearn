import express from 'express'
import { postUser } from './userController.js'

const app = express()
const PORT = 3000
app.use(express.json())



export { app, PORT}
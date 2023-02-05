import { Router } from "express"
import { postUser, selectUser, putUser, deleteUser } from "../controller/userController.js"


const routes = Router()

routes.get('/users', selectUser)
routes.post('/users', postUser)
routes.put('/users', putUser)
routes.delete('/users/:id', deleteUser)


export default routes
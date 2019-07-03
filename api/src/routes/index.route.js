import { Router } from 'express'
import* as Controller from '../controllers/index.controller'
const route = Router()

route.get('/', Controller.api)

route.get('/api', Controller.getFilm)

route.post('/api', Controller.postFilm)

export default route
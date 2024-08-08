import {Router} from 'express'
import {createPerson, getPeople} from '../controllers/personController.js'
import {getRoot} from '../controllers/personController.js'


const route = Router()

route.get('/', getRoot)
route.get('/person', createPerson) 
route.post('/person', getPeople)

export default route
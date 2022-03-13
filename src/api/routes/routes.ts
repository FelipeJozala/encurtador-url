import { Router } from 'express'
import { URLContoller } from '../controller/URLController'

const shortenerRoute = Router()
const urlController = new URLContoller()

shortenerRoute.post('/shorten', urlController.shorten)

shortenerRoute.get('/:hash', urlController.redirect)

export default shortenerRoute

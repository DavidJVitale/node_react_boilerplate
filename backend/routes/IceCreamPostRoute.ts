import { IceCreamPostController } from '../controllers/IceCreamPostController'
import * as bodyParser from 'body-parser'

export class IceCreamPostRoute {
    constructor(app){
        app.post('/api/IceCream', bodyParser.text(), IceCreamPostController)}}

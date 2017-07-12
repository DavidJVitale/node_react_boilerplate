import { IceCreamPostController } from '../controllers/IceCreamPostController'
import * as bodyParser from 'body-parser'

export class IceCreamPostRoute {
    constructor(app){
        app.post('/api/IceCreams/',
                 bodyParser.text(),
                 IceCreamPostController)}}

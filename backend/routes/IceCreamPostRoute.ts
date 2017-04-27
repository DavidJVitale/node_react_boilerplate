import { IceCreamPostController } from '../controllers/IceCreamPostController'

export class IceCreamPostRoute {
    constructor(app){
        app.post('/api/IceCream', IceCreamPostController)}}

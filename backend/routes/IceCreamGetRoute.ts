import { IceCreamGetController } from '../controllers/IceCreamGetController'

export class IceCreamGetRoute {
    constructor(app){
        app.get('/api/IceCreams/', IceCreamGetController)}}

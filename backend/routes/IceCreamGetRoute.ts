import { IceCreamGetController } from '../controllers/IceCreamGetController'

export class IceCreamGetRoute {
    constructor(app){
        app.get('/api/icecream', (req, res) => {
            res.send("Hello Ice Cream!")})}}

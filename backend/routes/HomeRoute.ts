import { HomeController } from '../controllers/HomeController'

export class HomeRoute {
    constructor(app){
        app.get('/', HomeController)}}

import * as express from 'express'
import * as path from 'path'
import * as http from 'http'

export class IndexController {
    constructor(app){
        app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, "../../../frontend/index.html"))})
    }
}

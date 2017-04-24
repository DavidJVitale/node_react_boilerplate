import * as express from 'express'
import * as path from 'path'
import * as http from 'http'

export class IceCreamGetController {
    constructor(app){
      app.get('/api/icecream', (req, res) => {
        res.send("Hello Ice Cream!")})
    }
}

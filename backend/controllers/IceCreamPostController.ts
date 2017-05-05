import * as mockDb from '../models/MockDatabase'
import { IceCreamInterface } from '../node_modules/shared'

export function IceCreamPostController(req, res){
    var bodyAsIceCreams = <IceCreamInterface[]>JSON.parse(req.body)
    mockDb.pushIceCreams(bodyAsIceCreams)
    res.sendStatus(200)}

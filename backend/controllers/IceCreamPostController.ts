import * as mockDb from '../models/MockDatabase'
import { IceCreamInterface } from '../node_modules/shared'

export function IceCreamPostController(req, res){
    var bodyAsIceCream = <IceCreamInterface[]>JSON.parse(req.body)
    mockDb.pushIceCreams(bodyAsIceCream)
    res.sendStatus(200)}

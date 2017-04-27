import * as mockDb from '../models/MockDatabase'

export function IceCreamGetController(req, res){
    res.json(mockDb.getMockIceCream())}

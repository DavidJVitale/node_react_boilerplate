import * as mockDb from '../models/MockDatabase'
import { IceCream } from '../node_modules/shared'

export function IceCreamGetController(req, res){
    res.json(mockDb.getMockIceCream())}

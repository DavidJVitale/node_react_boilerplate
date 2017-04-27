import * as mockDb from '../models/MockDatabase'
import { IceCreamInterface } from '../node_modules/shared'

export function IceCreamPostController(req, res){
    console.log("Post Received!")
    console.log(req.body)
    mockDb.setMockIceCream(<IceCreamInterface[]>req.body)}

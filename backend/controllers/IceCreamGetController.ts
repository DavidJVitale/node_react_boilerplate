import { IceCream } from '../node_modules/shared'

export function IceCreamGetController(req, res){
    var ic = new IceCream("Vanilla", true, true)
    res.json(ic)}

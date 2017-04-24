import { IceCream } from '../../shared/IceCream'

export function IceCreamGetController(req, res){
    var ic = new IceCream("Vanilla", true, true)
    res.send("Hello Ice Cream!")}

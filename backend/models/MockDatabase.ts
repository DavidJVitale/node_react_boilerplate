/* Mocked out Database, only exists in memory.
 * This project's scope is not to set up a Database: replace the below calls
 * with calls to a MySQL, Mongo, or whatever else Db you want.
 */

import { IceCream, IceCreamInterface } from '../node_modules/shared'

var inMemoryList : IceCreamInterface[] = [
    new IceCream("Vanilla", true, true),
    new IceCream("Rocky Road", false, true),
    new IceCream("Brussel Sprout Cream", true, false)
    ]

export function getIceCreams(): IceCreamInterface[]{
    return inMemoryList
}

export function pushIceCreams(IceCreams : IceCreamInterface[]){
    for(let iceCream of IceCreams)
        inMemoryList.push(iceCream)
}

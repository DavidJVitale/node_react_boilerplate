/* Mocked out Database, only exists in memory.
 * This project's scope is not to set up a Database: replace the below calls
 * with calls to a MySQL, Mongo, or whatever else Db you want.
 */

import { IceCream } from '../node_modules/shared'

let inMemoryList : IceCream[] = [
  new IceCream("Vanilla", true, true),
  new IceCream("Rocky Road", false, true),
  new IceCream("Brussel Sprout Cream", true, false)
]

export function getMockIceCream(): IceCream[]{
  return inMemoryList
}

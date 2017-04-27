export interface IceCreamInterface {
    name: string,
    isGlutenFree : boolean,
    isTasty: boolean
}

export class IceCream implements IceCreamInterface {
    name : string
    isGlutenFree : boolean
    isTasty : boolean
    constructor(name : string, isGlutenFree : boolean, isTasty : boolean){
        this.name = name
        this.isGlutenFree = isGlutenFree
        this.isTasty = isTasty}}

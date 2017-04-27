export interface IceCreamInterface {
    Name: string,
    IsGlutenFree : boolean,
    IsTasty: boolean
}

export class IceCream implements IceCreamInterface {
    Name : string
    IsGlutenFree : boolean
    IsTasty : boolean
    constructor(Name : string, IsGlutenFree : boolean, IsTasty : boolean){
        this.Name = Name
        this.IsGlutenFree = IsGlutenFree
        this.IsTasty = IsTasty}}

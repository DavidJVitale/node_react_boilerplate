export interface IceCreamInterface {
    Name: string,
    IsGlutenFree : boolean,
    IsTasty: boolean}

export interface IceCreamParameters {
    Name: string,
    IsGlutenFree: boolean,
    IsTasty: boolean}

export class IceCream implements IceCreamInterface {
    Name : string
    IsGlutenFree : boolean
    IsTasty : boolean
  constructor({Name, IsGlutenFree, IsTasty} : IceCreamParameters){
        this.Name = Name
        this.IsGlutenFree = IsGlutenFree
        this.IsTasty = IsTasty}}

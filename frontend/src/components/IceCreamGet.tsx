import * as React from "react"

import { IceCream, IceCreamInterface } from "../../node_modules/shared"

import "../styles/Hello.less"

export interface IceCreamGetProps { IceCreams : IceCreamInterface[] }

export class IceCreamGet extends React.Component<undefined, IceCreamGetProps> {
    constructor(props : any){
        super(props)
        this.state = {IceCreams : [ new IceCream("Chocolate Chip", false, true)]}
    }

    render() {
        return <h1>Hello Ice Cream! {JSON.stringify(this.state.IceCreams)} </h1>
    }
}

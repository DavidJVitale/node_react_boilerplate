import * as React from "react"

import { IceCream, IceCreamInterface } from "../../node_modules/shared"

import "../styles/Hello.less"

export interface IceCreamGetProps { IceCreams : IceCreamInterface[] }

export class IceCreamGet extends React.Component<undefined, IceCreamGetProps> {
    constructor(props : any){
        super(props)
        this.state = {IceCreams : [ new IceCream("Chocolate Chip", false, true)]}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = function() : void {
        this.setState(function(prevState : IceCreamGetProps) {
          prevState.IceCreams.push(new IceCream("Mint", false, true))
          return prevState})
    }  

    render() {
        return (
            <div className="IceCreamDisplay">
            <button onClick={this.handleClick}>{"Get From Server"}</button>
            Delicious Ice Cream {JSON.stringify(this.state.IceCreams)}
            </div>
        );}}

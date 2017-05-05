import * as React from "react"

import { IceCream, IceCreamInterface } from "../../node_modules/shared"

import "../styles/Hello.less"

import 'whatwg-fetch'

export interface IceCreamGetProps { IceCreams : IceCreamInterface[] }

export class IceCreamGet extends React.Component<undefined, IceCreamGetProps> {
    constructor(props : any){
        super(props)
        this.state = {IceCreams : [new IceCream("Chocolate Chip", false, true)]}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        fetch("http://localhost:3000/api/IceCream").then((response) => {
            response.json().then((data : any) => {
                this.setState(function(prevState : IceCreamGetProps) {
                    prevState.IceCreams.push(this.jsonToIceCream(data))
                    return prevState})})})}

    jsonToIceCream(json : any) : IceCreamInterface {
        //return <IceCreamInterface extends {Name: string}> {Name: "ok"}
      return new IceCream("test", true, true)
    }

    render() {
        return (
            <div className="IceCreamDisplay">
            <button onClick={this.handleClick}>{"Get From Server"}</button>
            Delicious Ice Cream {JSON.stringify(this.state.IceCreams)}
            </div>
        );}}

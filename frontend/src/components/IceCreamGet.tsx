import * as React from "react"
import { IceCreamInterface } from "../../node_modules/shared"
//import "../styles/ICGet.less"
import 'whatwg-fetch'

export interface IceCreamGetProps { IceCreams : IceCreamInterface[] }

export class IceCreamGet extends React.Component<undefined, IceCreamGetProps>{
    constructor(props : any){
        super(props)
        this.state = {IceCreams : []}
        this.handleClick = this.handleClick.bind(this)}

    handleClick() {
        fetch("/api/IceCreams/").then((response) => {
            response.json().then((data : any) => {
                this.setState({IceCreams : this.jsonToIceCreams(data)})})})}

    jsonToIceCreams(jsonData : any) : IceCreamInterface[] {
        return jsonData as IceCreamInterface[]}

    render() {
        return (<div className="IceCreamDisplay">
            <button onClick={this.handleClick}>{"Get From Server"}</button>
            Delicious Ice Creams: {JSON.stringify(this.state.IceCreams)}
        </div>)}}

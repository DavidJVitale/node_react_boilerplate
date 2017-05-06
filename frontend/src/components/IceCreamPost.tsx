import * as React from "react"
import { IceCream, IceCreamInterface } from "../../node_modules/shared"
import "../styles/Hello.less"
import 'whatwg-fetch'

export interface ICPostProps { InputName: string,
                               TastyRadio: boolean,
                               GlutenRadio: boolean }

export class IceCreamPost extends React.Component<undefined, ICPostProps>{
    constructor(props : any){
        super(props)
        this.state = { InputName : "",
                       TastyRadio: false,
                       GlutenRadio: false }
        this.handleClick = this.handleClick.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)}

    handleClick() {
        fetch("http://localhost:3000/api/IceCream",
            {method: "POST",
            body: JSON.stringify(new Array<IceCreamInterface>(
                new IceCream({ Name: this.state.InputName,
                               IsGlutenFree: this.state.GlutenRadio,
                               IsTasty: this.state.TastyRadio})))})
        .catch((error) => {console.log(error)})}

    handleNameChange(event: any) {
        this.setState({InputName: event.target.value})}

    handleTastyChange(event: any){
        this.setState({TastyRadio: !this.state.TastyRadio})}

    handleGlutenChange(event: any){
        this.setState({GlutenRadio: !this.state.GlutenRadio})}

    render() {
        return (<div className="IceCreamPost">
            <button onClick={this.handleClick}>{"Post To Server"}</button>
            <input type="text" 
                   value={this.state.InputName}
                   onChange={e => this.handleNameChange(e)} />
            Is It Gluten Free? <input type="radio"
                                checked={this.state.GlutenRadio}
                                onClick={e => this.handleGlutenChange(e)} />
            Is It Tasty? <input type="radio"
                          checked={this.state.TastyRadio}
                          onClick={e => this.handleTastyChange(e)} />
        </div>)}}

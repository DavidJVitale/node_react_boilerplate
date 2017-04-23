import * as React from "react"

export interface HelloProps { compiler: string; framework: string; }

import "../styles/Hello.less"

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello from {this.props.compiler}, {this.props.framework}, and Less!</h1>
    }
}

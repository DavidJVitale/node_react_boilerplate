import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { IceCreamGet } from "./components/IceCreamGet"

import "./styles/main.less"

ReactDOM.render(
        <div>
        <Hello compiler="TypeScript" framework="React" styler="Less" />
        <IceCreamGet/>
        </div>,
    document.getElementById("example")
);

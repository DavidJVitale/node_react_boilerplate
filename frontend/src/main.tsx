import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { IceCreamGet } from "./components/IceCreamGet"
import { IceCreamPost } from "./components/IceCreamPost"

import "./styles/main.less"

ReactDOM.render(
        <div>
        <Hello compiler="TypeScript" framework="React" styler="Less" />
        <IceCreamGet/>
        <IceCreamPost/>
        </div>,
    document.getElementById("example")
);

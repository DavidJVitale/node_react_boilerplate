# Node/React with Typescript Boilerplate

This dynamic content webpage boilerplate uses Typescript on both the Node.js backend and React.js frontent.  This allows for a 1 language project with strong typing.

![](http://github.com/DavidJVitale/node_react_boilerplate/tree/master/pics/1.gif|alt=octocat) 

## About

Using Typescript for both the backend server and frontend display has distinct advantages, mainly being that types can be shared. A strong-typed IceCream object is stored in the backend server, passed to the frontend client, where it still maintains its type information.

Other technologies used include Less and webpack.

## Project Structure Breakdown
* ./backend
    * The Node/Express web server, compiled using tsc Typescript 2.X
    * Outputted main-server.js will be in ./backend/build

* ./build.sh
    * The bash script used to recompile frontend and backend during development

* ./frontend
    * Contains webpack-compiled React using Typescript and Less
    * Outputted bundle.js will be in ./frontend/dist/

* ./public
    * Contains the actual HTML page that references the bundled React.js file in ./frontend/dist/
    * Anything put in this folder will be publicly visible at /js/ on the final hosted web server

* ./README.md
    * This file

* ./shared
    * Shared typescript files between the backend and frontend. In this example, the IceCream type used by both.

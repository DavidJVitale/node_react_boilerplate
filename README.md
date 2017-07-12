# Node/React with Typescript Boilerplate

This dynamic content webpage boilerplate uses Typescript on both the Node.js backend and React.js frontent.  This allows for a 1 language project with strong typing. Other technologies used are Less and webpack.

![](http://i983.photobucket.com/albums/ae313/DavidJosephVitale/NodeReactBasic_zpsduzhfkks.gif) 

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

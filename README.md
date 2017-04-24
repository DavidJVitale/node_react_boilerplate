This is a personal project boilerplate. Here is the structure breakdown

./backend
    - The Node/Express web server, compiled using tsc Typescript 2.X
    - Outputted main-server.js should be in build

./build.sh
    - The bash script used to recompile frontend and backend during development

./frontend
    - Contains webpack-compiled React using Typescript and Less
    - Outputted bundle.js will be put in dist (index.html in ./public)

./public
    - Anything put in this folder will be publicly visible at /js/ on the 
      final hosted web server

./README.md
    - This file

./shared
    - What will eventually contain shared code modules between
      the backend and the frontend

-----

This project was created for the following purposes:

1) Create a barebones boilerplate for a Node/React web application
2) Understand all the configurations that go into the average boilerplate
3) Understand webpack bundling
4) Understand Typescript transpiling
5) Create a basis for an eventual portfolio website

Feel free to use this project for any purpose you see fit.

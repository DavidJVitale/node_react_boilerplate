import * as express from 'express'
import * as path from 'path'
import * as http from 'http'

import * as allRoutesDirectory from './routes'

function main(){
    var app = express()

    app.set('port', process.env.PORT || 3000)

    setUpStaticFiles(app)
    setUpRoutes(app)

    var server = http.createServer(app)

    server.listen(app.get('port'), () => {
        console.log("App listening on port 3000!")})}

function setUpStaticFiles(app){
    app.use('/js', express.static(path.join(__dirname, "../../frontend/dist")))
    app.use('/public', express.static(path.join(__dirname, "../../public")))}

function setUpRoutes(app){
    for (var routeFileKey in allRoutesDirectory){
        var individualRoute = allRoutesDirectory[routeFileKey]
        new individualRoute(app)}}

main()

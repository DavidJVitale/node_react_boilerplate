import * as express from 'express'
import * as path from 'path'
import * as http from 'http'
import * as reload from 'reload'

var app = express()

app.set('port', process.env.PORT || 3000)

app.use('/js', express.static(path.join(__dirname, "../../frontend/dist")))

app.use('/js', express.static(path.join(__dirname, "../../public")))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/index.html"))})

var server = http.createServer(app)

"use strict";
reload(server, app)

server.listen(app.get('port'), () => {
    console.log("App listening on port 3000!")})

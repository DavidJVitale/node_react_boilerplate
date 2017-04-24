import * as express from 'express'
import * as path from 'path'
import * as http from 'http'

var app = express()

app.set('port', process.env.PORT || 3000)

app.use('/js', express.static(path.join(__dirname, "../../frontend/dist")))

app.use('/public', express.static(path.join(__dirname, "../../public")))

import * as allControllersDirectory from './controllers'

for (var controllerFileKey in allControllersDirectory){
  var individualController = allControllersDirectory[controllerFileKey]
  new individualController(app)
}

var server = http.createServer(app)

server.listen(app.get('port'), () => {
    console.log("App listening on port 3000!")})

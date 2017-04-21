import * as express from 'express'
import * as path from 'path'

var app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/index.html"))})

app.listen(3000, () => {
    console.log("App listening on port 3000!")})

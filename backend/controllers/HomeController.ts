import * as path from 'path'

export function HomeController(req, res){
    res.sendFile(path.join(__dirname, "../../../frontend/index.html"))}

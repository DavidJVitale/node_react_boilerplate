"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var app = express();
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../../frontend/index.html"));
});
app.listen(3000, function () {
    console.log("App listening on port 3000!");
});

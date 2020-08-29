var express = require("express")
var app = express()
var port = "8080"

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/welcome", function(req, res) {
    let user = req.query.user
    let password = req.query.password

    res.send(`ola: ${user} - ${password}`)
})

app.get("/welcome/:name", function(req, res) {
    let user = req.params.name

    res.send(`only: ${user}`)
})


var server = app.listen(port, function() {
    console.info(`http://127.0.0.1:${port}`)
})
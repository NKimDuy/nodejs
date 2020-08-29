var mysql = require("mysql")
var express = require("express")
const { stringify } = require("querystring")
const { json } = require("body-parser")
var app = express()
var port = "8080"

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "app"
})



app.get("/question", function(req, res) {
    con.connect(err => {
        if (err)
            throw err
        console.log("success")
    })

    var strSql = "select * from question "
    con.query(strSql, (err, data) => {
        if (err)
            throw err
       
        res.send(JSON.stringify(data))
    })
})

var server = app.listen(port, function() {
    console.info(`http://127.0.0.1:${port}`)
})
/*
var strSql = "select * from product where name = ?"
con.query(strSql,['duy'], (err, data) => {
    if (err)
        throw err
    data.forEach(item => {
        console.info(`${item.name}`)
    })
})
*/
/**
 * Created by Sufiyan on 12/12/2015.
 */
var express=require('express');

var http=require('http');

var app=express();

app.use(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("<h1>Hello S baba welcome to express</h1>");
});

http.createServer(app).listen(3000);
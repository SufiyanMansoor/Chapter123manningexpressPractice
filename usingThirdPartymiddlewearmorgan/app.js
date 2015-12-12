/**
 * Created by Sufiyan on 12/12/2015.
 */
var express=require('express');

var logger=require('morgan');

var http=require('http');

var app=express();

app.use(logger("short"));

app.use(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("<h1>Hello Sufiyan Welcome to third party module name as morgan</h1>")

});

http.createServer(app).listen(3000)
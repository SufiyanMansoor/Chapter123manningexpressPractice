/**
 * Created by Sufiyan on 12/12/2015.
 */
var express=require('express');

var http=require('http');

var app=express();

app.use(function (request, response, next) {
    console.log("in Comes a "+request.method+"to"+request.url);
    next();
});

app.use(function (request,response,next) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    next();

});
app.use(function (request,response) {
   response.end('Hello Sufiyan Welcome To middle wear You can accross 2 middle wear');

});


http.createServer(app).listen(3000);



























/*Empty Middle Wear does not meaning or working*/

/*
function myMiddleWear(request,response,next){


    next();
}*/

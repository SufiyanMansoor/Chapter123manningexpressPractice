/**
 * Created by Sufiyan on 12/12/2015.
 */
var express=require('express');

var http=require('http');

var app=express();

app.use(function (req, res, next) {
    console.log('in comes a request'+req.url+"To"+req.method);
    next();
});
app.use(function(req, res, next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next(); 
    } else {
        res.statusCode = 403;
        res.end("Not authorized.");
    }
});
app.use(function (req,res) {
    res.end("secret info the passcode is 'baba123'!");
});
http.createServer(app).listen(3000);
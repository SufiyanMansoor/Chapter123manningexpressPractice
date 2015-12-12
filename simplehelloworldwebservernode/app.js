/**
 * Created by Sufiyan on 12/12/2015.
 */
var http=require('http');
function requestHandler(request,reponse) {
    console.log("in comes a request to:"+request.url);
    reponse.end("<h1>Hello sufiyan welcome to simple Hello world web server</h1>")

}



var server=http.createServer(requestHandler);
server.listen(3000);
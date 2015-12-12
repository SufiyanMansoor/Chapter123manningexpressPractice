/**
 * Created by Sufiyan on 12/12/2015.
 */

var http=require('http');

function requestHandler(request, response) {
 if(request.url==="/"){
     response.end("<h1>Welcome to the home page</h1>")
     }
 else if(request.url==="/about"){
     response.end('<h1>welcome to about page</h1>')

 }
  else{
     response.end('<h1>404, Error !! Is Found</h1>')

 }

}
var server=http.createServer(requestHandler);
server.listen(3000)

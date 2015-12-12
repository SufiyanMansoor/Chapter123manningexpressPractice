/**
 * Created by Sufiyan on 12/12/2015.
 */
var express=require('express');

var app=express();

app.get('/',function(request,reponse){
    response.send("Hello Sufiyan Welcome to express!!")

} );
app.listen(3000,function(){

    console.log("express app started on port 3000...")
})
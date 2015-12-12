/**
 * Created by Sufiyan on 12/12/2015.
 */
app.get("/hello/:who", function(request, response) {
    response.end("Hello, " + request.params.who + ".");
// Fun fact: this has some security issues, which we'll get to!
});
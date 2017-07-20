var http = require('http');
var urlParser = require('url'); // Adds urlParser
var server = http.createServer().listen(3001);
// .listen is referring to Port. whenever we go to this URL we are hitting this port. 
console.log('Im listening on port: 3001');

//once we hit our server in the browser, it is going to return back whatever function we entered/
server.on('request', function(request, response) {
    var urlObj = urlParser.parse(request.url); //
    var pathname = urlObj.pathname; // parsing our the important info in the url

    console.log("requested: " + pathname);
    console.log(request.url);

    response.writeHead(200, { 'Content-Type': 'text/html' });
    //whats going to be shown in the brower
    if (pathname === "/fun-times") {
        response.write("<html><h1>Fun Times!</h1>");
        response.write("<script>console.log('hello world in the console')</script>");
        response.write("</html>");
    } else {

        //you can continue calling response.write and it will add more and more to what is going to be shown to user.
        response.write('<html>Hello World!');
        response.write('<script>console.log(\'I\'m client-side JavaScript being sent via server-side JavaScript\');</script>');
        response.write('</html>');
    }
    response.end();
    //lets server know that everything is complete.
  
});
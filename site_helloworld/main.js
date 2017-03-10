'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed."); }
//////////////////////////////////////////////////

log("Starting our first site!");

let http = require('http');

let server = http.createServer(function(request, response) {
    log("Received a request for url \"" + request.url + "\"");
    response.write("<html><body>Hello world</body></html>");
    response.end();
});

server.listen(8080);
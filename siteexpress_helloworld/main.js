'use strict';
function log(msg) { console.log(msg); }
function assert(pred) { log(pred ? "Passed." : "Failed."); }
//////////////////////////////////////////////////

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    log("Got request!");
    res.send('hello world');
});

app.listen(8080, function() {
    log("Running!");
});

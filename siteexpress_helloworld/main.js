let express = require('express');
let app = express();

app.get('/', function (req, res) {
    log("Got request!");
    res.send('hello world');
});

app.listen(8080, function () {
    log("Running!");
});

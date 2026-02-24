var express = require('express');
var app = express();
var path = require('path');
var RateLimit = require('express-rate-limit');

var myLogger = function (req, res, next) {
    console.log('GET ' + req.path)
    next()
}

var limiter = RateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
});

app.use(myLogger);
app.use(limiter);
app.use(express.static('.'))

// viewed at http://localhost:8080
app.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});

var PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log('Server started at http://localhost:' + PORT));

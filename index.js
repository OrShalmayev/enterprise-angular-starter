const express = require('express');
const path = require('path');
const app = express();
const compression = require('compression')
app.use(express.static(__dirname + '/dist/ngrx-best-practice'));
app.use(compression())

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/ngrx-best-practice/index.html'));
});

app.listen(process.env.PORT || 8080);
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');


var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);


app.listen(8000, function(){
    console.log('Server started on port 8000...');
});

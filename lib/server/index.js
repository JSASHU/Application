'use strict';

var config = require('../../config');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var Handlers = require('./handlers');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// For Setting Template Engine and jsx Lookup Directory
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Routers and their corresponding Handlers
app.get('/', Handlers.index);
app.get('/getProductByCat', Handlers.getProductByCat);
app.get('/getAllCategory', Handlers.getAllCategory);
app.get('/getAllProduct', Handlers.getAllProduct);
app.post('/insertProduct', Handlers.insertProduct);


app.listen(config.port.default);
console.log('Server is Running on ' + config.port.default);

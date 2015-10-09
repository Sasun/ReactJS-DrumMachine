'use strict';

//load environment variables from .env ------------------------------------------ +
var env = require('node-env-file');
env(__dirname + '/.env');

//dependancies ----------------------------------------------------------------- +
var express         = require('express'),
    http            = require('http'),
    path            = require('path'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    cors            = require('cors'),
    models          = require("./models"),
    app             = express(),
    routes          = require('./routes/index')(app),
    server          = http.createServer(app),
    port            = 8080,
    fs              = require('fs'),
    mongoose        = require('mongoose'),
    hbs             = require('express-handlebars'),
    favicon         = require('express-favicon');


//app config -------------------------------------------------------------------- +
app.set('appname', 'My Test App');
app.set('author', 'Luke Freeman');

//general config ---------------------------------------------------------------- +
app.use(express.static(__dirname + '/public')); 
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './public/');
app.set('view engine', '.hbs');
app.engine('.hbs', hbs({extname: '.hbs', 'viewsDir': '/public'}));
app.use('/', routes);
app.set('host','localhost');
app.use(favicon(__dirname + '/public/favicon.ico'));

//response object (default object each view will render) ---------------------- +
app.set('responseObj',{
    title: app.get('appname'),
    react: {}
});

//mailgun config --------------------------------------------------------------- +
app.set('mailgun_api', 'key-2312a61dbda7ab6cb61af73af9521bc7');
app.set('mailgun_domain', 'sandboxb0b890c021cc47959e84ab574fdde4e8.mailgun.org');
app.set('admin_email', 'luke@freemandigital.com');

//start http server ------------------------------------------------------------ +
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});

//on application exit ---------------------------------------------------------- +
process.on('exit', function(){
    console.log('GOODBYE!');
});

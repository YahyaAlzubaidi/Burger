//Requied dependencies
var express = require('express');
var bodyParser = require('bodyParser');
var methodOverride = require('methodOverride');

var port = process.env.PORT || 3000; 
var app = express();
 //serve static content for the pp from the 'public' directory

 app.use(express.static(process.cwd() +'/public'));
 app.use(bodyParser.urlencoded({extended: false}));
 
 // Override with POST having ?_method=DELETE
 app.use(methodOverride('_method'));

 //Set Handlebars as the view engin
 var exphbs = require('express-handlebars');

 app.engin('handlebars', exphbs({ defaultLayout: 'main' }));
 app.set('view engin', 'handlebars');



 //Import routes and give the server access to them 

 var routes = require('./controller/burgers_controller.js');
 app.use('/', routes);

 app.listen(port);
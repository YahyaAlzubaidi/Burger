//Requied dependencies
console.log('test')
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000; 
var app = express();
 //serve static content for the pp from the 'public' directory

 app.use(express.static(process.cwd() +'/public'));
 app.use(bodyParser.urlencoded({extended: false}));
 
 // Override with POST having ?_method=DELETE
 app.use(methodOverride('_method'));

 //Set Handlebars as the view engin
 var exphbs = require('express-handlebars');

 app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
 app.set('view engine', 'handlebars');



 //Import routes and give the server access to them 

 var routes = require('./controllers /burgerController.js');
 app.use('/', routes);

 app.listen(port);
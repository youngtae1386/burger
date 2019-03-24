

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var timeout = require('connect-timeout');

//trying out morgan logs
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');


var app = express();

//Express static uses whatever domain name/public
app.use(express.static(process.cwd() + "/public")); //Handlebars likes this one better
// Timeout
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}

//Sets up morgan for logging
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(haltOnTimedout);

app.use(methodOverride('_method'));
app.use(haltOnTimedout);

var express = require('express-handlebars');
app.engine('handlebars', express({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Setting up the routes
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);
app.use(haltOnTimedout);

//sets up the port 
var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port %s", port));
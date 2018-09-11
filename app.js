var express = require('express');
var bodyParser = require('body-parser');
var reload = require('reload');
var app = express();

var cors = require('cors')

//var origin = 'http://localhost:4444';
var corsOptions = {
  origin: '*'
}

var promise = require('bluebird');
var options = {
  // Initialization Options
  promiseLib: promise
};

//localhost port
var port = 4000;

app.set('port', process.env.PORT || port );

//app.set('appData', database);

app.set('view engine', 'html');
app.set('views', './public');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(require('./routes/api'));

app.all('/*', function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    response.header("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
    next();
});

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);

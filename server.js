// necessary dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// controllers
const app_controller = require('./controllers/app_controller.js')

// instantiate express
const app = express();

// set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// serve static content from the public directory in the app folder
app.use(express.static(path.join(__dirname, 'public')));

// controllers to driect what to servce based on route
app.use('/', function() {
  console.log("Worked");
});

// set port to whatever environment it's in or to 3000
let port = process.env.PORT || 3000;

// listen in on port 3000
app.listen(port, function() {
  console.log("Listening in on port %s", port);
})

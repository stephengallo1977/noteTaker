
//This is where i import all of the node modules installed to run app
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

// Here is where the middleware is loaded

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Create API and HTML routes

// The api routes will store and retrieve the data from the data array. This is the same as fetching data from a database and saving to it
// The html files or static routes are the views of app and make requests to the API routes to fetch and update the data
var htmlroutes = require('./routes/htmlRoutes');
var apiroutes = require('./routes/apiRoutes');
app.use(apiroutes)
app.use(htmlroutes)

//Here starts the application
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT)
})
var path = require('path');
var appConfig = require(path.join(__dirname, '../..', 'app.config'));
var express = require('express');
var app = express();
var staticPath = path.resolve(__dirname, '../..', 'public');
console.log(staticPath);
app.use('/static', express.static(staticPath));

/* Delegate to the front end to handle the routes
  for all routes except /api */
app.all(/^\/(?!api).*/, function(req, res){
  res.sendFile('client/app/index.html', {root: path.resolve('..') });
});

/* for making apis: /api/... */
app.get('/api', function(req, res){
  res.json({
    "name": "amin"
  })
});

/* client handle 404 */
app.all("/404", function(req, res, next) {
  res.sendFile("index.html", {root: path.resolve('..') });
});

/* catch invalid requests */
app.get('*', function(req, res, next) {
 console.log("404: " + req.originalUrl + " was not found")
 res.status(404).redirect("/404");
});

var port = appConfig.server.port.dev;
app.listen(port);

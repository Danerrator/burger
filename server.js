var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3500;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("vie engine", "handlebars");

var router = require("./controllers/burgersController.js")
app.use(router);

app.listen(PORT, function() {
  console.log("Server is listening on: http://localhost:" + PORT);
});
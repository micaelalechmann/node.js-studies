let express = require("express");
let app = express();
let port = process.env.PORT || 8080;
let mongoose = require("mongoose");
let Task = require("./api/models/todoModel");
let bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todo-db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let routes = require("./api/routes/todoRoutes");
routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send(`${req.method} ${req.originalUrl} not found`);
});

console.log("todo api server started on port " + port);

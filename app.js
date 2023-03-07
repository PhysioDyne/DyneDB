const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const formRoutes = require("./routes/formRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(formRoutes);
app.use(express.static("assets"));

app.listen(8080);

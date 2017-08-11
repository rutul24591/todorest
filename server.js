var express = require("express");
var app= express();

var port = process.env.port || 8000;

app.listen(port);

console.log("TodoList server started and listening on port: " +port);

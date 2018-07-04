var express = require("express");
var bodyParser = require("body-parser");
var mc = require("./controllers/messages_controllers.js");


var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "../public/build"));
app.get("/api/messages", mc.read);
app.post("/api/messages", mc.create);
app.put("/api/messages/:id", mc.update);
app.delete("/api/messages/:id", mc.delete);

app.listen(3000, function() {
    console.log("The server is run on 3000");
});


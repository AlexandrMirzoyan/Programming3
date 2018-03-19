var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello World")
});

app.get("/name", function (req, res) {
    var name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.get("/name/:search", function(req,res){
    var search = req.params.search;
    res.send("/*");
});

app.get("/google", function (req, res) {
    var google = res.redirect('http://google.com');
});

app.get("/google/:search", function (req, res) {
    var search = res.redirect("google.com/search?q={search value}");
});

app.get("/*/:/*", function (req,res) {
    var error = res.redirect("/*")
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

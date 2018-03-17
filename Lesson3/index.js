var express = require("express");
var app = express();

app.get("/name/:name", function (req, res) {
    var name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.get("/google/:google", function (req, res) {
    var google = res.redirect('http://google.com');
});

app.get("/google/:search", function (req, res) {
    var search = res.redirect("google.com/search?q={search value}");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});

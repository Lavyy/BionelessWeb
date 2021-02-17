var main = require('./js/main.js');
//var vue = require('./main.html');

var express = require("express");
var app = express();
var path = require('path');

express.static('public');
app.use(express.static(path.join(__dirname,'css')));

app.use(express.static(__dirname + '/css'));

app.listen(3000, () => {
	console.log("Server running on port 3000");
});

app.get("/courir", (req, res, next) => {
	res.sendFile("C:/Users/klava/OneDrive/Documents/EFREI/M2/Projet_Transverse/apiTest/public/courrir.html");
});

app.get("/marcher", (req, res, next) => {
	res.sendFile("C:/Users/klava/OneDrive/Documents/EFREI/M2/Projet_Transverse/apiTest/public/marcher.html");
});

app.get("/immobile", (req, res, next) => {
	res.sendFile("C:/Users/klava/OneDrive/Documents/EFREI/M2/Projet_Transverse/apiTest/public/immobile.html");
});

app.get("/monter", (req, res, next) => {
	res.sendFile("C:/Users/klava/OneDrive/Documents/EFREI/M2/Projet_Transverse/apiTest/public/monter.html");
});

app.get("/descendre", (req, res, next) => {
	res.sendFile("C:/Users/klava/OneDrive/Documents/EFREI/M2/Projet_Transverse/apiTest/public/descendre.html");
});

app.get("/index", (req, res, next) => {
	res.sendFile("C:/Users/klava/OneDrive/Documents/EFREI/M2/Projet_Transverse/apiTest/public/index.html");
});

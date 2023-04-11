const express = require('express');
const https = require('https'); //native module
const bodyParser = require('body-parser');
const config = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

const ejs = require('ejs'); //require ejs
app.set("view engine","ejs");

app.get('/', function(req,res){
    res.render('index', {apiKey: config.apiKey}); //renders the ejs file
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})
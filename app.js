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

// app.post("/", function(req, res){
//     const query = req.body.movieName;
//     const apiKey = "97433465f74fe7bea2dd17d1da576adb";
//     const url = "https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query="+query;

//     https.get(url, function(response){
//         console.log(response.statusCode);

//         response.on("data", function(data){
//             const movieData = JSON.parse(data);
//             console.log(movieData.results[0]);
//             const movie = movieData.results[0]; //the first movie that appears from the search
//             const title = movie.title;
//             const release = movie.release_date;
//             const description = movie.overview;
//             //it also returns genre IDs in the form of numbers, I'll come back to this
//             const rating = movie.vote_average;
//             res.write("<h1>"+title+"</h1>");
//             res.write("<p>Release Date: "+release+"</p>");
//             res.write("<p>Rating: "+rating+"</p>");
//             res.write("<p>"+description+"</p>");
//             res.send();
//         })
//     })
// })

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})
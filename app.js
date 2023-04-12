const express = require('express');
const https = require('https'); //native module
const bodyParser = require('body-parser');
const config = require("./config");
const apiKey = config.apiKey;
const axios = require("axios");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

const ejs = require('ejs'); //require ejs
app.set("view engine","ejs");

app.get('/', function(req,res){
    res.render('index', {apiKey: config.apiKey}); //renders the ejs file
})

app.get('/movie/:id', function(req, res){

})

app.get('/search/:movieName', function(req, res){
    var movieName = req.params.movieName;
    //make a call to the api
    axios.get("https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query="+movieName)
    .then(function(response){
        res.status(200).send(response.data);
        console.dir(response.data.results[0]);
    })
    .catch(function(response){
        res.status(500).send(response.data);
        console.dir(response.data.results[0]);
    });
        // type: "get",
        // data:
        // {
        //     movieName:movieName
        // },
        // success: function(response){
        //     if(response.total_results>0){
        //         // var string = "";
        //         // console.log(response.results[0]);
        //         // const movie = response.results[0];
        //         // string+="<h1>"+movie.title+"</h1>";
        //         // string+="<p>Release Date: "+movie.release_date+"</p>"
        //         // string+="<p>Rating: "+movie.vote_average+"</p>"
        //         // string+='<img src=\"https://image.tmdb.org/t/p/original/'+movie.poster_path+'\" width=\"250\"alt=\"movie poster\">';
        //         // string+="<br><br>"
        //         // string+="<p>"+movie.overview+ "</p>"
        //         // $("#mydiv").html(string);
        //         return res.status(200).send(response);
        //     }
        //     else{
        //         $("#mydiv").text("No movies found by that name"); //change this later
        //     }
        // },
        // error: function(xhr) {
        //     $("#mydiv").text('error: ' + xhr); //change this
        // }
})



app.listen(3000, function(){
    console.log("Server is running on port 3000")
})
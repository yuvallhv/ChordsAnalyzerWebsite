// this should always be at the top
require("dotenv").config();

const data = require('./general_data')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var favicon = require('serve-favicon');
var path = require('path');

const app = express();
const ChordsAalyzerData = require('./BL/BlForServer.js');

app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(favicon(path.join(__dirname, 'client', 'public', 'favicon.ico')));

// ***************** app get and post ******************

app.get("/getArtists", async function (req, res) {
  let keys = ChordsAalyzerData.getArtists(false)
  res.send({ list_elements: keys })
});


app.get("/getFamousArtists", async function (req, res) {
  let keys = ChordsAalyzerData.getArtists(true)
  res.send({ list_elements: keys })
});

app.get("/getCategories", async function (req, res) {
  let categories = ChordsAalyzerData.getCategories()
  res.send({ list_elements: categories })
});

app.post("/getInfoOfSpecificArtist", function (req, res) {
  let artist = req.body.value
  let artistData = ChordsAalyzerData.getDataOfSpecificArtistOrCategory(artist,false,true)
  res.send(artistData)
})


app.post("/getInfoOfSpecificArtistByGroups", function (req, res) {
  let artist = req.body.value
  let artistData = ChordsAalyzerData.getDataOfSpecificArtistOrCategory(artist,true,true)
  res.send(artistData)
})


app.get("/getInfoOfAllSongs", function (req, res) {
  let songsData = ChordsAalyzerData.getDataForAllSongs(false)
  res.send({ result: songsData })
})


app.get("/getInfoOfAllSongsByGroups", function (req, res) {
  let songsData = ChordsAalyzerData.getDataForAllSongs(true)
  res.send({ result: songsData })
})


app.post("/getInfoOfSpecificCategory", function (req, res) {
  let category = req.body.value
  let categoryData = ChordsAalyzerData.getDataOfSpecificArtistOrCategory(category,false,false)
  res.send(categoryData)
})


app.post("/getInfoOfSpecificCategoryByGroups", function (req, res) {
  let category = req.body.value
  let categoryData = ChordsAalyzerData.getDataOfSpecificArtistOrCategory(category,true,false)
  res.send(categoryData)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// ***************** start the server ******************
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port, function () {
  console.log("Server started on port 5000");
});



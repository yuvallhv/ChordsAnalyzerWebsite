// this should always be at the top
require("dotenv").config();

const data = require('./general_data')
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");
var favicon = require('serve-favicon');
var path = require('path');

const app = express();
const ChordsAalyzerData = require('./BL/GetChordsAnalyzerData.js');
const { strict } = require("assert");
ChordsAalyzerData.getAllData()
app.set('view engine', 'ejs');

app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(favicon(path.join(__dirname, 'client', 'public', 'favicon.ico')));


const collection = "artists";


// app.get("/bgdgdsg", function (req, res) {
//   const artists = find(collection, {}, function (err, artists) {
//     console.log("found " + artists.length + " artists in the DB");
//     res.send({ artists: artists });
//   });
// });


// ***************** app get and post ******************

app.get("/getArtists", async function (req, res) {
  let artists_json = data["chords_weight_by_artists"]
  let keys = Object.keys(artists_json).sort();
  res.send({ list_elements: keys })
});


app.get("/getFamousArtists", async function (req, res) {
  let artists_json = data["famous_artists"].sort()
  res.send({ list_elements: artists_json })
});


app.get("/getUrls", async function (req, res) {
  res.send({ list_elements: data.artists_urls })
});


app.get("/getCategories", async function (req, res) {
  res.send({ list_elements: data.categories.sort() })
});


app.post("/getInfoOfSpecificArtist", function (req, res) {
  let artist = req.body.value
  let url = data.artists_urls[artist]
  let result = data.chords_weight_by_artists
  let keys = Object.keys(result);

  new_keys = keys.filter((key) => {
    return key === artist
  })
  let res_json_not_sorted = result[new_keys[0]]
  let res_array_not_sorted = []
  for (key of Object.keys(res_json_not_sorted)) {
    res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
  }
  let res_array_sorted = res_array_not_sorted.sort((elemA, elemB) => { return elemB.value - elemA.value })
  res.send({ result: res_array_sorted, artist_url: url})
})


app.post("/getInfoOfSpecificArtistByGroups", function (req, res) {
  let artist = req.body.value
  let url = data.artists_urls[artist]
  let result = data.chords_weight_in_groups_by_artists
  let keys = Object.keys(result);

  new_keys = keys.filter((key) => {
    return key === artist
  })
  let res_json_not_sorted = result[new_keys[0]]
  let res_array_not_sorted = []
  for (key of Object.keys(res_json_not_sorted)) {
    res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
  }
  let res_array_sorted = res_array_not_sorted.sort((elemA, elemB) => { return elemB.value - elemA.value })
  res.send({ result: res_array_sorted, artist_url: url})
})


app.get("/getInfoOfAllSongs", function (req, res) {
  let result = data.chords_weight
  let keys = Object.keys(result);
  let res_json_not_sorted = result
  let res_array_not_sorted = []
  for (key of Object.keys(res_json_not_sorted)) {
    res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
  }
  let res_array_sorted = res_array_not_sorted.sort((elemA, elemB) => { return elemB.value - elemA.value })
  res.send({ result: res_array_sorted })
})


app.get("/getInfoOfAllSongsByGroups", function (req, res) {
  let result = data.chords_weight_in_groups
  let keys = Object.keys(result);
  let res_json_not_sorted = result
  let res_array_not_sorted = []
  for (key of Object.keys(res_json_not_sorted)) {
    res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
  }
  let res_array_sorted = res_array_not_sorted.sort((elemA, elemB) => { return elemB.value - elemA.value })
  res.send({ result: res_array_sorted })
})


app.post("/getInfoOfSpecificCategory", function (req, res) {
  let a = { "gi": { "df": 2, "gr": 5 } }
  let category = req.body.value
  let result = data.chords_weight_by_genres
  let keys = Object.keys(result);
  new_keys = keys.filter((key) => {
    return key === category
  })
  let res_json_not_sorted = result[new_keys[0]]
  let res_array_not_sorted = []
  for (key of Object.keys(res_json_not_sorted)) {
    res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
  }
  let res_array_sorted = res_array_not_sorted.sort((elemA, elemB) => { return elemB.value - elemA.value })

  let sortComp = function (elemA, elemB) {}
  res.send({ result: res_array_sorted })
})


app.post("/getInfoOfSpecificCategoryByGroups", function (req, res) {
  let a = { "gi": { "df": 2, "gr": 5 } }
  let category = req.body.value
  let result = data.chords_weight_in_groups_by_genres
  let keys = Object.keys(result);
  new_keys = keys.filter((key) => {
    return key === category
  })
  let res_json_not_sorted = result[new_keys[0]]
  let res_array_not_sorted = []
  for (key of Object.keys(res_json_not_sorted)) {
    res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
  }
  let res_array_sorted = res_array_not_sorted.sort((elemA, elemB) => { return elemB.value - elemA.value })

  let sortComp = function (elemA, elemB) {}
  res.send({ result: res_array_sorted })
})


app.get("/SimilarProjects", function (req, res) {
  res.render("SimilarProjects");
});


app.get("/OurFindings", function (req, res) {
  const artists = find(collection, {}, function (err, artists) {
    res.render("OurFindings", { artists: artists });
  });
});


app.get("/AboutTheProject", function (req, res) {
  res.render("AboutTheProject");
});


app.get("/AboutUs", function (req, res) {
  res.render("AboutUs");
});


app.get("/DataSchema", function (req, res) {
  res.render("DataSchema");
});


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


// ***************** functions ******************
function find(collection, query, callback) {
  mongoose.connection.db.collection(collection, function (err, collection) {
    collection.find(query).toArray(callback);
  });
}

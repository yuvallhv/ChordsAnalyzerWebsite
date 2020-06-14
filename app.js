// this should always be at the top
require("dotenv").config();

const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// get env variables
 const username = process.env.MONGO_DB_USERNANE;
const password = process.env.MONGO_DB_PASSWORD;
const host = process.env.HOST;
const dbName = process.env.DB_NAME;
const collection = process.env.COLLECTION_NAME;

mongoose.connect("mongodb+srv://" + username + ":" + password + "@songsdataclusters-qgiff.mongodb.net/" + dbName + "?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  });


app.get("/", function(req, res) {
  res.render("home");

  // const artists = find(collection, {}, function (err, artists) {
  //           console.log("found " + artists.length + " artists in the DB");
  //           res.render("home", {artists: artists});
  //       });
});

app.post("/", function(req, res) {

  res.redirect("/");
});


// start the server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function() {
  console.log("Server started on port 3000");
});


// ***************** functions ******************
function find(collection, query, callback) {
    mongoose.connection.db.collection(collection, function (err, collection) {
       collection.find(query).toArray(callback);
   });
}


///

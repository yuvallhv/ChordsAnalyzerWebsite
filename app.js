const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// get secrets
const secrets = JSON.parse(fs.readFileSync('secrets.json'));
const username = secrets.username;
const password = secrets.password;
const host = secrets.host;
const jsonsLocation = secrets.jsonsLocation;
const dbName = secrets.dbName;
const collectionName = secrets.collection;

mongoose.connect("mongodb+srv://" + username + ":" + password + "@songsdataclusters-qgiff.mongodb.net/" + dbName + "?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  });


app.get("/", function(req, res) {
  const artists = find(collectionName, {}, function (err, artists) {
            console.log("found " + artists.length + " artists in the DB");
            res.render("home", {artists: artists});
        });
});

app.post("/", function(req, res) {

  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});



function find(collectionName, query, callback) {
    mongoose.connection.db.collection(collectionName, function (err, collection) {
       collection.find(query).toArray(callback);
   });
}


///

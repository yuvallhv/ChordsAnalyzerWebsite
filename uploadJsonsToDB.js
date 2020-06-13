const express = require("express");
const mongoose = require("mongoose");
const fs = require( 'fs' );
const path = require( 'path' );
var process = require("process");
const { exec } = require('child_process');

const app = express();

// get secrets
const secrets = JSON.parse(fs.readFileSync('public/secrets.json'));
const username = secrets.username;
const password = secrets.password;
const host = secrets.host;
const jsonsLocation = secrets.jsonsLocation;
const dbName = secrets.dbName;
const collection = secrets.collection;


// setup connection to mongoose
mongoose.connect("mongodb+srv://admin-yuval:" + password + "@songsdataclusters-qgiff.mongodb.net/" + dbName + "?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true  });


// read the jsons to the Database
fs.readdir(jsonsLocation, function (err, files) {

  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach(function(file) {

    // Get the full paths
    const filePath = path.join(jsonsLocation, file);

    if (filePath.includes(".json")) {

      const mongoImportCmd = "mongoimport --host " + host + " --db " + dbName + " --type json --file '" + filePath + "' --authenticationDatabase admin --ssl --username " + username + " --password " + password + " --collection " + collection;

      exec(mongoImportCmd, (error, stdout, stderr) => {
          if (error) {
              console.log(`error: ${error.message}`);
              return;
          }
          if (stderr) {
              console.log(`stderr: ${stderr}`);
              return;
          }
          console.log("Added file to DB, file's name: " + file);
      });


    }
  });
});

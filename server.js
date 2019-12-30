// Name console logging variable
const Log = console.log; 

// Get npm dependencies
const express = require("express");
const path = require("path");

// Get the database dependency
const mongoose = require("mongoose");

// Define app
const app = express();

// Define port
const PORT = process.env.PORT || 3001;

// Add routes, both API and view
const apiRoutes = require("./controller/apiRoutes")

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('body-parser').urlencoded({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

// Connect to the Mongo DB
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/myProjects";
mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) {
    Log (`Error: Could not connect to database`)
  }
  else {
    Log("Database created!");
    Log (db);
  }
});

app.use(apiRoutes);

// Start the server
app.listen(PORT, function() {
  Log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});

// Name console logging variable
const Log = console.log; 

// Get npm dependencies
// const passport = require ("./passport");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const parser = require("body-parser"); 
const session = require("express-session");

// Get dev dependencies
// const model = require("model");
// const view = require("view");
// const controller = require("controller");

// Define app
const app = express();

// Define port
const PORT = process.env.PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((parser).urlencoded({ extended: true }));
app.use((session)({ secret: "pinkPJs", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Serve up static assets
if(process.env.NODE_ENV === "production"){
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

// Add routes, both API and view
// app.use(routes);
// app.use(model);
// app.use(view);
// app.use(controller);

// Connect to the Mongo DB
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  Log("Database created!");
  // Log (db);
});

// Start the server
app.listen(PORT, function() {
  Log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});

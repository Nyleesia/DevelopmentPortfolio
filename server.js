// Name console logging variable
// const Log = console.log; 

// Get npm dependencies
const express = require("express");
const mongoose = require("mongoose");

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

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

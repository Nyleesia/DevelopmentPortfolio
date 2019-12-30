const express = require('express');
const app = express();
const router = express.Router();
const db = require('../../model/schema');
const Projects = require("../projectsController");



router.get(
  "/groupProjects", (req, res) => {
        Projects.findGroupProjects(req, res);
})

router.get(
    "/individualProjects", (req, res) => {
        Projects.findIndividualProjects(req, res);
  })

module.exports = router
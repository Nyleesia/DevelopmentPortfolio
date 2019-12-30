const db = require("../../model/schema");

module.exports = {
    findGroupProjects: function(req, res) {
        console.log(db, "dbprojects")
        return db.Projects
           .find({})
           .then(dbModel => res.json(dbModel))
           .catch(err => res.status(422).json(err));
     },

     findIndividualProjects: function(req, res) {
        console.log(db, "dbprojects")
        return db.Projects
           .find({})
           .then(dbModel => res.json(dbModel))
           .catch(err => res.status(422).json(err));
     }

};
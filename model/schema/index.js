// Get dependencies
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

// Build model schema
const MyProjects = new Schema ({

    title : {
        type :  String 
    },

    image : {
        data: Buffer,
        type :  String 
    },

    category : {
        group : {
            type :  String 
        },
        individual : {
            type :  String 
        }
    },

    info : {
        type :  String 
    },

    repo : {
        type : String
    }, 
    
    site : {
        type :  String
    }
})

// Export folio model
module.exports = mongoose.model ("MyProjects", MyProjects);
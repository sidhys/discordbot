const mongoose = require("mongoose");

module.exports = mongoose.model("punishments",
    mongoose.Schema({
        userid: String, 
        punishments: Array,
    })
)
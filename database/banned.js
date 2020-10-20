const mongoose = require("mongoose");

module.exports = mongoose.model("databasebanneds",
    mongoose.Schema({
        userid: String,
    })
)
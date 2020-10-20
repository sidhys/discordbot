const mongoose = require("mongoose");

module.exports = mongoose.model("bled",
    mongoose.Schema({
        userid: String,
    })
)
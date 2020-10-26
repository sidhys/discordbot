const mongoose = require("mongoose");

module.exports = mongoose.model("prefix",
    mongoose.Schema({
        Value: String,
    })
)
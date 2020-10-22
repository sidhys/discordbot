const mongoose = require("mongoose");

module.exports = mongoose.model("reactions",
    mongoose.Schema({
        Value: String,
    })
)
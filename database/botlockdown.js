const mongoose = require("mongoose");

module.exports = mongoose.model("botlockdown",
    mongoose.Schema({
        Value: String,
    })
)
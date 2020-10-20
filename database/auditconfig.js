const mongoose = require("mongoose");

module.exports = mongoose.model("auditconfig",
    mongoose.Schema({
        Value: String,
    })
)
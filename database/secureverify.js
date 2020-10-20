const mongoose = require("mongoose");

module.exports = mongoose.model("usertests",
    mongoose.Schema({
        DiscordID: String, 
    })
)
const { Schema, model } = require('mongoose')

module.exports = model("tags", new Schema({
    Guild: String,
    Name: String,
    Content: String,
}))
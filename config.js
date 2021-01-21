var config = {};

// change config.token's value to "ENTER YOUR TOKEN HERE"
// change config.mongodbcred's value to "ENTER YOUR MONGO CREDENTIALS HERE" or "NULL" if you dont want a db

config.token = process.env.token; 
config.mongodbcred = process.env.mongodb; 
config.logerrors = true;
config.allowdm = false;
config.allowpartials = true;
config.eval = true;
config.verifiedrole = "Verified";
config.mutedrole = "Muted";
config.startdb = false;

module.exports = config;

var config = {};

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

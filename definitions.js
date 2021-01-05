// Requires discord module

const Discord = require('discord.js');

// Defines common embeds, and exports them

module.exports.invalidargs = function (message) { 
    let invalidargs = new Discord.MessageEmbed() 
       .setTitle("Bot")
       .setColor('BLUE')
       .setDescription(`Invalid argument, ${message.author}.`)
       .setTimestamp();
       return invalidargs;
} 

module.exports.Youdonthavepermsembed  = function (message) { 
    let Youdonthavepermsembed  = new Discord.MessageEmbed() 
       .setTitle("Bot")
       .setColor('BLUE')
       .setDescription(`You do not have enough permissions to run this command, ${message.author}.`)
       .setTimestamp();
       return Youdonthavepermsembed;
} 

module.exports.staffYoudonthavepermsembed  = function (message) { 
    let staffYoudonthavepermsembed  = new Discord.MessageEmbed() 
       .setTitle("Bot")
       .setColor('BLUE')
       .setDescription(`You can not run this command on staff, ${message.author}.`)
       .setTimestamp();
       return staffYoudonthavepermsembed;
} 

module.exports.errorembed  = function (message) { 
    let errorembed  = new Discord.MessageEmbed() 
       .setTitle("Bot")
       .setColor('BLUE')
       .setDescription(`An error occured, ${message.author}. I've logged further detials to console.`)
       .setTimestamp();
       return errorembed;
} 

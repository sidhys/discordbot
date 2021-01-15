const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'verify',
    aliases: ['verify'],
    description: 'Verifies you in the discord server.',
	execute(message, args) {

    
      var role = message.guild.roles.cache.find(role => role.name === "Verified");
        message.member.roles.add(role.id);

          const verifysuccess = new Discord.MessageEmbed()
               .setTitle("Success")
               .setColor('#f3f3f3')
               .setDescription(`${message.author}, you have been verified!`)
               .setTimestamp();

        message.channel.send(verifysuccess)
        
	},
};


const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'verify',
    aliases: ['verify'],
    description: 'Verifies you in the discord server.',
	execute(message, args) {

        message.member.roles.add("714833474166587425");
        message.member.roles.remove("714833374010933361");

          const verifysuccess = new Discord.MessageEmbed()
               .setTitle("Success")
               .setColor('#f3f3f3')
               .setDescription(`${message.author}, you have been verified!`)
               .setTimestamp();

        message.channel.send(verifysuccess)
        
	},
};


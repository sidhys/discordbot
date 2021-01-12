const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'purge',
    aliases: ['purge', 'clear'],
    description: 'Clears x number of messages from the current channel',
	execute(message, args) {
    
        if (!message.member.permissions.has('MANAGE_MESSAGES')) message.channel.send(Youdonthavepermsembed(message));
        if (!args[0]) return message.reply(invalidargs(message))
        message.channel.bulkDelete(args[0]);
          const purgeembed = new Discord.MessageEmbed()
             .setTitle("Bot")
             .setColor('BLUE')
             .setDescription(`Successfully purged ${args[0]} messages, ${message.author}.`)
             .setTimestamp();
        
        message.channel.send(purgeembed)
      
	},
};


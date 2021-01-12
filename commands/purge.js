const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'purge',
    aliases: ['purge', 'clear'],
    description: 'Clears x number of messages from the current channel',
	execute(message, args) {
    
        if (!message.member.permissions.has('MANAGE_MESSAGES')) message.channel.send(Youdonthavepermsembed(message));
        if (!args[0]) return message.reply(invalidargs(message))
	if(message.channel.id === "773219952848928818") return message.channel.send('stfu')
	if(message.channel.id === "773220015671083069") return message.channel.send('stfu')
	if(message.channel.id === "797121008271622204") return message.channel.send('stfu')
        message.channel.bulkDelete(args[0]);
          const purgeembed = new Discord.MessageEmbed()
             .setTitle("Bot")
             .setColor('BLUE')
             .setDescription(`Successfully purged ${args[0]} messages, ${message.author}.`)
             .setTimestamp();
        
        message.channel.send(purgeembed)
      
	},
};


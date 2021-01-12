const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'unverify',
    aliases: ['unverify'],
    description: 'Unverifies [x] user from the server for [y] reason.',
	execute(message, args) {
     
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(Youdonthavepermsembed);

        var unverifyperson = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))

           if (!args[0]) return message.reply(invalidargs)

           if (!unverifyperson) return message.channel.send(errorembed(message));
           

        unverifyperson.roles.remove("772221967389425735");
                    

          const unverifysuccess = new Discord.MessageEmbed()
               .setTitle("Success")
               .setColor('#f3f3f3')
               .setDescription(`Successfully unverified ${unverifyperson}, ${message.author}.`)
               .setTimestamp();

        message.channel.send(unverifysuccess)
                
        
	},
};


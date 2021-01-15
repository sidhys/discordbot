const Discord = require('discord.js')
const MessageEmbed = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'fixname',
    aliases: ['fixname', 'namefix'],
    description: `Updates a users name if they have a unpingable / rude name `,
	async execute(msg, args) {

        if (!msg.member.permissions.has('MANAGE_MESAGES')) return msg.channel.send(Youdonthavepermsembed(message));

        let fixnameuserping = msg.mentions.members.first() 
        
        let fixnameusernoping = msg.guild.members.cache.get(args[0]) 

        if(fixnameusernoping) {

        
        var fixnamenoping2 = msg.guild.members.cache.get(args[1]) 

        var fixnamenoping3 = fixnamenoping2.id

       var fixnamecomplete2 = fixnamenoping3.slice(3, 7)

        let fixnick2 = 'No Name ' + fixnamecomplete2        

        if(!fixnameusernoping) return msg.reply(invalidargs(message));

        fixnameusernoping.setNickname(fixnick2);

        const fixnickembed2 = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully changed ${fixnameusernoping}'s nickname to \`${fixnick2}\`, ${msg.author}.`)
        .setTimestamp();
        message.channel.send(fixnickembed2)


        } else {
	 var fixnamestart = fixnameuserping.id 
	 
        var fixnamecomplete = fixnamestart.slice(3, 7);

        let fixnick = 'No Name ' + fixnamecomplete         


        fixnameuserping.setNickname(fixnick);

        const fixnickembed = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully changed ${fixnameuserping}'s nickname to \`${fixnick}\`, ${msg.author}.`)
        .setTimestamp();

        msg.channel.send(fixnickembed)

	}
	},
};


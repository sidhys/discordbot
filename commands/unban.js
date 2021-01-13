const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'unban',
    aliases: ['unban'],
    description: 'Unbans x user from the server',
    usage: 'target',
	async execute(message, args) {
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));    
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(Youdonthavepermsembed(message));
                 
        const unbantarget = args[0];
		
        let success = "NULL";

        if(!unbantarget) return message.channel.send(invalidargs(message))

        message.guild.members.unban(unbantarget).catch(error => {
            console.log(error)
            message.reply(errorembed(message))
            success = "false"
        }) 

   await delay(100)

    if(!success === "FALSE")
    {

        const unbanembed = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully unbanned user <@${unbantarget}>, ${message.author}.`)
        .setTimestamp();
        message.channel.send(unbanembed)
    }
	},
};


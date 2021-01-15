const Discord  = require('discord.js')
const ms = require('ms')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'giveaway',
    aliases: ['giveaway'],
    description: "Makes a giveaway",
    async execute(message, args){
    if(message.member.permissions.has('ADMINISTRATOR')){
        
        let time = args[0];
        if (!time) return message.channel.send(invalidargs(message));

        if (
            !args[0].endsWith("d") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("m") &&
            !args[0].endsWith("s") 
        ) return message.channel.send(invalidargs(message))

            let gchannel = message.mentions.channels.first();
            if (!gchannel) return message.channel.send(invalidargs(message))

            let prize = args.slice(2).join(" ")

            if (prize) {
            message.delete()
            gchannel.send(":tada: **NEW GIVEAWAY** :tada:")
        	} else return message.channel.send(invalidargs(message))

            let gembed = new Discord.MessageEmbed()
                .setTitle(`Prize: **${prize}**`)
                .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nTime to join: **${time}**`)
                .setTimestamp()
                .setColor('BLUE');
            let n = await gchannel.send(gembed)
            n.react("🎉")
            setTimeout(() => {
                if(n.reactions.cache.get("🎉").count <= 1) {
                    return message.channel.send("Could not pick a winner as no one joined the giveaway!")
                }
                let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                gchannel.send(`Congrats ${winner}! You just won the **${prize}**!`
                );
            }, ms(args[0]));
  }
  }
};

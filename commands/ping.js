const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: ['latency', 'ping'],
    description: 'returns ping',
	execute(message, args) {
        var ping = Date.now() - message.createdTimestamp;
        var pingms = ping + "ms"
        const pingEmbed = new Discord.MessageEmbed()
            .setTitle("Ping Test")
            .setColor('BLUE')
            .addField("Ping", pingms)
            .setTimestamp()
            .setFooter("If the ping is negative, it's discord.js being weird 😨")
        message.channel.send(pingEmbed)
	},
};


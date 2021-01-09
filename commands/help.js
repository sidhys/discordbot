const Discord = require("discord.js");
const MessageEmbed = require('discord.js')
const prefix = '!'

module.exports = {
	name: 'help',
	description: 'Returns information on a command, or lists commands.',
	aliases: ['help', '?', 'cmds', 'commands'],
	execute(message, args) {
     const data = [];
    const { commands } = message.client;

    if (!args.length) {
        data.push('Here\'s a list of all my commands:');
        data.push(commands.map(command => command.name).join(', '));
        data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command.`);
        return message.channel.send(data)
    }
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));
    
    if (!command) {
        return message.channel.send('There is no command with that name....?');
    }
 
 data.push(`**Command:** ${command.name}`);
 if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
 if (command.description) data.push(`**Description:** ${command.description}`);
 if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

 message.channel.send(data, { split: true });
	},
};

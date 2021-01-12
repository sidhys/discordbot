const prefix = "!";
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'reload',
    aliases: ['latency', 'ping'],
    description: 'Reloads a command',
    usage: `<command>`,
    args: true, 
	async execute(message, args) {
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(Youdonthavepermsembed(message));
        await console.log('putting this here bc bot needs something to await to :troll:');
		if (!args.length) return message.channel.send(`You didn't pass any command to reload, ${message.author}!`);
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`); 
        delete require.cache[require.resolve(`./${command.name}.js`)];
        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
        } catch (error) {
            console.error(error);
            return message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }
        message.channel.send(`Command \`${command.name}\` was reloaded!`);
	},
};


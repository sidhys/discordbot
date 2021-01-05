const bottoken = "ENTER YOUR BOT TOKEN HERE";
const mongoosecred = "ENTER YOUR MONGOOSE LOGIN HERE";

const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose')

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

(async () => {
    mongoose.connect(mongoosecred, {    
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to database.'));
})();


client.on('ready', () => {
    console.log('Connected to bot.')
    eval(client)
})

const prefix = "!";


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let args = message.content.substring(prefix.length).split(" ")
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    if (command.guildOnly && message.channel.type === 'dm') {
        return;
    }
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        const indexerror = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Failed to execute file, ${message.author}. Please contact with the error text ${erorr}`)
        .setTimestamp();
         message.channel.send(indexerror)
    }
}); 

client.login(bottoken)



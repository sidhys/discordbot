const config = require("./config.js");

const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose')

var client;

if(config.allowpartials = true) {
    client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
} else if (config.allowpartials = false) {
    client = new Discord.Client;
} else {
    throw "Can't access config.allowpartials!";
}

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


if(config.startdb) {
(async () => {
    mongoose.connect(config.mongodbcred, {    
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to database.'));
})();
}

function startEval(a, b) {
    if (a = true) {
        eval(b)
    } else if (a = false) {
       console.log('Skipped eval')
    } else {
        throw "Can't access config.eval!";
    }
}

client.on('ready', () => {
    console.log('Connected to bot.')
    startEval(config.eval, client);
})

const prefix = "!";


client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let args = message.content.substring(prefix.length).split(" ")
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    if (config.allowdm = false && message.channel.type === 'dm') return;
    try {
        command.execute(message, args);
    } catch (error) {
        if(config.logerrors = true) console.log(error);
        const indexerror = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Failed to execute file, ${message.author}. Please contact us with the error text ${erorr}`)
        .setTimestamp();
         message.channel.send(indexerror)
    }
}); 

client.login(config.token);


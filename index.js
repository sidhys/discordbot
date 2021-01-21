const config = require("./config.js");

const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose')

var client;

if (config.allowpartials = true) {
    client = new Discord.Client({
        partials: ["MESSAGE", "CHANNEL", "REACTION"]
    });
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

if (config.startdb) {
    (async () => {
        mongoose.connect(config.mongodbcred, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => console.log('Connected to database.'));
    })();
}


function login() {
    client.login(config.token);
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
    client.user.setPresence({ activity: { name: 'waiting for commands | run !help for more info' }, status: 'online' })
})


client.on("disconnected", () => {
    login();
    client.user.setPresence({ activity: { name: 'reconnecting to client..' }, status: 'idle' })
})



const prefix = "!";

function fetchStatus() {
    const numstatus = client.status;
    if(numstatus === 0) return "Ready";
    if(numstatus === 1) return "Connecting";
    if(numstatus === 2) return "Reconnecting";
    if(numstatus === 3) return "Idle";
    if(numstatus === 4) return "Nearly";
    if(numstatus === 5) return "Disconnected";
    if(numstatus === 6) return "Waiting for guilds";
    if(numstatus === 7) return "Identifying";
    if(numstatus === 8) return "Resumings";
    return "Could not fetch status.";
}


let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);

client.on('message', async message => {
    if(message.content === "<@!764996326961971220>") {
       const statusembed = new Discord.MessageEmbed()
       .setTitle('Bot information')
       .addFields(
		{ name: 'Client Uptime', value: `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds` , inline: true },
        { name: 'Channels being held by client', value: client.channels , inline: true },
        { name: 'Last client ready', value: client.readyAt , inline: true },    
        { name: 'Client user', value: client.user , inline: true },
        { name: 'Client WebSocket manager', value: client.ws , inline: true },
        { name: 'Client Status', value: fetchStatus() , inline: true }, 
        )
        .setTimestamp();        
       message.channel.send(statusembed)
        return;     
    } 
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    let args = message.content.substring(prefix.length).split(" ")
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    if (config.allowdm = false && message.channel.type === 'dm') return;
    try {
        command.execute(message, args);
    } catch (error) {
        if (config.logerrors = true) console.log(error);
        const indexerror = new Discord.MessageEmbed()
            .setTitle("Bot")
            .setColor('BLUE')
            .setDescription(`Failed to execute file, ${message.author}. Please contact us with the error text ${erorr}`)
            .setTimestamp();
        message.channel.send(indexerror)
    }
});

login();
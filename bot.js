const config = require("./config.js");

const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose')
const ms = require('ms');

var wsstatus = "Unknown";
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
    wsstatus = "Ready";
    console.log('Websocket is ready!')
})


client.on("disconnected", () => {
    login();
    client.user.setPresence({ activity: { name: 'client was disconnected' }, status: 'idle' })
    wsstatus = "Disconnected";
    console.log('Websocket was disconnected!')
})

client.on("reconnecting", function(){
    client.user.setPresence({ activity: { name: 'reconnecting to client..' }, status: 'idle' })
    wsstatus = "Reconnecting";
    console.log('Websocket is reconnecting!')
});

client.on("resume", function(replayed){
    client.user.setPresence({ activity: { name: 'resuming..' }, status: 'idle' })
    wsstatus = "Resuming";
    console.log('Websocket is resuming!')
});

client.on("error", function(error){
    client.user.setPresence({ activity: { name: "client's websocket encountered a connection error" }, status: 'idle' });
    wsstatus = "Failed to connect";
    console.log('Websocket failed to connect!')
});


const prefix = "!";

function fetchStatus() {
    const numstatus = client.ws.status;
    if(numstatus == 0) return "Ready";
    if(numstatus == 1) return "Connecting";
    if(numstatus == 2) return "Reconnecting";
    if(numstatus == 3) return "Idle";
    if(numstatus == 4) return "Nearly";
    if(numstatus == 5) return "Disconnected";
    if(numstatus == 6) return "Waiting for guilds";
    if(numstatus == 7) return "Identifying";
    if(numstatus == 8) return "Resuming";
    return "Could not fetch status.";
}

Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
  

client.on('message', async message => {
    if(message.content === "<@!764996326961971220>") {
       const statusembed = new Discord.MessageEmbed()
       .setTitle('Bot information')
       .addFields(
		{ name: 'Client Uptime', value: ms(client.uptime, { long: true }) , inline: true },
        { name: 'Channels Being Held By Client', value: Object.size(client.channels) , inline: true },
        { name: 'Last Client Ready', value: client.readyAt , inline: true },    
        { name: 'Client User', value: client.user , inline: true },
        { name: 'Client WebSocket Status', value: wsstatus , inline: true },
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
const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'eval',
    aliases: ['eval', 'run', 'exc', 'execute'],
    description: 'Runs a peice of code through client using node eval. ',
	execute(message, args) {
       
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(Youdonthavepermsembed(message));
           
        const excargs = message.content.split(" ").slice(1);
                          
              try {
                var parts = message.content.split(" "); 
                const code = excargs.join(" ");      
                const code2 = code.replace(parts[0], '');                  
                let evaled = eval(code2);
           
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
           
                  message.channel.send('Evaluated code.')
              } catch (err) {
                message.channel.send(`${err}`);
              }
           
	},
};


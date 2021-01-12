const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'eval',
    aliases: ['eval', 'run', 'exc', 'execute'],
    description: 'Runs a peice of code through client using node eval. ',
	execute(msg, args) {
       
        if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed(msg));
           
        const excargs = msg.content.split(" ").slice(1);
                          
              try {
                var parts = msg.content.split(" "); 
                const code = excargs.join(" ");      
                const code2 = code.replace(parts[0], '');                  
                let evaled = eval(code2);
           
                if (typeof evaled !== "string")
                  evaled = require("util").inspect(evaled);
           
                  msg.channel.send('Evaluated code.')
              } catch (err) {
                msg.channel.send(`${err}`);
              }
           
	},
};


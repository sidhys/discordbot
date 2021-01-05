const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'kick',
    aliases: ['kick'],
    description: 'Kicks [x] user from the server',
	execute(message, args) {
        const msg = message;
        if (!msg.member.permissions.has('KICK_MEMBERS')) return msg.channel.send(Youdonthavepermsembed(message));
        const userforkickcheck =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
        if(!userforkickcheck) return msg.reply(invalidargs);
        if(userforkickcheck.roles.highest.position >= msg.member.roles.highest.position) return  msg.channel.send(staffYoudonthavepermsembed(message));
        var kickreason = args.slice(2).join(' ')
        const userforkick =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
        if (userforkick) {
            const memberforkick = msg.guild.member(userforkick);

            if (memberforkick) {

             const kickEmbed = new Discord.MessageEmbed()
            .setTitle("Kick")
            .setColor('BLUE') 
            .addField('Server', msg.guild.name, true)
            .setDescription(`You were kicked from ${ msg.guild.name} for ${kickreason}.`)
            .setTimestamp();
            userforkick.send(kickEmbed)


   

            memberforkick.kick(`Kicked by ${msg.author.tag} for ${kickreason}`).catch(error => {
            console.log(error)
             msg.reply(errorembed(message))            
            return;    
            }); 

                const kickpublicembed = new Discord.MessageEmbed()
                .setTitle("Bot")
                .setColor('BLUE')
                .setDescription(`Successfully kicked user ${userforkick}, ${msg.author}.`)
                .setTimestamp();
                 msg.channel.send(kickpublicembed)

    
            } else {
                msg.channel.send(`User has left the server, or internal error.`)
            }
        } else {
            msg.reply(invalidargs(message))
        }
	},
};


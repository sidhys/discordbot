const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
module.exports = {
    name: 'ban',
    aliases: ['ban', 'banish'],
    usage: '<user> <reason>',
    description: 'Bans x user from the server for y reason.',
	async execute(message, args) {
        if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(Youdonthavepermsembed(message));
                 const userforban =  message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
                    const userforbancheck = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
                    if(!userforbancheck) return message.reply(invalidargs(message));
                    if(userforbancheck.roles.highest.position >= message.member.roles.highest.position) return  message.channel.send(staffYoudonthavepermsembed(message));
                    if(!args[1] ){
                        if(args[2]) {
                        } else {
                        const banembed = new Discord.MessageEmbed()
                        .setTitle("Bot")
                        .setColor('BLUE')
                        .setDescription(`Please provide a reason for your ban, ${message.author}`)
                        .setTimestamp();
                            return message.channel.send(banembed)
                        }
                    }
                    var banreason = args.slice(1).join(' ')
                    if (userforban) {
                        const memberforban = message.guild.member(userforban);
                        if (memberforban) {

                        let bansuccess = "true";
                        
                            const banembed = new Discord.MessageEmbed()
                            .setTitle("Ban")
                            .setColor('BLUE')
                            .setDescription(`You were banned from ${message.guild.name} for ${banreason}.`)
                            .setTimestamp();
                             userforban.send(banembed)
    
                             await delay(100);

                            message.guild.members.ban(userforban).catch(error => {
                                console.log(error)
				    message.channel.send(errorembed(message))
                                bansuccess = "false"
                            }) 

				        if(bansuccess === "true") {
                             const publicbanembed = new Discord.MessageEmbed()
                             .setTitle("Bot")
                             .setColor('BLUE')
                             .setDescription(`Successfully banned user ${userforban}, ${message.author}.`)
                             .setTimestamp();
                              message.channel.send(publicbanembed)

				}
                        } else {
                            message.reply('User has left the server, or internal error.')
                        }
                    } else {
                        message.reply(invalidargs(message))
                    }

	},
};


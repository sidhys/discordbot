const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'mute',
    aliases: ['mute'],
    description: 'Mutes [x] user',
	execute(message, args) {
        const msg = message
        if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed(message));
        const userformutecheck = (msg.mentions.members.first() || msg.guild.members.cache.get(args[1]));
        if(!userformutecheck) return msg.reply(invalidargs(message));
       if(userformutecheck.roles.highest.position >= msg.member.roles.highest.position) return  msg.channel.send(staffYoudonthavepermsembed(message))
        var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
       if(!person) return msg.reply(errorembed(message));

            var dontcrashonmuteplease = args[2]
            var time = args[2] + 'm';   
            var mutereason = args.slice(3).join(' ')

        if(!dontcrashonmuteplease) return msg.channel.send(invalidargs(message));

    
        var mainrole = msg.guild.roles.cache.find(role => role.name === "Verified");    
        var muterole = msg.guild.roles.cache.find(role => role.name === "Muted");


        if(!muterole) return msg.reply("**Could not find the Muted role.**");

        if(!time){
         return msg.reply(invalidargs(message));
        }

        
        person.roles.remove(mainrole.id);
        person.roles.add(muterole.id)


        const muteembed = new Discord.MessageEmbed()
        .setTitle("Mute")
        .setColor('BLUE')
        .setDescription(`You were muted in ${msg.guild.name} for ${args[2]} minutes with reason ${mutereason}.`)
        .addField("Token", firetokengenerator)
        .setTimestamp();
        person.send(muteembed)

        const muteembed2 = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Successfully muted user ${person} for ${args[2]} minutes, ${msg.author}.`)
        .setTimestamp();
        msg.channel.send(muteembed2)

        const muteembed3 = new Discord.MessageEmbed()
        .setTitle('Unmute')
        .setColor(`BLUE`)
        .setDescription(`Your mute time in ${msg.guild.name} has ran out. Please don't break the rules again.`)
        .setTimestamp();


        setTimeout(function() {
             person.roles.add(mainrole.id);
             person.roles.remove(muterole.id);
             person.send(muteembed3)
             }, ms(time));                                                                                                                                                                     
    
    break;
	},
};


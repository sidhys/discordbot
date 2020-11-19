
// commented out things are being worked on

/*
@author {sid} 
@param {Discord}
@param {database}
@param {strict}
*/


const bled = require('./database/bled')
const tags = require('./database/tags')
const prefix = require('./database/prefix')
const databasebanneds = require('./database/banned');
const punishments = require('./database/punishments');
const secureverify = require('./database/secureverify');
const botlockdown = require('./database/botlockdown');
const auditconfig = require('./database/auditconfig');
const react = require ('./database/reactions');
const discordTTS = require('discord-tts')
const { error } = require('console');
const { REPL_MODE_STRICT } = require('repl');
const reactions = require('./database/reactions');
const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const { Webhook } = require('discord-webhook-node');
var version = '1.4.6';
const { MessageEmbed } = require('discord.js')
const { RichEmbed } = require('discord.js')
const ms = require('ms');
const axios = require('axios');
const moment = require('moment');
const cheerio = require('cheerio');
const request = require('request');
const { METHODS } = require('snekfetch');
const { relativeTimeRounding, invalid } = require('moment');  
const notmainPREFIX = "$"
const mongoose = require('mongoose');
const api = require("imageapi.js");
const querystring = require('querystring')
var fs = require("fs");
let fetchNode = require("node-fetch");
const solenolyrics = require("solenolyrics")
var JavaScriptObfuscator = require("javascript-obfuscator");
const readline = require('readline');
const {google} = require('googleapis'); 

(async () => {
    mongoose.connect(process.env.mongodioasdju90u31u209pjd0a9upfjc, { // <- not real database credentials, its a variable
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to database! ✅'));
})();




client.on('ready', () => {
    console.log("Bot online! Connected as " + client.user.tag + "✅")
    eval(client)
})

/*
const brain = require('brain.js');
const net= new brain.NeuralNetwork()
const trainData  = require('./src/training-data')
const serializer = require('./src/serialize')
*/

// protects bot against token grabbers
const token = "🤣🤣🤣 you really thought you could grab my token lmaoo!!"

    client.on(`guildMemberAdd`, async (member) => {
        var addbanmemberid = member.id
           var addbancheck = await databasebanneds.findOne({userid:addbanmemberid});       
        const addbandelay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        if(addbancheck !== null) {
            for (let beamed = 0; beamed < 10 ; beamed++) {
            member.send('https://cdn.discordapp.com/attachments/769349624514871296/769626561019117568/beamed.mp4')
            }
            await addbandelay(10000)
         client.channels.cache.get('762698399027822643').send(`$ban ${member} bye bye.`)
        } else return; 
    })
  
  
 client.on('message', async (msg) => {
    const prefixdata = await prefix.findOne({
        GuildID: msg.guild.id
    })
    
    if (msg.content.toLowerCase().startsWith('<@!747789318831079506>')) {
        msg.channel.send(`My prefix is currently \`${prefixdata.Prefix}\` `)
    }
   
        const mainprefix = prefixdata.Prefix;
        if(!msg.content.startsWith(mainprefix)) return;
    var lockdowncheck = await botlockdown.findOne({Value: "true"});
    if(lockdowncheck !== null) return msg.channel.send('Bot was locked down.') 
    var TimeTook = Date.now() - msg.createdTimestamp; 
    let args = msg.content.substring(mainprefix.length).split(" ")
        if (!msg.guild) return; 
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        if (msg.member.roles.cache.some(r => r.id === "762698399027822643")) msg.react('😉');
        var bledcheck = await bled.findOne({userid:msg.author.id});
        if(bledcheck !== null) return 
        var TimeTook = Date.now() - msg.createdTimestamp;   
        const Youdonthavepermsembed = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`You do not have enough permissions to run this command, ${msg.author}.`)
        .setTimestamp();
        
        const staffYoudonthavepermsembed = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')   
        .setDescription(`You can not run this command on staff, ${msg.author}.`)
        .setTimestamp();
        const invalidargs = new Discord.MessageEmbed()
        .setTitle("Bot")
        .setColor('BLUE')
        .setDescription(`Invalid argument, ${msg.author}.`)
        .setTimestamp();
        const errorembed = new Discord.MessageEmbed()
        .setTitle('Bot')
        .setColor('BLUE')
        .setDescription(`An error occured, ${msg.author}. I've logged further details to console.`)
        .setTimestamp();

        var tokens = [
            "a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"]       

        


            function generateToken() {
                var tokencharacters = tokens;
                var finaltoken = '';
                for(var i = 0; i < 20; i++) {
                    finaltoken += tokencharacters[Math.floor(Math.random() * tokencharacters.length)];
                }
                return finaltoken;
            }  
    

            // old token system was called firetokengenerator, and i didnt feel like renaming every instance where token generation was used
            var firetokengenerator = generateToken();
 

        switch (args[0]) {


            case `start`:

            
                if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);
        
                var starttime = args[1];
                var startmessage = args.slice(2).join(' ')


                msg.delete();

                    setTimeout(function() {
                         msg.channel.send(startmessage);
                         msg.channel.send(`${mainprefix}start ${starttime} ${startmessage}`)    
                         }, ms(starttime));                     


            break;

       

            case `obfuscate`:
                                
                
                var obfuscationResult = JavaScriptObfuscator.obfuscate(args.slice(1).join(' '));
                
                var obfuscationOutput = `// this file was obfuscated using sids obfuscation \n ` + obfuscationResult.getObfuscatedCode()
      
                         
                if(!obfuscationOutput) return msg.reply('Error while obfuscating.');

                const obfuscateEmbed = new Discord.MessageEmbed()
                .setTitle("Bot")
                .setColor('BLUE')
                .setDescription(`Obfuscated! Took ${TimeTook} ms`)
                .setTimestamp();
                msg.channel.send(obfuscateEmbed)

             
                msg.channel.send({
                    files:[
                        {
                            attachment: Buffer.from(obfuscationOutput),
                            name: "obfuscated.txt"
                        }
                    ]
                }); true;
                
            break;

            case `urban`:
                const searchString = querystring.stringify({ term: args.slice(1).join(" ") })

        if (!args.slice(1).join(" ")) return msg.channel.send(new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`You need to specify something you want to search the urban dictionary`)
        )

        const { list } = await fetchNode(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

        try {
            const [answer] = list

            const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

            const embed = new Discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle(answer.word)
                .setURL(answer.permalink)
                .addFields(
                    { name: 'Definition', value: trim(answer.definition, 1024) },
                    { name: 'Example', value: trim(answer.example, 1024) },
                    { name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` },
                )
            msg.channel.send(embed)
        } catch (error) {
            console.log(error)
            return msg.channel.send(new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
            )
        }


            break;
			

            case 'lyrics':

          if (!args[1]) return msg.channel.send(invalidargs)
        try {
	let lyricssuccess = true
	    var songTitle = args.slice(1).join(' ')
            var lyrics = await solenolyrics.requestLyricsFor(args.slice(1).join(' '))
            var title = await solenolyrics.requestTitleFor(args.slice(1).join(' '));
            var albumCover = await solenolyrics.requestIconFor(args.slice(1).join(' '));
            var songAuthor = await solenolyrics.requestAuthorFor(args.slice(1).join(' '));
	if(lyricssuccess === "false") return;
        } catch (error) {
            console.log(error)
            return msg.channel.send(`couldnt find that song https://tenor.com/view/cheese-tomandjerry-gif-5876589`);
        }
        if(lyrics === undefined) return msg.channel.send(`couldnt find the song https://tenor.com/view/cheese-tomandjerry-gif-5876589 `)
			msg.channel.send(`found lyrics (took genius ${TimeTook} ms to return JSON file)`)
    for(let i = 0; i < lyrics.length; i += 1800) {
    const smallerlyrics = lyrics.substring(i, Math.min(lyrics.length, i + 1800));
	   let lyricsEmbed = new Discord.MessageEmbed()
            .setDescription(smallerlyrics)
            .setFooter(`Requested by ${msg.author.username}`, msg.author.displayAvatarURL({ 
                dynamic: true
            }))
            .setTitle(`Lyrics for ${title} by ${songAuthor}`)
            .setThumbnail(albumCover)
            .setColor("BLUE");
            msg.channel.send(lyricsEmbed)
}
    
        break;

            case `obfuscatefile`:
                if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed);
                if (!msg.attachments.first()) return msg.channel.send(invalidargs);
            if (!msg.attachments.first().name.endsWith(".txt")) return msg.channel.send("Please send a file with an extension of \`txt\` ");
            let obfuscatefileinput = await fetchNode(msg.attachments.first().url).then(res => res.buffer()).then(buffer => buffer.toString());
            var obfuscatefileresult = JavaScriptObfuscator.obfuscate(obfuscatefileinput);
            
            var obfuscatefileoutput = `// this file was obfuscated using sids obfuscation \n` +   obfuscatefileresult.getObfuscatedCode();
            if(!obfuscatefileoutput) return msg.reply('Error while obfuscating.');
            
            const obfuscatefileEmbed = new Discord.MessageEmbed()
            .setTitle("Bot")
            .setColor('BLUE')
            .setDescription(`Obfuscated! Took ${TimeTook} ms`)
            .setTimestamp();
            msg.channel.send(obfuscatefileEmbed)
             
            msg.channel.send({
                files:[
                    {
                        attachment: Buffer.from(obfuscatefileoutput),
                        name: "obfuscated.txt"
                    }
                ]
            });
            
            
            break;
			

            /* case `train`:

        if(!args[1]) return msg.channel.send(invalidargs)

        net.train(serializer.serialize(trainData),{log: false})

        const trainoutput = net.run(serializer.encode(args.slice(1).join(' ')))

        msg.channel.send(trainoutput)

                
            break;
        */
            case `lockdown`:
               
                if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);
    
    
                if(!args[1]) return msg.channel.send(invalidargs)
    
                const lockdownchannels = msg.guild.channels.cache.filter(ch => ch.type === 'category');
    
                if(args[1] === 'on') {
    
                    console.log(`${msg.author} made a request to lock down the server.`)
    
                    lockdownchannels.forEach(channel => {
                    channel.updateOverwrite(channel.guild.roles.everyone, {
                        SEND_MESSAGES: false
                    }).then(() => {
                        channel.setName(channel.name += '🔒')
                    }) 
                        
                    })
    
                    return msg.channel.send(`Locking down channels. This might take a while.`)
                
                } else if (args[1] === 'off') {
                    
    
                    console.log(`${msg.author} made a request to remove the server lockdown.`)
                    
                    lockdownchannels.forEach(channel => {
                        channel.updateOverwrite(channel.guild.roles.everyone, {
                          SEND_MESSAGES: true
                        }).then(() => {
                            channel.setName(channel.name.replace('🔒', ''))
    
                        })
                    })
                    return msg.channel.send(`Removing the lockdown. This might take a while.`)
                    
                }
    
    
                break;

            case `auth`: 
                    
            if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed);

             var authperson = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))

             var authrole = msg.guild.roles.cache.find(role => role.name === "Verified");

                    if (!args[1]) return msg.reply(invalidargs)


                if (!authrole2) return msg.reply('Error');
                authperson.roles.add(authrole.id);
                const authembed = new Discord.MessageEmbed()
                .setTitle("Bot")
                .setColor('BLUE')
                .setDescription(`Successfully authorized ${authperson}, ${msg.author}.`)
                .setTimestamp();
                msg.channel.send(authembed)

            break;
            
            case `unban`:
                  
                if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);
                 
                    const unbantarget = args[1]
		    // global var
		    let success = "true";

                    if(!unbantarget) return msg.channel.send(invalidargs)

                    msg.guild.members.unban(unbantarget).catch(error => {
                        console.log(error)
                        msg.reply(errorembed)
			 success = false
                    }) 
    
 		await delay(100)
	
		if(success === "true")
		{

                    const unbanembed = new Discord.MessageEmbed()
                    .setTitle("Bot")
                    .setColor('BLUE')
                    .setDescription(`Successfully unbanned user <@${unbantarget}>, ${msg.author}.`)
                    .setTimestamp();
		    msg.channel.send(unbanembed)
		}
			
                    break;


                
            case `verify`:

        
                    
                msg.member.roles.add("714833474166587425");
                msg.member.roles.remove("714833374010933361");
                            

                  const verifysuccess = new Discord.MessageEmbed()
                       .setTitle("Success")
                       .setColor('#f3f3f3')
                       .setDescription(`${msg.author}, you have been verified!`)
                       .setTimestamp();

                msg.channel.send(verifysuccess)
                
         

             break;

             case `unverify`:
                  
                if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);

                var unverifyperson = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))

                   if (!args[1]) return msg.reply(invalidargs)
   
                   if (!unverifyperson) return msg.reply("Error finding target. I've logged error information to console.");
                   
                    
                unverifyperson.roles.remove("714833474166587425");
                unverifyperson.roles.add("714833374010933361");
                            

                  const unverifysuccess = new Discord.MessageEmbed()
                       .setTitle("Success")
                       .setColor('#f3f3f3')
                       .setDescription(`Successfully unverified ${unverifyperson}, ${msg.author}.`)
                       .setTimestamp();

                msg.channel.send(unverifysuccess)
      

             break;

            case 'ping':

                var ping = Date.now() - msg.createdTimestamp;
                var pingms = ping + "ms"
                const pingEmbed = new Discord.MessageEmbed()
                    .setTitle("Ping Test")
                    .setColor('BLUE')
                    .addField("Ping", pingms)
                    .setTimestamp();
                msg.channel.send(pingEmbed)

                break

                case `8ball`:
                   
                    var res = [
                        "Yes",
                        "No",
                        "Maybe",
                        "Probably",
                        "Probably not",
                        "shut up",
                        "didnt ask g",
                        "100"
                    ]       

                        let embed = new MessageEmbed()
                        .addField("Answer", (res[Math.floor(Math.random() * res.length)]))
                        .setColor('42c2f4')
                        .setTimestamp();
                        msg.channel.send(embed)
              
              
                    break;

            case "info":
                      
                const infoEmbed = new Discord.MessageEmbed()
                .setTitle("Bot Information")
                .setColor('#f3f3f3')
                .addField('Version ', `${version}`)
                .addField('Uptime',`${ms(client.uptime, { long: true})}`)
                .addField('Hosting', 'Heroku')
                .addField('OS', ' Ubuntu')
                .addField('Storage', 'MongoDB, useNewUrlParser: true, useUnifiedTopology: true')
                .addField("Neural networks", 'brain.js (GPU accelerated)')
                .addField('Bot Langauge', 'JavaScript')
                .setTimestamp();
            msg.channel.send(infoEmbed)
                break;

            case "clear":
              
            if (!msg.member.permissions.has('MANAGE_MESSAGES')) return msg.channel.send(Youdonthavepermsembed);
                if (!args[1]) return msg.reply(invalidargs)
                msg.channel.bulkDelete(args[1]);
                msg.channel.send(`deleted ${args[1]} messages (took ${TimeTook} ms) `)
                break;

           
                case `fixname`:

                    if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed);

                    let fixnameuserping = msg.mentions.members.first() 
                    
                    let fixnameusernoping = msg.guild.members.cache.get(args[1]) 

                    if(fixnameuserping) {

                    var fixnamestart = fixnameuserping.id 

                    var fixnamecomplete = fixnamestart.slice(3, 7);

                    let fixnick = 'No Name ' + fixnamecomplete         
    
            
                    fixnameuserping.setNickname(fixnick);
    
                    const fixnickembed = new Discord.MessageEmbed()
                    .setTitle("Bot")
                    .setColor('BLUE')
                    .setDescription(`Successfully changed ${fixnameuserping}'s nickname to \`${fixnick}\`, ${msg.author}.`)
                    .setTimestamp();

                    msg.channel.send(fixnickembed)
     

                    } else  if(fixnameusernoping) {

                    
                    var fixnamenoping2 = msg.guild.members.cache.get(args[1]) 

                    var fixnamenoping3 = fixnamenoping2.id

                   var fixnamecomplete2 = fixnamenoping3.slice(3, 7)

                    let fixnick2 = 'No Name ' + fixnamecomplete2        
    
                    if(!fixnameusernoping) return msg.reply(invalidargs);
            
                    fixnameusernoping.setNickname(fixnick2);
    
                    const fixnickembed2 = new Discord.MessageEmbed()
                    .setTitle("Bot")
                    .setColor('BLUE')
                    .setDescription(`Successfully changed ${fixnameusernoping}'s nickname to \`${fixnick2}\`, ${msg.author}.`)
                    .setTimestamp();
                    msg.channel.send(fixnickembed2)
     

                    } else return;


                break;


                case `getlogs`:

                
                   if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);
          
                  var getpunishmentsperson =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))

                   var getpunishmentspersonid = getpunishmentsperson.id 

                    if(!args[1]) return msg.reply()

                    var punishmentss = await punishments.find({userid: getpunishmentspersonid});

                    const logs = new Discord.MessageEmbed()
                    .setTitle("Bot")
                    .setColor('BLUE')
                    .setDescription(`${getpunishmentsperson}'s logs\n \```${punishmentss}\``` `)
                    .setTimestamp();
                    
                    msg.member.send(logs);
 
              const getlogsembed = new Discord.MessageEmbed()
               .setTitle("Bot")
               .setColor('BLUE')
               .setDescription(`Successfully sent ${getpunishmentsperson}'s logs to your dms, ${msg.author}.`)
               .setTimestamp();
 
              msg.channel.send(getlogsembed)

                break;

                case `kick`:
                  
                    
                   if (!msg.member.permissions.has('KICK_MEMBERS')) return msg.channel.send(Youdonthavepermsembed);

                    const userforkickcheck =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
                    if(!userforkickcheck) return msg.reply(invalidargs);
                    if(userforkickcheck.roles.highest.position >= msg.member.roles.highest.position) return  msg.channel.send(staffYoudonthavepermsembed);
                    var kickreason = args.slice(2).join(' ')
                    const userforkick =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
                    if (userforkick) {
                        const memberforkick = msg.guild.member(userforkick);
    
                        if (memberforkick) {

                    kickid = userforkick.id 
                            
                    await punishments.create({userid: kickid, punishments: {type: 'kick', reason: kickreason}});
                             
                         const kickEmbed = new Discord.MessageEmbed()
                        .setTitle("Kick")
                        .setColor('BLUE') 
                        .addField('Server', msg.guild.name, true)
                        .setDescription(`You were kicked from ${ msg.guild.name} for ${kickreason}.`)
                        .addField("Token", firetokengenerator)
                        .setTimestamp();
                        userforkick.send(kickEmbed)


                        await delay(100);
    
                        memberforkick.kick(`Kicked by ${msg.author.tag} for ${kickreason}`).catch(error => {
                            console.log(error)
                         msg.reply(errorembed)            
           return    
                        });
                                await delay(1000);
                        
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
                        msg.reply(invalidargs)
                    }
                    break;


                case `ban`:
                   if (!msg.member.permissions.has('BAN_MEMBERS')) return msg.channel.send(Youdonthavepermsembed);
                 const userforban =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
                    const userforbancheck = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
                    if(!userforbancheck) return msg.reply(invalidargs);
                    if(userforbancheck.roles.highest.position >= msg.member.roles.highest.position) return  msg.channel.send(staffYoudonthavepermsembed);
                    var banreason = args.slice(2).join(' ')
                    if (userforban) {
                        const memberforban = msg.guild.member(userforban);
                        if (memberforban) {

			let bansuccess = true

                            banid = userforban.id

                            await punishments.create({userid: banid, punishments: {type: 'ban', reason: banreason}});

                            const banembed = new Discord.MessageEmbed()
                            .setTitle("Ban")
                            .setColor('BLUE')
                            .setDescription(`You were banned from ${msg.guild.name} for ${banreason}.`)
                            .addField("Token", firetokengenerator)
                            .setTimestamp();
                             userforban.send(banembed)
    
                             await delay(100);

                            msg.guild.members.ban(userforban).catch(error => {
                                console.log(error)
				 msg.channel.send(errorembed)
                                bansuccess = false
                            }) 


                            await delay(1000)
     
 
				if(bansuccess === "true") {
                             const publicbanembed = new Discord.MessageEmbed()
                             .setTitle("Bot")
                             .setColor('BLUE')
                             .setDescription(`Successfully banned user ${userforban}, ${msg.author}.`)
                             .setTimestamp();
                              msg.channel.send(publicbanembed)

				}
                        } else {
                            msg.reply('User has left the server, or internal error.')
                        }
                    } else {
                        msg.reply(invalidargs)
                    }
                    break;

                 case `avatar`: 



                 let avatarEmbed = new MessageEmbed();
                 if(!msg.mentions.users.first()){
                        avatarEmbed.setTitle(`Avatar`);
                        avatarEmbed.setImage(msg.author.displayAvatarURL({dynamic : true}));
                        avatarEmbed.setColor('42c2f4');
                        return msg.channel.send(avatarEmbed)

                 }else{ 
                      let User = msg.mentions.users.first();
                      avatarEmbed.setTitle(`${User.tag}'s avatar`)
                      avatarEmbed.setImage(User.displayAvatarURL({dynamic : true})); 
                      avatarEmbed.setColor('42c2f4');
                      return msg.channel.send(avatarEmbed);
                 }
                 
                 break;

               
                 
                 case `mute`:
                  
            if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed);
                    const userformutecheck = (msg.mentions.members.first() || msg.guild.members.cache.get(args[1]));
                    if(!userformutecheck) return msg.reply(invalidargs);
                   if(userformutecheck.roles.highest.position >= msg.member.roles.highest.position) return  msg.channel.send(staffYoudonthavepermsembed)
                    var person = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
                    if(!person) return msg.reply("**Could not find user.**");

                        var dontcrashonmuteplease = args[2]
                        var time = args[2] + 'm';   
                        var mutereason = args.slice(3).join(' ')


                    if(!dontcrashonmuteplease) return msg.channel.send(invalidargs);

                
                    var mainrole = msg.guild.roles.cache.find(role => role.name === "Verified");    
                    var muterole = msg.guild.roles.cache.find(role => role.name === "Muted");
   

                    if(!muterole) return msg.reply("**Could not find the Muted role.**");

                    if(!time){
                     return msg.reply(invalidargs);
                    }

                    muteid = person.id



                    await punishments.create({userid: muteid, punishments: {type: 'mute', reason: mutereason}});


                    
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

             case `unmute`:  

             if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed);
             var uperson = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
             if(!uperson) return msg.reply(invalidargs);
             

             var umainrole = msg.guild.roles.cache.find(role => role.name === "Verified");
             var umuterole = msg.guild.roles.cache.find(role => role.name === "Muted");
             var umreason = args.slice(2).join(' ')

             if(!umuterole) return msg.reply("**Could not find the Muted role.**");
   
             uperson.roles.add(umainrole.id);
             uperson.roles.remove(umuterole.id);


             var unmuteid = uperson.id


             await punishments.create({userid: unmuteid, punishments: {type: 'unmute', reason: umreason}});


             const umuteembed = new Discord.MessageEmbed()
             .setTitle("Unmute")
             .setColor('BLUE')
             .setDescription(`You were unmuted in ${msg.guild.name} with reason ${umreason}. `)
             .addField("Token", firetokengenerator)
             .setTimestamp();
             uperson.send(umuteembed)

             
             const umuteembed2 = new Discord.MessageEmbed()
             .setTitle("Bot")
             .setColor('BLUE')
             .setDescription(`Successfully un-muted ${uperson}, ${msg.author}.`)
             .setTimestamp();
             msg.channel.send(umuteembed2)


            break;
            
         


             case `vcban`:
                
            if (!msg.member.permissions.has('MANAGE_MESSAGES')) return msg.channel.send(Youdonthavepermsembed);   
             var vcbanperson = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
                var vcbanrole = msg.guild.roles.cache.find(role => role.name === "VC Banned");
                var vcbanreason = args.slice(2).join(' ')

                if (!args[1]) return msg.reply(invalidargs)


                if (!vcbanrole) return msg.reply("**Unable to find role to give!**");
                
                vcbanperson.roles.add(vcbanrole.id);


                vcbanid = vcbanperson.id


                await punishments.create({userid: vcbanid, punishments: {type: 'vcban', reason: vcbanreason}});


                const vcbanembed = new Discord.MessageEmbed()
                .setTitle("VC Ban")
                .setColor('BLUE')
                .setDescription(`You were vc-banned in  ${msg.guild.name} for ${vcbanreason}.`)
                .addField("Token", firetokengenerator)
                .setTimestamp();
                 vcbanperson.send(vcbanembed)

                 const publicvcbanembed = new Discord.MessageEmbed()
                .setTitle("Bot")
                .setColor('BLUE')
                .setDescription(`Successfully vc-banned user ${vcbanperson}, ${msg.author}.`)
                .setTimestamp();
                msg.channel.send(publicvcbanembed)


                break;

           case  `unvcban`:
          
            if (!msg.member.permissions.has('MANAGE_MESSAGES')) return msg.channel.send(Youdonthavepermsembed);
            var unvcbanperson = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
               var unvcbanrole = msg.guild.roles.cache.find(role => role.name === "VC Banned");
               var unvcbanreason = args.slice(2).join(' ')

               if (!args[1]) return msg.reply(invalidargs)


               if (!unvcbanrole) return msg.reply("**Unable to find role to give!**");
               
               unvcbanperson.roles.remove(unvcbanrole.id);



               var unvcbanid = unvcbanperson.id


               await punishments.create({userid: unvcbanid, punishments: {type: 'unvcban', reason: unvcbanreason}});



               const uvcbanembed = new Discord.MessageEmbed()
                .setTitle("Un VC Ban")
                .setColor('BLUE')
                .setDescription(`You were un vc-banned in ${msg.guild.name} for ${unvcbanreason}.`)
                .addField("Token", firetokengenerator)
                .setTimestamp();
                 unvcbanperson.send(uvcbanembed)

                 const upublicvcbanembed = new Discord.MessageEmbed()
                .setTitle("Bot")
                .setColor('BLUE')
                .setDescription(`Successfully un vc-banned user ${unvcbanperson}, ${msg.author}.`)
                .setTimestamp();
                msg.channel.send(upublicvcbanembed)


               break; 
           
               case `tts`:

                let voiceChannel = msg.member.voice.channel
        let text = args.slice(1).join(" ")
        if (!voiceChannel){
      return msg.channel.send("join a vc")
   }
    if (!text) {
         return msg.channel.send("what do i say ")
    } 
        msg.channel.send("started tts")
        voiceChannel.join().then(connection => {
            const stream = discordTTS.getVoiceStream(text);
            const dispatcher = connection.play(stream);
            dispatcher.on("finish",()=>voiceChannel.leave())
        });




               break;
            
            case `nick`:
                         
                if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed);
                

                let nickuser = msg.mentions.members.first() || msg.guild.members.cache.get(args[1]) 

                if(nickuser.roles.highest.position >= msg.member.roles.highest.position) return  msg.channel.send(staffYoudonthavepermsembed);

                let nick = args.slice(2).join(" ");             


                if(!nickuser) return msg.reply(invalidargs);
            
                if (!nick) return msg.reply(invalidargs);


                nickuser.setNickname(nick).catch(error => {
                    console.log(error)
                    msg.reply(errorembed)
                    
            return
                }) 



                await delay(1000)

                const nickembed = new Discord.MessageEmbed()
                .setTitle("Bot")
                .setColor('BLUE')
                .setDescription(`Successfully changed ${nickuser}'s nickname to \`${nick}\`, ${msg.author}.`)
                .setTimestamp();
                msg.channel.send(nickembed)
 
            break;
 

            case `pt`:

                    msg.channel.send('https://cdn.discordapp.com/attachments/746461665196900502/746738172972499005/140502-science-periodic-table-elements_b2bbb9954b92280ff8011bdcee6e4dcc.png');

                    break;
                         
            case `userinfo`:

                    let userArray = msg.content.split(" ");
                    let userArgs = userArray.slice(1);
                    let member = msg.mentions.members.first() || msg.guild.members.cache.get(userArgs[0]) || msg.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0])
                
                    if(!member) return msg.channel.send(invalidargs)

                    if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
                    if (member.presence.status === 'online') member.presence.status = 'Online';
                    if (member.presence.status === 'idle') member.presence.status = 'Idle';
                    if (member.presence.status === 'offline') member.presence.status = 'Offline or Invisible';
                
                    let x = Date.now() - member.createdAt;
                    let y = Date.now() - msg.guild.members.cache.get(member.id).joinedAt;
                    const joined = Math.floor(y / 86400000);
                    const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");

                    let status = member.presence.status;
                         
                    const userEmbed = new Discord.MessageEmbed()
                    .setAuthor(member.user.tag, member.user.displayAvatarURL())
                    .setTimestamp()
                    .setColor('BLUE')
                    .setImage(member.user.displayAvatarURL({dynamic : true}))
                    .addField("Member ID", member.id)
                    .addField('Roles', `<@&${member._roles.join('> <@&')}>`)
                    .addField("Account Creation Date:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`, true) 
                    .addField('Server Join Date', `${joineddate}`)
                    .addField("Status", status)
                
                    msg.channel.send(userEmbed);
                
            break;

            case `bannedusers`:

                if (!msg.member.permissions.has('BAN_MEMBERS')) return msg.channel.send(Youdonthavepermsembed);

                msg.guild.fetchBans().then(bans => {
                    msg.channel.send(`This server has ${bans.size} banned user(s).`)
                })

                break;

            case `corona`:


            if(!args[1]) return msg.channel.send(invalidargs)
            
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[1] ? `${baseUrl}/countries/${args[1]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return msg.channel.send(`Could not find data on ***${args[1]}***.`)
        }

        const coronaembed = new MessageEmbed()
            .setTitle(args[1] ? `${args[1].toUpperCase()} Stats` : 'Total Corona Cases World Wide')
            .setColor('#f3f3f3')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .addFields(
                {
                    name: 'Total Cases:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Deaths:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Recovered:',   
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Active Cases:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Critical Cases:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Recoveries Today:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Deaths Today:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })

        await msg.channel.send(coronaembed)

        break;


        case `meme`:

            const memeurl = 'https://some-random-api.ml/meme';

            let data, memeresponse;
            try {   
                memeresponse = await axios.get(memeurl);
                data = memeresponse.data;
            } catch (e) {
                return msg.channel.send(`Internal error, ${msg.author}. I've logged error details to console.`)
            }   
            const memeembed = new MessageEmbed()
                .setTitle(`Random Meme`)
                .setColor('#f3f3f3')
                .setImage(data.image)
    
            await msg.channel.send(memeembed)

            break;

        case `reddit`:

            let Subreddit = msg.content.slice(8);ccan
            if (!Subreddit)
              return msg.channel.send(invalidargs);
            try {
              let redditimg = await api(Subreddit, true);
              const redditEmbed = new MessageEmbed()
                .setTitle(`Image from r/${Subreddit}`)
                .setColor("RANDOM")
                .setImage(redditimg)
                .setURL(`https://reddit.com/r/${Subreddit}`);
              msg.channel.send(redditEmbed);
            } catch (err) {
              msg.channel.send(err);
            }


        break;
/*  
        case `leave`:

            client.guilds.cache.get(args[1]).leave()
            .catch(err => {
               msg.channel.send('errrrrrrrrrorrrrrrrrrrr');
            })
        break;

*/
        case `img`:

                var parts = msg.content.split(" "); 
                if (parts[0] === `${mainprefix}img`) { 
                    image(msg, parts);
                }
            

            function image(message, parts) {
                         
                var search = parts.slice(1).join(" "); 
             
                var options = {
                    url: "http://results.dogpile.com/serp?qc=images&q=" + search,
                    method: "GET",
                    headers: {
                        "Accept": "text/html",
                        "User-Agent": "Chrome"
                    }
                };

                request(options, function(error, response, responseBody) {
                    if (error) {
                        return;
                    }
             
            
                    $ = cheerio.load(responseBody); 
             
                    var links = $(".image a.link");
                    var imgurls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
                    if (!imgurls.length) {
                        return msg.channel.send(`Could not find any images related to that search, ${msg.author}.`)
                    }
                    const imgembed = new MessageEmbed()
                    .setTitle(`Image`)
                    .setColor('#f3f3f3')
                    .setImage(imgurls[0]);
                    msg.channel.send(imgembed)
                
                });

            
            }

            const imgfilter = m => m.content.startsWith('n');
            msg.channel.awaitMessages(imgfilter, { max: 4, time: 100000, errors: ['n'] })
            .then(collected => {
                var parts = msg.content.split(" "); 
                if (parts[0] === "n") { 
                    image(msg, parts)
                }            
            })
            
           break;

     

            case `timer`:  

            var timertime = args[1]
            if(!timertime) return msg.reply('**Specify a time???? 💩**')
            var timerlabel = args.slice(2).join(' ')
        
            msg.channel.send(`Set timer for ${timertime}. Label - ${timerlabel}`)

                setTimeout(function() {
                    msg.channel.send(`**${msg.author} your timer is over. Label - ${timerlabel} **`)
                    }, ms(timertime));  

            break;




            case `sin`:

            var sininput = args[1]
            if(!sininput) return msg.reply('hellloooo give me a number 🙄')

            var sinoutput = Math.sin(sininput)

            msg.channel.send(`Result - **${sinoutput}** `)

            break;



            case `pi`:

            msg.reply('3.141592653589793')

            break;



            case `power`:


            var powerinput1 = args[1]
            var powerinput2 = args[2]

            if(!powerinput1) return msg.reply('i need 2 numbers')
            if(!powerinput2) return msg.reply('i need 2 numbers')


           var powerresult = Math.pow(powerinput1, powerinput2);

           msg.reply(`Result - ** ${powerresult}**`)

            break;



            case `sqrt`:



            var sqrtinput1 = args[1]
            
            if(!sqrtinput1) return msg.reply('i need a number')


            var sqrtresult = Math.sqrt(sqrtinput1)

            msg.reply(`Result - **${sqrtresult}**`)

            break;


            case `acos`:


            var acosinput = args[1]

            if (!acosinput) return msg.reply('i need a value')


            var acosresult = Math.acos(acosinput)


            msg.reply(`Result - **${acosresult}**`)


            break; 
            
            case `goat`:

            if(!args[1]) {
               return msg.channel.send(invalidargs)
            }

            const baseurl = process.env.baseurl;
            let goatquery = args.slice(1).join(" ");
            let goatbody = `{"params":"distinct=true&facetFilters=()&hitsPerPage=1&page=0&query=${goatquery}"}`
            let goatresp = await axios.post(baseurl, goatbody);
            if (goatresp.status !== 200 || resp.data === '') {
                console.log('Error')
                msg.channel.send('error')
                console.log(error)
        }
            let goatresp2 = goatresp.data['hits'][0];
            if (goatresp2 == null) {
                const goaterror = new Discord.MessageEmbed()
                .setTitle('Bot')
                .setDescription('Error')
                .setTimestamp();
               return msg.channel.send(goaterror);
            }
    
            let DropDate = new Date(goatresp2['release_date'])

            const goatsuceess = new Discord.MessageEmbed()
            .setTitle(goatresp2['name'])
            .setURL('https://www.goat.com/sneakers/' + goatresp2['slug'])
            .addFields(
                {   
                    name: 'Brand',
                    value:  goatresp2['brand_name'],
                    inline: true
                },       
                {
                    name: "Drop Date",
                    value: `${DropDate.getFullYear()}-${DropDate.getMonth()}-${DropDate.getDate()}`,
                    inline: true
                },
                {
                
                    name: `Size`,
                    value: goatresp2['size'],
                    inline: true
                },
                {
                    name : `Retail`,
                    value: `(goatresp2['retail_price_cents_usd']/100).toFixed(2)`,
                    inline: true
                },
                {
                    name: ``,
                    value: `(goatresp2['lowest_price_cents_usd']/100).toFixed(2)`,
                    inline: true
                }
                )

            
           if (goatresp2['has_picture']) {
           goatsuceess.setThumbnail(goatresp2['main_picture_url'])
         }

           goatsuceess.setTimestamp();    
            msg.channel.send(goatsuceess);

            break;

            case `help`:

                if (msg.member.permissions.has('ADMINISTRATOR')) {

                    const adminhelp = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `start, hackban, goat, unban, lockdown on, urban, lyrics, lockdown off, auth, verify, obfuscatefile,  ping, 8ball, info, clear, fixname, getlogs, kick, ban, avatar, mute, unmute, vcban, unvcban, nick, pt, userinfo, bannedusers, corona, meme, img, timer, sin, pi, power, sqrt, acos, help, obfuscate, botblacklist, unbotblacklist, return, resource, changelog, addtag, edittag, tag, getsrc, addban, removeban, reddit, yes, stfu, poll, webhookset, webhooksend `)
                    .setTimestamp();
                    return msg.channel.send(adminhelp);

                } else if (msg.member.roles.cache.some(r => r.id === "761623315835912232")) {

                    const andyhelp = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `auth, verify, ping, goat, urban, lyrics, 8ball, info, fixname, avatar, mute, obfuscatefile,  unmute, nick, pt, userinfo, corona, meme, img, timer, sin, pi, power, sqrt, acos, help, return, obfuscate, resource, changelog, addtag, reddit, tag, getsrc, yes, stfu, poll`)
                    .setTimestamp();
                    return msg.channel.send(andyhelp)
                    
                    
                } else if (msg.member.roles.cache.some(r => r.id === "761436504853184513")) {

                    const viphelp = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `auth, verify, ping, 8ball, goat, urban, lyrics, info, fixname, avatar, mute, obfuscatefile,  unmute, nick, pt, userinfo, corona, meme, img, timer, sin, pi, power, sqrt, acos, help, return, obfuscate, resource, changelog, addtag, reddit, getsrc, tag, yes, stfu, poll`)
                    .setTimestamp();
                    return msg.channel.send(viphelp)
                    
                } else {

                    const helpEmbed = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `verify, ping, 8ball, urban, goat, lyrics, info, avatar, pt, userinfo, corona, meme, img, timer, sin, pi, power, sqrt, acos, help, return, obfuscate, resource, changelog, addtag, tag, reddit, yes, stfu, getsrc,  poll`)
                    .setTimestamp();
        
                    msg.channel.send(helpEmbed)

                }


            break;

            case `servers`:
              

             msg.channel.send(`I'm in ${client.guilds.cache.size} servers!`)


            break;
            

            case `exc`:     
                
            const excID =  '736285953039138817'; 

                if (msg.member.permissions.has('ADMINISTRATOR')) {
                
                if(!msg.author.id === excID) return msg.channel.send(Youdonthavepermsembed);
                   
                const excargs = msg.content.split(" ").slice(1);
                                  
                      try {
                        const code = excargs.join(" ");      
                        const code2 = code.replace('$exc', '');                  
                        let evaled = eval(code2);
                   
                        if (typeof evaled !== "string")
                          evaled = require("util").inspect(evaled);
                   
                          msg.channel.send('Executed code.')
                      } catch (err) {
                        msg.channel.send(`${err}`);
                      }
                    } else {
                        return;
                    }   

           break;
             
            case `?`:

            
                if (msg.member.permissions.has('ADMINISTRATOR')) {
                    const adminhelp1 = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `start, unban, hackban, urban, goat, lyrics, lockdown on, obfuscate, lockdown off, auth, obfuscatefile, verify, ping, 8ball, info, clear, reddit, fixname, getlogs, kick, ban, avatar, mute, unmute, vcban, unvcban, nick, pt, userinfo, bannedusers, corona, meme, img, timer, sin, pi, power, sqrt, acos, help, botblacklist, unbotblacklist, return, resource, changelog, addtag, edittag, tag, getsrc, addban, removeban, yes, stfu, poll, webhookset, webhooksend`)
                    .setTimestamp();
                    return msg.channel.send(adminhelp1);

                } else if (msg.member.roles.cache.some(r => r.id === "761623315835912232")) {

                    const andyhelp2 = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `auth, urban, lyrics, verify, ping, goat, obfuscate, 8ball, info, fixname, getsrc, avatar, obfuscatefile, mute, unmute, nick, pt, reddit, userinfo, corona, meme, img, timer, sin, pi, power, sqrt, acos, help, return, resource, changelog, addtag, tag, yes, stfu, poll`)
                    .setTimestamp();
                    return msg.channel.send(andyhelp2)
                    
                    
                } else if (msg.member.roles.cache.some(r => r.id === "761436504853184513")) {

                    const viphelp3 = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `auth, urban, lyrics,  verify, ping, goat, obfuscate, 8ball, info, obfuscatefile, getsrc, fixname, avatar, mute, unmute, nick, pt, userinfo, reddit, corona, meme, img, timer, sin, pi, power, sqrt, acos, help, return, resource, changelog, addtag, tag,
                    , yes, stfu, poll`)
                    .setTimestamp();
                    return msg.channel.send(viphelp3)
                    
                } else {

                    const helpEmbed4 = new Discord.MessageEmbed()
                    .setTitle(`Bot`)
                    .setColor('BLUE')
                    .addField(`Commands available for user:`, `verify, ping, urban, lyrics, 8ball, info, goat, avatar, pt, userinfo, corona, meme, img, timer, sin, pi, getsrc, power, sqrt, acos, help, return, resource, changelog, addtag, tag, yes, stfu, poll`)
                    .setTimestamp();
        
                    msg.channel.send(helpEmbed4)

                }


            break;
 
            
           case  `botblacklist`:

    
            if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);
            const userforblacklist = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
            if(!userforblacklist) return msg.channel.send(invalidargs)
            if(userforblacklist.roles.highest.position >= msg.member.roles.highest.position) return msg.channel.send(staffYoudonthavepermsembed)

            var blperson =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))

            var blpersonid = blperson.id 


            var blcheckvar = await bled.findOne({userid:blpersonid});
            if(blcheckvar !== null) {
                return msg.channel.send('User is already blacklisted.')
            }
            

            await punishments.create({userid: blpersonid, punishments: {type: 'botblacklist', reason: 'Reasons are not required bot-blacklists.'}});


               if (!args[1]) return msg.reply(invalidargs)

               await bled.create({userid:blpersonid});


               const publicblembed = new Discord.MessageEmbed()
               .setTitle("Bot")
               .setColor('BLUE')
               .setDescription(`Added ${blperson} to the blacklisted database, ${msg.author}.`)
               .setTimestamp();


               msg.channel.send(publicblembed)

                break;



                 
           case `unbotblacklist`:

           if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);

            const userforunbotblacklist =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))
            if(!userforunbotblacklist) return msg.channel.send(invalidargs)

            var unblperson =  msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))

            var unblpersonid = unblperson.id
            

            await punishments.create({userid: unblpersonid, punishments: {type: 'unbotblacklist', reason: 'Reasons are not required for un bot-blacklists'}});


            var unbldatareq = await bled.findOne({userid: unblpersonid });
             if(unbldatareq !== null) unbldatareq.deleteOne();

            if (!args[1]) return msg.reply(invalidargs)

               const upublicblembed = new Discord.MessageEmbed()
               .setTitle("Bot")
               .setColor('BLUE')
               .setDescription(`Successfully removed ${unblperson} from the blacklisted database, ${msg.author}.`)
               .setTimestamp();
               msg.channel.send(upublicblembed)


                break;

    

            case `return`:

                const returnembed = new Discord.MessageEmbed()
                .setTitle("Bot")
                .setColor('BLUE')
                .setDescription(`Successfully returned, ${msg.author}. `)
                .setTimestamp();
                msg.channel.send(returnembed)
             return;
            break;



            case `resource`:


            if(!args[1]) return msg.channel.send('Usage: $resource quizlet.com "study guide"')
            resourcenameandshitlol = args.slice(2).join(' ');
            if(!resourcenameandshitlol) return msg.channel.send('Usage: $resource quizlet.com "study guide"');
            client.channels.cache.get('708844166724976700').send(`Submission by ${msg.author} \n ${args[1]} - ${resourcenameandshitlol}`);
            
            const resourceembed = new Discord.MessageEmbed()
               .setTitle("Bot")
               .setColor('BLUE')
               .setDescription(`Successfully deployed resource, ${msg.author}. `)
               .setTimestamp();
               msg.channel.send(resourceembed)

            break;


            case `changelog`:

           const changelogembed = new Discord.MessageEmbed()
           .setTitle("Changelog")
           .setColor('RANDOM')
           .addField('who tf evenreads this ')
           .setTimestamp();
           msg.channel.send(changelogembed)
            break;


            case `addtag`:

            if(!args[1]) return msg.channel.send(invalidargs);
            if(!args.slice(2).join(" ")) return msg.channel.send(invalidargs);
            tags.findOne({ Guild: msg.guild.id, Name: args[1]},async(err,data) => {
                 if(err) throw err;
                 if(data) {
                    msg.channel.send('that tag already exists. use `$edittag` to edit it. ')
                 } else if(!data) {
                     
                     let newData = new tags({
                         Guild: msg.guild.id,
                         Name: args[1],
                         Content: args.slice(2).join(" "),
                     })
                    newData.save();
                    msg.channel.send(`Tag ${args[1]} has been saved.`);
                    if(error) {
                        return console.log(error)
                    }
                 }
            })

            break;
            
            case `edittag`:

            if(!args[1]) return msg.channel.send(invalidargs);
            if(!args.slice(2).join(" ")) return msg.channel.send(invalidargs);
            tags.findOne({ Guild: msg.guild.id, Name: args[1]},async(err,data) => {
                 if(err) throw err;
                 if(data) {
                    if (!msg.member.permissions.has('MANAGE_NICKNAMES')) return msg.channel.send(Youdonthavepermsembed)
                     data.Content = args.slice(2).join(" ")
                     data.save();
                     msg.channel.send(`Tag ${args[1]} has been edited.`);
                 } else if(!data) {
                    return msg.channel.send('that tag doesnt exist. use `$addtag` to add it.')
                 }
            })

            break;

            case `tag`:
            
                tags.findOne({Guild: msg.guild.id, Name: args[1]}, async(err,data) => {
                    if(err) throw err;
                    if(data) { 
                        return msg.channel.send(data.Content);
                }
                else return msg.channel.send('Could not find tag.')
                })
    
                
         break;
            
         case `reload`:


            let reloadvar = args.slice(1).join(" ");
            if (msg.author.id !== "736285953039138817") return false;
            // reloads entire bot because why not           
            client.destroy();
   
            client.login(process.env.bgr98hu0jwoihash98r2jofwqino);
            msg.channel.send(`successfully reloaded \`${reloadvar}\``)

         break;

            case `hackban`:

                   if (!msg.member.permissions.has('BAN_MEMBERS')) return msg.channel.send(Youdonthavepermsembed);

                   


                    const userforhackbancheck = msg.guild.member(msg.mentions.users.first() || msg.guild.members.cache.get(args[1]))

                    if(userforhackbancheck) {

                        if(userforhackbancheck.roles.highest.position >= msg.member.roles.highest.position) return msg.channel.send(staffYoudonthavepermsembed);

                    }

            
                let hackbanuserID = args[1];
            
                let hackbanreason = args.slice(2).join(" ");
            
            
            
                if (!hackbanuserID) return msg.channel.send(invalidargs);
            
                if (isNaN(hackbanuserID)) return msg.channel.send(invalidargs);
            
                if (hackbanuserID === client.user.id) return msg.channel.send("why ban me??? 😭");
                        

                if (!hackbanreason) hackbanreason = "No reason";
            
            
            
                client.users.fetch(hackbanuserID).then(async user => {
            
                    await msg.guild.members.ban(user.id, {reason: hackbanreason});
            


                    const hackbanembed = new Discord.MessageEmbed()
                    .setTitle("Bot")
                    .setColor('BLUE')
                    .setDescription(`Successfully hackbanned ${user}, ${msg.author}.`) 
                    .setTimestamp();
                    msg.channel.send(hackbanembed)         

                    await punishments.create({userid: hackbanuserID, punishments: {type: 'hackban', reason: hackbanreason}});

                    return;

                }).catch(error => {
            
                    return msg.channel.send(`${error}`);
            
                })



            break;


            case `getsrc`:

	
       

           const srcembed = new Discord.MessageEmbed()
           .setTitle("Bot Source Code")
           .setColor('BLUE')
           .setDescription('https://github.com/sidhys1/stantonapbot') 
           .setTimestamp();
           msg.channel.send(srcembed)
  


            break; 

            

            case `removeban`:

                if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);
     
                 var removebanid = args[1]

                 if (!args[1]) return msg.reply(invalidargs)
     
                 var removebandatareq = await databasebanneds.findOne({userid: removebanid });
                  if(removebandatareq !== null) removebandatareq.deleteOne();
     
     
                    const removebanembed = new Discord.MessageEmbed()
                    .setTitle("Bot")
                    .setColor('BLUE')
                    .setDescription(`Successfully removed ${removebanid} from the ban database, ${msg.author}.`)
                    .setTimestamp();
                    msg.channel.send(removebanembed)
     
     
                     break;

            case `addban`:

                if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);

                addbanuser = args[1];

                var addbancheckvar = await databasebanneds.findOne({userid:addbanuser});
                if(addbancheckvar !== null) {
                    return msg.channel.send('User is already on the ban database.')
                }
                
                if (!args[1]) return msg.reply(invalidargs)
    
                await databasebanneds.create({userid:addbanuser});
    
    
                   const addbanembed = new Discord.MessageEmbed()
                   .setTitle("Bot")
                   .setColor('BLUE')
                   .setDescription(`Added ${addbanuser} to the banned database, ${msg.author}.`)
                   .setTimestamp();
    
    
                   msg.channel.send(addbanembed)
    


            break;

        }                        
   })

client.on('message', message => {
     if (!message.guild) return;
     const lockdownchannels = message.guild.channels.cache.filter(ch => ch.id === '714822326016933900');
     if(!lockdownchannels) return;
	 if (message.content.toLowerCase().includes('https://grabify.link')) {
        message.delete()
		message.channel.send(`${message.author} posted a ip logger.`)
     client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)
     
	}  else if (message.content.toLowerCase().includes('https://leancoding.co')) {
       message.delete()
       message.channel.send(`${message.author} posted a ip logger.`)
    client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)

    } else if (message.content.toLowerCase().includes('https://stopify.co')) {
        message.delete()
        message.channel.send(`${message.author} posted a ip logger.`)
     client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)
    } else  if (message.content.toLowerCase().includes('https://freegiftcards.co')) {
        message.delete()
        message.channel.send(`${message.author} posted a ip logger.`)
     client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)
	 
   } else if (message.content.toLowerCase().includes('https://joinmy.site')) {
    message.delete()
    message.channel.send(`${message.author} posted a ip logger.`)
 client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)
 
  } else if (message.content.toLowerCase().includes('https://curiouscat.club')) {
    message.delete()
    message.channel.send(`${message.author} posted a ip logger.`)
 client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)
 
 
  } else if (message.content.toLowerCase().includes('https://catsnthings.fun')) {
    message.delete()
    message.channel.send(`${message.author} posted a ip logger.`)
 client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)
  
} else if (message.content.toLowerCase().includes('https://catsnthing.com')) {
    message.delete()
    message.channel.send(`${message.author} posted a ip logger.`)
 client.channels.cache.get('714822326016933900').send(`${message.author} posted a IP logger. ID - ${message.author.id}`)
  } else if (message.content.toLowerCase().includes('started timed message 👍')) {
    message.delete();
  }
    })


    let hook;
    client.on('message', async message => {
           
        const prefixdata2 = await prefix.findOne({
            GuildID: message.guild.id
        })

            const mainprefix2 = prefixdata2.Prefix;
            if(message.content.startsWith(mainprefix2)) {
          if(message.author.bot) return;
          if (!message.guild) return;
            const args = message.content.slice(notmainPREFIX.length).trim().split(/ +/);
            const input = message.content.slice(notmainPREFIX.length).trim().split(' '); 
            const command = input.shift();
            const commandArgs = input.join(' ');    
         
          if (command === 'webhookset') {
              
            if(!args[1]) return message.channel.send('usage: `<prefix> <discord webhook link>`')
              if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('no')
  
               webhookthing = args[1];
  
              if(!webhookthing.toLowerCase().includes('com/api/webhooks/')) return message.channel.send('Please use a discord webhook link.'); 
  
                 hook = new Webhook(`${args[1]}`)
            
                message.channel.send(`Set webhook to the url, ${message.author}.`); 
    
            } else if (command === 'webhooksend') {
  
                if(!args[1]) return message.channel.send('usage: `<prefix> <amount of times to send message> <message>`')
                if(!args[2]) return message.channel.send('usage: `<prefix> <amount of times to send message> <message>`')
              if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('no')
  
              if(!hook) return message.channel.send('Set a webhook first.')
                
         wbhvar = args.slice(2).join(' ')
         wbhrepeat = args[1]

         var i;
        for (i = 0; i < wbhrepeat; i++) {
        hook.send(`${wbhvar}`)
            }
    
          message.channel.send(`Sent message through the webhook, ${message.author}`)
    
          }  
          
    
        }
    });

  
    
    const addReactions = (message) => {
        message.react('🇸')
        message.react('🇹')
        message.react('🇫')
        message.react('🇺')

        setTimeout(() => {
        message.react('🇹')
        }, 750) 
    }
    
    client.on('message', async (message) => {
    if (message.content.toLowerCase() === '$stfu') {
        if (!message.guild) return;
        
var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
        await message.delete()
        const fetched = await message.channel.messages.fetch({ limit: 1 })
        if (fetched && fetched.first()) {
            addReactions(fetched.first())
        }
        }
    })



    
    const addReactionss = (message) => {
        message.react('🇾')
        message.react('🇪')
        setTimeout(() => {
        message.react('🇸')
        }, 750) 
    }
    

    client.on('message', async (message) => {
        if (message.content.toLowerCase() === '$yes') {
        if (!message.guild) return;
        
var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
        await message.delete()
        const fetched = await message.channel.messages.fetch({ limit: 1 })
        if (fetched && fetched.first()) {
            addReactionss(fetched.first())
        }
        }
    })



  const addReaction = (message) => {
    message.react('👍')
    setTimeout(() => {
      message.react('👎')
    }, 750)
  }

  client.on('message', async (message) => {
   if (message.content.toLowerCase() === '$poll') {
       
var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
    if (!message.guild) return;
      await message.delete()
      const fetched = await message.channel.messages.fetch({ limit: 1 })
      if (fetched && fetched.first()) {
        addReaction(fetched.first())
      }
    }
  })



const addReactionsss = (message) => {
message.react('6️⃣')
setTimeout(() => {
  message.react('9️⃣')
}, 750) 
}

client.on('message', async (message) => {
if (message.content.toLowerCase().includes('nice')) {    
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
  const fetched = await message.channel.messages.fetch({ limit: 1 })
  if (fetched && fetched.first()) {
    addReactionsss(fetched.first())
  }
}
}
})

client.on('message', async (message) => {
if (!message.guild) return;
var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
    if (message.content.toLowerCase().includes('goat')) {
        return message.react('🐐')
}
}})

client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
    if (message.content.toLowerCase().includes('oof')) {
        return message.react('💀')
}   
}})
client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") { 
if (message.content.toLowerCase().includes('dead')) {
return message.react('💀')
}
}})
client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('100')) {
return message.react('💯')
}
}})

client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('nerd')) {
return message.react('🤓')
}
}})

client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('hot')) {
return message.react('🥵')
}
}})

client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('bot')) {
return message.react('🤖')
}
}})


client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('ok')) {
return message.react('👌')
}
}})

client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('okay')) {
return message.react('👌')
}
}})

client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().startsWith('k')) {
return message.react('👌')
}
}})


client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('corona')) {
message.react('😷')
message.react('🦠');
return;
}
}})

client.on('message', async (message) => {
if (!message.guild) return;

var reactioncheck = await reactions.findOne({Value: "true"});
if(reactioncheck !== null) return; 
if(message.guild.id === "708842168588042260") {
if (message.content.toLowerCase().includes('virus')) {
message.react('😷')
message.react('🦠');
return;
}
}})


client.on('message', async (message) => {
if (!message.guild) return;
if(message.guild.id === "708842168588042260") {
if (message.member.roles.cache.some(r => r.id === "712852530232688640")) { 
if (message.content.toLowerCase().includes('girl')) {
   message.react('🤰');      
   message.channel.send('uh oh horny allen is back!!!');
} 
} else return 
}
})
client.on('messageUpdate', async(oldMessage,newMessage)=>{
    var auditconfigcheck = await auditconfig.findOne({Value: "true"});
    if(auditconfigcheck !== null) return 
    let updateembed = new MessageEmbed()
    .setTitle('Message Edited')
    .setColor('BLUE')
    .setDescription(`Message by <@${oldMessage.author.id}> edited in <#${oldMessage.channel.id}>`)
    .addField('Before',oldMessage.content,true)
    .addField('After', newMessage.content,true)
    .setTimestamp()
    let channel = oldMessage.guild.channels.cache.find(ch=> ch.id === "714822326016933900")
    if(!channel) return;
    channel.send(updateembed)   
})

client.on('messageDelete', async(message)=>{
    var auditconfigcheck = await auditconfig.findOne({Value: "true"});
    if(auditconfigcheck !== null) return 
    let deleteembed = new MessageEmbed()
    .setTitle('Message Deleted')
    .setColor('BLUE')
    .setDescription(`Message by <@${message.author.id}> deleted in <#${message.channel.id}>`)
    .addField('Message Content',message.content,true)
    .setTimestamp()
    let channel = message.guild.channels.cache.find(ch=> ch.id === "714822326016933900")
    if(!channel) return;
    channel.send(deleteembed)
})


client.on('guildMemberRemove', async member => {
    var auditconfigcheck = await auditconfig.findOne({Value: "true"});
    if(auditconfigcheck !== null) return 
	const fetchedLogs = await member.guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_KICK',
    });
    if(!guild.id == '708842168588042260') return
	const kickLog = fetchedLogs.entries.first();

    if (!kickLog) return client.channels.cache.get('714822326016933900').send(`${member.user.tag} left the server.`);
    

	const { executor, target } = kickLog;

	if (target.id === member.id) {
		client.channels.cache.get('714822326016933900').send(`${member.user.tag} was kicked by ${executor.tag}  `);
	} else {
		client.channels.cache.get('714822326016933900').send(`${member.user.tag} left the server, but I couldn't find any more details.`);
	}
});


client.on('guildBanAdd', async (guild, user) => {
    var auditconfigcheck = await auditconfig.findOne({Value: "true"});
    if(auditconfigcheck !== null) return 
	const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
    });
    if(!guild.id == '708842168588042260') return
	const banLog = fetchedLogs.entries.first();

    if (!banLog) return client.channels.cache.get('714822326016933900').send(`${user.tag} was banned from this server, but failed to find more information.`);
    
	const { executor, target } = banLog;

	if (target.id === user.id) {
		client.channels.cache.get('714822326016933900').send(`${user.tag} was banned by ${executor.tag}`);
	} else {
		client.channels.cache.get('714822326016933900').send(`${user.tag} got was banned, but I couldn't find any more details.`);
	}
});

const sidprefix = "!";

client.on('message', async (msg) => {
       let args = msg.content.substring(sidprefix.length).split(" ");
       if(!msg.content.startsWith(sidprefix)) return;
       const sidid = "736285953039138817"
       if(msg.author.id === sidid) {

        switch (args[0]) {
            
    case `say`:

        var stufftosay = args.slice(2).join(' ') 
        var saychannelid = args[1];

        client.channels.cache.get(saychannelid).send(stufftosay);

    break;


    case `calendar`:
    
        const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
        authorize(JSON.parse(process.env.googleinfo), listEvents);
        
        /**
         * @param {Object} credentials 
         * @param {function} callback 
         */
        function authorize(credentials, callback) {
          const {client_secret, client_id, redirect_uris} = credentials.installed;
          const oAuth2Client = new google.auth.OAuth2(
              client_id, client_secret, redirect_uris[0]);
        
            oAuth2Client.setCredentials(JSON.parse(process.env.googletoken));
            callback(oAuth2Client);
        }
        
        /**
         * @param {google.auth.OAuth2} oAuth2Client 
         * @param {getEventsCallback} callback 
        */
        /**
         * @param {google.auth.OAuth2} auth 
         */
        
        function listEvents(auth) {
          const calendar = google.calendar({version: 'v3', auth});
          calendar.events.list({
            calendarId: 'primary',
            timeMin: (new Date()).toISOString(),
            maxResults: 100,
            singleEvents: true,
            orderBy: 'startTime',
          }, (err, res) => {
            if (err) return msg.channel.send('The API returned an error: ' + err);
            const events = res.data.items;
            if (events.length) {
              events.map((event, i) => {
                const start = event.start.dateTime || event.start.date;
                const calendarembed = new Discord.MessageEmbed()
                .setTitle("Upcoming event")
                .setColor('BLUE')
                .setDescription(`${start} - ${event.summary}`)
                .setTimestamp();
                msg.channel.send(calendarembed)
              });
            } else {
              msg.channel.send('No upcoming events found.');
            }
          });
        }
            break;

        }
        
       }
})



const configprefix = "c!";

client.on('message', async (msg) => {
       let args = msg.content.substring(configprefix.length).split(" ");
       if(!msg.content.startsWith(configprefix)) return;
       const configwhitelistedid = "736285953039138817";
       const configwhitelistedid2 = "363843784842280960";
       const configwhitelistedid3 = '696379479433674834';
       if(msg.author.id === configwhitelistedid) {


       switch (args[0]) {           

        case `prefix`:

        
            const prefixdata = await prefix.findOne({
                GuildID: msg.guild.id
            });
        
            if (!args[1]) return msg.channel.send(invalidargs);
        
            if (prefixdata) {
                await prefix.findOneAndRemove({
                    GuildID: msg.guild.id
                })
                
                msg.channel.send(`updated prefix to \`${args[1]}\` `);
        
                let newData = new prefix({
                    Prefix: args[1],
                    GuildID: msg.guild.id
                })
                
                newData.save();
            } else if (!prefixdata) {
                msg.channel.send(`updated prefix to \`${args[1]}\``);
        
                let newData = new prefix({
                    Prefix: args[0],
                    GuildID: msg.guild.id
                })
                newData.save();
            }
        

        break;

    case `botlockdown`:

        if(args[1] === "true") {
        await botlockdown.create({Value: "true"});
        msg.channel.send('set lockdown to `true`')
        } else if(args[1] === "false") {                        
     var botlockdownremoverequest = await botlockdown.findOne({Value: "true"});
     if(botlockdownremoverequest !== null) botlockdownremoverequest.deleteOne();
     msg.channel.send('set lockdown to `false`')
        }

    break;

    case `reactions`:
        
        if(args[1] === "false") {
            await reactions.create({Value: "true"});
            msg.channel.send('set reactions to `false`')
            } else if(args[1] === "true") {                        
         var reactionsreqeust = await reactions.findOne({Value: "true"});
         if(reactionsreqeust !== null) reactionsreqeust.deleteOne();
         msg.channel.send('set reactions to `true`')
            }

        break;
     
    case `setstatus`:
                
        if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);

        if(!args[1]) return msg.channel.send(invalidargs)
        if(!args[2]) return msg.channel.send(invalidargs)

        var statustype = args[1]
        var statusmessage = args.slice(2).join(' ') 
 
        client.user.setActivity(statusmessage, {
            type: statustype
           });
    
           msg.channel.send(`set statustype to \`${statustype}\` and statusmessage to \`${statusmessage}\``)
            

    break;

    case `audit`:

        if(args[1] === "false") {
        await auditconfig.create({Value: "true"});
        msg.channel.send('set auditconfig to: `false`')
        } else if(args[1] === "true") {                        
     var auditconfigrequest = await auditconfig.findOne({Value: "true"});
     if(auditconfigrequest !== null) auditconfigrequest.deleteOne();
     msg.channel.send('set auditconfig to: `true`')
        }

    break;

    case `help`:

  msg.channel.send('Available configurations: botlockdown (`true` or `false`), prefix (`value`), audit (`true` or `false`), reactions (`true` or `false`), setstatus (`TYPE` `value`). To change a configuration, run `c!<configuration to change> <arguments>`');

    break;
}
       } else if(msg.author.id === configwhitelistedid2) {
           
       switch (args[0]) {       
           
        case `prefix`:

        
            const prefixdata = await prefix.findOne({
                GuildID: msg.guild.id
            });
        
            if (!args[1]) return msg.channel.send(invalidargs);
        
            if (args[1].length > 5) return msg.channel.send('prefix is too long, make it shorter or stfu')
        
            if (prefixdata) {
                await prefix.findOneAndRemove({
                    GuildID: msg.guild.id
                })
                
                msg.channel.send(`updated prefix to \`${args[1]}\` `);
        
                let newData = new prefix({
                    Prefix: args[1],
                    GuildID: msg.guild.id
                })
                
                newData.save();
            } else if (!prefixdata) {
                msg.channel.send(`updated prefix to \`${args[1]}\``);
        
                let newData = new prefix({
                    Prefix: args[0],
                    GuildID: msg.guild.id
                })
                newData.save();
            }
        




        break;

        case `botlockdown`:
        
                if(args[1] === "true") {
                await botlockdown.create({Value: "true"});
                msg.channel.send('set lockdown to `true`')
                } else if(args[1] === "false") {                        
             var botlockdownremoverequest = await botlockdown.findOne({Value: "true"});
             if(botlockdownremoverequest !== null) botlockdownremoverequest.deleteOne();
             msg.channel.send('set lockdown to `false`')
                }
        
            break;
            
    case `reactions`:
        
        if(args[1] === "false") {
            await reactions.create({Value: "true"});
            msg.channel.send('set reactions to `false`')
            } else if(args[1] === "true") {                        
         var reactionsreqeust = await reactions.findOne({Value: "true"});
         if(reactionsreqeust !== null) reactionsreqeust.deleteOne();
         msg.channel.send('set reactions to `true`')
            }

        break;
     
         
            case `setstatus`:
                
                if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);

                if(!args[1]) return msg.channel.send(invalidargs)
                if(!args[2]) return msg.channel.send(invalidargs)

                var statustype = args[1]
                var statusmessage = args.slice(2).join(' ') 
         
                client.user.setActivity(statusmessage, {
                    type: statustype
                   });
            
                   msg.channel.send(`set statustype to \`${statustype}\` and statusmessage to \`${statusmessage}\``)
            

            break;
        
            case `audit`:
        
                if(args[1] === "false") {
                await auditconfig.create({Value: "false"});
                msg.channel.send('set auditconfig to: `false`')
                } else if(args[1] === "true") {                        
             var auditconfigrequest = await auditconfig.findOne({Value: "false"});
             if(auditconfigrequest !== null) auditconfigrequest.deleteOne();
             msg.channel.send('set auditconfig to: `true`')
                }
        
            break;
            
            case `help`:
                msg.channel.send('Available configurations: botlockdown (`true` or `false`), prefix (`value`), audit (`true` or `false`), reactions (`true` or `false`), setstatus (`TYPE` `value`). To change a configuration, run `c!<configuration to change> <arguments>`')   
            
                break;
        
        }

       } else if(msg.author.id === configwhitelistedid3) {
           
        switch (args[0]) {       
            
         case `prefix`:
 
         
             const prefixdata = await prefix.findOne({
                 GuildID: msg.guild.id
             });
         
             if (!args[1]) return msg.channel.send(invalidargs);
         
             if (args[1].length > 5) return msg.channel.send('prefix is too long, make it shorter or stfu')
         
             if (prefixdata) {
                 await prefix.findOneAndRemove({
                     GuildID: msg.guild.id
                 })
                 
                 msg.channel.send(`updated prefix to \`${args[1]}\` `);
         
                 let newData = new prefix({
                     Prefix: args[1],
                     GuildID: msg.guild.id
                 })
                 
                 newData.save();
             } else if (!prefixdata) {
                 msg.channel.send(`updated prefix to \`${args[1]}\``);
         
                 let newData = new prefix({
                     Prefix: args[0],
                     GuildID: msg.guild.id
                 })
                 newData.save();
             }
         
 
 
 
 
         break;
 
         case `botlockdown`:
         
                 if(args[1] === "true") {
                 await botlockdown.create({Value: "true"});
                 msg.channel.send('set lockdown to `true`')
                 } else if(args[1] === "false") {                        
              var botlockdownremoverequest = await botlockdown.findOne({Value: "true"});
              if(botlockdownremoverequest !== null) botlockdownremoverequest.deleteOne();
              msg.channel.send('set lockdown to `false`')
                 }
         
             break;
             
     case `reactions`:
         
         if(args[1] === "false") {
             await reactions.create({Value: "true"});
             msg.channel.send('set reactions to `false`')
             } else if(args[1] === "true") {                        
          var reactionsreqeust = await reactions.findOne({Value: "true"});
          if(reactionsreqeust !== null) reactionsreqeust.deleteOne();
          msg.channel.send('set reactions to `true`')
             }
 
         break;
      
          
             case `setstatus`:
                 
                 if (!msg.member.permissions.has('ADMINISTRATOR')) return msg.channel.send(Youdonthavepermsembed);
 
                 if(!args[1]) return msg.channel.send(invalidargs)
                 if(!args[2]) return msg.channel.send(invalidargs)
 
                 var statustype = args[1]
                 var statusmessage = args.slice(2).join(' ') 
          
                 client.user.setActivity(statusmessage, {
                     type: statustype
                    });
             
                    msg.channel.send(`set statustype to \`${statustype}\` and statusmessage to \`${statusmessage}\``)
             
 
             break;
         
             case `audit`:
         
                 if(args[1] === "false") {
                 await auditconfig.create({Value: "false"});
                 msg.channel.send('set auditconfig to: `false`')
                 } else if(args[1] === "true") {                        
              var auditconfigrequest = await auditconfig.findOne({Value: "false"});
              if(auditconfigrequest !== null) auditconfigrequest.deleteOne();
              msg.channel.send('set auditconfig to: `true`')
                 }
         
             break;
             
             case `help`:
                 msg.channel.send('Available configurations: botlockdown (`true` or `false`), prefix (`value`), audit (`true` or `false`), reactions (`true` or `false`), setstatus (`TYPE` `value`). To change a configuration, run `c!<configuration to change> <arguments>`')   
             
                 break;
         
         }
 
        } else return;
	
})

//Reaction verification system:
	client.on('messageReactionAdd', async (reaction, user) => {
	if(reaction.message.partial) await reaction.message.fetch();
	if(reaction.partial) await reaction.fetch();
	if(reaction.message.guild) return;		    
	if(reaction.message.channel.id === '714819052639486082') {
	if(reaction.emoji.name === "white_check_mark") {
		console.log('requested')
		await reaction.message.guild.members.cache.get(user.id).roles.add('714833474166587425');
		await reaction.message.guild.members.cache.get(user.id).roles.remove('714833374010933361');
		
		if(error) {
		console.log(error)
		}
	}
 
		}
	});

client.login(process.env.bgr98hu0jwoihash98r2jofwqino); // <- not bots real token, its a variable

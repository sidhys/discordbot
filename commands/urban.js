
const fetchNode = require('node-fetch')
const querystring = require('querystring')
const Discord = require('discord.js')

const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports =  {
    name: 'urban',
    aliases: ['urban', 'urbandictionary'],
    description: 'Searches for a term on the urban dictionary',
	async execute (message, args) {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(Youdonthavepermsembed(message))
        const searchString = querystring.stringify({ term: args.slice(0).join(" ") })

        if(!args[0]) return message.channel.send(invalidargs(message))

        message.channel.send("Loading..")
        
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
            message.channel.send(embed)
        } catch (error) {
            console.log(error)
            return message.channel.send(new Discord.MessageEmbed()
                .setColor("BLUE")
                .setDescription(`No results were found for **${args.slice(1).join(" ")}**`)
            )
        }
	},
};


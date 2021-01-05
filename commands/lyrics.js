const solenolyrics = require('solenolyrics')
const Discord = require('discord.js')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'lyrics',
    aliases: ['lyrics', 'getlyrics'],
    description: 'Gets the lyrics to a song.',
	async execute(message, args) {
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(Youdonthavepermsembed(message))
        if (!args[0]) return message.channel.send(invalidargs(message))
        try {
	let lyricssuccess = true
            var lyrics = await solenolyrics.requestLyricsFor(args.slice(0).join(' '))
            var title = await solenolyrics.requestTitleFor(args.slice(0).join(' '));
            var albumCover = await solenolyrics.requestIconFor(args.slice(0).join(' '));
            var songAuthor = await solenolyrics.requestAuthorFor(args.slice(0).join(' '));
	if(lyricssuccess === "false") return message.send(errorembed(message))
        } catch (error) {
            console.log(error)
            return message.channel.send(`Could not find song.`);
        }
        if(lyrics === undefined) return message.channel.send(`Could not find song.`);
			message.channel.send(`found lyrics (took genius ${Date.now() - message.createdTimestamp} ms to return JSON file)`)
    for(let i = 0; i < lyrics.length; i += 1800) {
    const smallerlyrics = lyrics.substring(i, Math.min(lyrics.length, i + 1800));
	   let lyricsEmbed = new Discord.MessageEmbed()
            .setDescription(smallerlyrics)
            .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ 
                dynamic: true
            }))
            .setTitle(`Lyrics for ${title} by ${songAuthor}`)
            .setThumbnail(albumCover)
            .setColor("BLUE");
            message.channel.send(lyricsEmbed)
}
	},
};


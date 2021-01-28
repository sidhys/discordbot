const Discord = require('discord.js')
const cheerio = require('cheerio')
const axios = require('axios')
const request = require('request')
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'image',
    aliases: ['img', 'image'],
    description: 'Returns a image on the search',
	async execute(message, args) {
    var parts = message.content.split(" "); 
    image(message, parts);    

    function image(message, parts)  {
                 
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
                return message.reply(errorembed(message));
            }
     
    
            $ = cheerio.load(responseBody); 
     
            var links = $(".image a.link");
            var imgurls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
            if (!imgurls.length) {
                return message.channel.send(`Could not find any images related to that search, ${message.author}.`)
            }
            const imgembed = new Discord.MessageEmbed()
            .setTitle(`Image`)
            .setColor('#f3f3f3')
            .setImage(imgurls[0])
            .setFooter('if it doesnt load its not my fault')
            .setTimestamp();
            message.channel.send(imgembed)
        
        });

    
        }    
	},
};


const Discord = require('discord.js')
const { Webhook } = require('discord-webhook-node');
const { invalidargs, errorembed, staffYoudonthavepermsembed, Youdonthavepermsembed } = require('../definitions');
module.exports = {
    name: 'webhook',
    aliases: ['webhook', 'send'],
    usage: "<url> <content> ",
    description: 'Sends a message through a webhook.',
  	async execute(message, args) {
    let hook =  new Webhook(args[0])
    if(!hook) return message.channel.send(invalidargs(message))
    let content = args.slice(1).join(' ')
    if(!content) return message.channel.send(invalidargs(message))
    hook.send(content); 
    message.channel.send(`Sent the message through the webhook, ${message.author}`);
	},
};


const {MessageEmbed, Message} = require('discord.js')
module.exports=async(message)=>{
    let deleteembed = new MessageEmbed()
    .setTitle('Message Deleted')
    .setDescription(`Message by ${message.author.tag} deleted in <#${message.setDescription.id}>`)
    .addField('Message Content',message.content,true)
    let channel = message.guild.channels.cache.find(ch=> ch.id === "714822326016933900")
    if(!channel) return;
    channel.send(deleteembed)
}
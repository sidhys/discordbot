const {MessageEmbed, Message} = require('discord.js')
module.exports=async(message)=>{
    let deleteembed = new MessageEmbed()
    .setTitle('Message Deleted')
    .setColor('BLUE')
    .setDescription(`Message by <@${message.author.id}> deleted in <#${message.channel.id}>`)
    .addField('Message Content',message.content,true)
    .setTimestamp()
    let channel = message.guild.channels.cache.find(ch=> ch.id === "714822326016933900")
    if(!channel) return;
    channel.send(deleteembed)
    
}
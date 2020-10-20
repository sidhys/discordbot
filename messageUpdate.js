const {MessageEmbed} = require('discord.js')
module.exports=async(oldMessage,newMessage)=>{
    let embed = new MessageEmbed()
    .setTitle('Message Edited')
    .setColor('BLUE')
    .setDescription(`Message by <@${message.author.id}> edited in <#${oldMessage.channel.id}>`)
    .addField('Before',oldMessage.content,true)
    .addField('After',newMessage.content,true)
    let channel = oldMessage.guild.channels.cache.find(ch=> ch.id === "714822326016933900")
    if(!channel) return;
    channel.send(deleteembed)
}
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Server Info:**")
    .setColor("#1fd1c8")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Date Created", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);
    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}

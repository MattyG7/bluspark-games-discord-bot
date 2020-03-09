const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let memberCount = parseInt(message.guild.memberCount);
  memberCount = memberCount - 3;
    let serverembed = new Discord.RichEmbed()
    .setDescription("**Server Info:**")
    .setColor("#667ed6")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Date Created", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Member Count", memberCount, true)
    .addField("Total Members (including bots and me)", message.guild.memberCount, true);
    return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}

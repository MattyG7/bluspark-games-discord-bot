const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author) => {
  let bicon = bot.user.displayAvatarURL();
    let botembed = new Discord.MessageEmbed()
    .setDescription("**Bot Info:**")
    .setColor("#7c889c")
    .setThumbnail(bicon)
    .addField("**Bot Name**", bot.user.username)
    .addField("**Date Created**", bot.user.createdAt)
    .addField("**Created By**", message.author);
    return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}

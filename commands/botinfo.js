const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author) => {
  let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("**Bot Info:**")
    .setColor("#1fd1c8")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Date Created", bot.user.createdAt)
    .addField("Created By", author);
    return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}

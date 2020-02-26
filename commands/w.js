const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let wlltembed = new Discord.RichEmbed()
  .setTitle(`💳 ${message.author.username}'s Wallet`)
  .setColor("#1fd1c8")
  //.setThumbnail(wicon)
  .setDescription(`You have ${coins} SparkCoins.`);
  return message.channel.send(wlltembed);
}

module.exports.help = {
  name: "w"
}

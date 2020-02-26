const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let dicon = message.author.displayAvatarURL;
  coins = coins + 100;
  let dlyembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("💷 Here is your daily 100 SparkCoins!", dicon)
  .setDescription(`You now have ${coins} SparkCoins.`);
  return message.channel.send(dlyembed);
}

module.exports.help = {
  name: "daily"
}

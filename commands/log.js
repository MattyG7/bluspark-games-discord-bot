const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
  let sparkcoinlogmembed = new Discord.RichEmbed()
  .setColor("#1c9472")
  .setDescription(`**${args[0]}** won ${args[1]} SparkCoins.`)
  .setFooter(`${args[2]}`);
  bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
}

module.exports.help = {
  name: "log"
}

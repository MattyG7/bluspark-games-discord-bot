const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let level = 0;
  let xphave = 2;
  let xptogo = 8;
  let xpforlvl = 10;
  let wlltembed = new Discord.RichEmbed()
  .setTitle(`🎮 ${message.author.username}'s Level`)
  .setColor("#1fd1c8")
  .setDescription(`You are Level ${level} and have ${xptogo}XP to go until you level up!`)
  .setFooter(`${xphave}/${xpforlvl}XP`);
  return message.channel.send(wlltembed);
}

module.exports.help = {
  name: "level"
}

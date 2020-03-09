const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let level = 0;
  let xphave = 2;
  let xptogo = 8;
  let xpforlvl = 10;
  let picon = message.author.displayAvatarURL;
  let pembed = new Discord.RichEmbed()
  .setTitle(`⚡ ${message.author.username}'s Profile`)
  .setColor("#1fd1c8")
  .setThumbnail(`${picon}`)
  .addField("Money", `${coins}`, false)
  .addField("Level", `${level}`, true)
  .addField("XP", `${xphave}/${xpforlvl}`, true)
  .addBlankField(true)
  .addField("Discord Tag", `${message.author}`);
  return message.channel.send(pembed);
}

module.exports.help = {
  name: "profileold"
}

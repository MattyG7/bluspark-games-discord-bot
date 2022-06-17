const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let level = 0;
  let xphave = 2;
  let xptogo = 8;
  let xpforlvl = 10;
  let picon = message.author.displayAvatarURL();
  let pembed = new Discord.MessageEmbed()
  .setTitle(`⚡ ${message.author.username}'s Profile`)
  .setColor(`${message.member.displayHexColor}`)
  .setThumbnail(`${picon}`)
  .addField("Money", `${coins}`, false)
  .addField("Level", `${level}`, true)
  .addField("XP", `${xphave}/${xpforlvl}`, true)
  .addField("** **", "** **")
  .addField("Discord Tag", `${message.author}`); //#1fd1c8
  return message.channel.send(pembed);
}

module.exports.help = {
  name: "profileold"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("What have I done?!");
}

module.exports.help = {
  name: "ihateyou"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("I like you too...I think.");
}

module.exports.help = {
  name: "ilikeyou"
}

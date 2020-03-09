const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("I'm just a bot though...");
}

module.exports.help = {
  name: "iloveyou"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send("You want help? lol... Tough! :P");
}

module.exports.help = {
  name: "oldhelp"
}

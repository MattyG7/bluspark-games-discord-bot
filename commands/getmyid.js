const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.author.send(`${message.author.id}`);
  return message.channel.send("Your ID has been sent to you by DM.");
}

module.exports.help = {
  name: "getmyid"
}

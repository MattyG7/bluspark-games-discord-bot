const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (args[0] === "xmas") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎄`);
    }
    if(result === 1) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎅`);
    }
    if(result === 2) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎁`);
    }
  }
  if (args[0] === "christmas") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎄`);
    }
    if(result === 1) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎅`);
    }
    if(result === 2) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎁`);
    }
  }
}

module.exports.help = {
  name: "merry"
}

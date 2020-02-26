const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    return message.channel.send(`Bye ${message.author.username}`);
  }
  if(result === 1) {
    return message.channel.send(`Goodbye ${message.author.username}`);
  }
  if(result === 2) {
    return message.channel.send(`See ya ${message.author.username}`);
  }
  if(result === 3) {
    return message.channel.send(`See you later ${message.author.username}`);
  }
  if(result === 4) {
    return message.channel.send(`Laterz ${message.author.username}`);
  }
  if(result === 5) {
    return message.channel.send(`So long ${message.author.username}`);
  }
  if(result === 6) {
    return message.channel.send(`Till the next time ${message.author.username}`);
  }
  if(result === 7) {
    return message.channel.send(`😴 ...\n[Automatic message] Sorry, I am asleep right now. Yes, bots need sleep too.`);
  }
  if(result === 8) {
    return message.channel.send(`💤 ...\n[Automatic message] Sorry, I am asleep right now. Yes, bots need sleep too.`);
  }
}

module.exports.help = {
  name: "goodbye"
}

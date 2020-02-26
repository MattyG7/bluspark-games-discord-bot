const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    return message.channel.send(`Goodnight ${message.author.username}.`);
  }
  if(result === 1) {
    return message.channel.send(`Goodnight ${message.author.username}. I hope you have nightmares ;)`);
  }
  if(result === 2) {
    return message.channel.send(`Night ${message.author.username}.`);
  }
  if(result === 3) {
    return message.channel.send(`Night ${message.author.username}. I hope you have nightmares ;)`);
  }
  if(result === 4) {
    return message.channel.send(`Finally going to bed then are we?`);
  }
  if(result === 5) {
    return message.channel.send(`Finally going to bed then are we, ${message.author.username}?`);
  }
  if(result === 6) {
    return message.channel.send(`About time ${message.author.username}.`);
  }
  if(result === 7) {
    return message.channel.send(`😴 ...\n[Automatic message] Sorry, I am asleep right now too.`);
  }
  if(result === 8) {
    return message.channel.send(`💤 ...\n[Automatic message] Sorry, I am asleep right now too.`);
  }
}

module.exports.help = {
  name: "goodnight"
}

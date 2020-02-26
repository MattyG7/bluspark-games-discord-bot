const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["0", "1", "2", "3", "4", "5"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    return message.channel.send(`Hey ${message.author.username}`);
  }
  if(result === 1) {
    return message.channel.send(`Hi ${message.author.username}`);
  }
  if(result === 2) {
    return message.channel.send(`Hello ${message.author.username}`);
  }
  if(result === 3) {
    return message.channel.send(`Greetings ${message.author.username}`);
  }
  if(result === 4) {
    return message.channel.send(`😴 ...\n[Automatic message] Sorry, I am asleep right now. Yes, bots need sleep too.`);
  }
  if(result === 5) {
    return message.channel.send(`💤 ...\n[Automatic message] Sorry, I am asleep right now. Yes, bots need sleep too.`);
  }
}

module.exports.help = {
  name: "hi"
}

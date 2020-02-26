const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    let ndlsgficon = message.author.displayAvatarURL;
    let ndlsgftembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor(`${message.author.username} is passing around an endless amount of gifts.`, ndlsgficon)
    .setImage (`https://blusparkstudio.com/discord/endlessgift_1.gif`);
    return message.channel.send(ndlsgftembed);
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is passing around an endless amount of gifts from themself to themself...I'm confused.***`);

  let ndlsgficon = message.author.displayAvatarURL;
  let ndlsgftembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Endless Gifts 🎁", ndlsgficon)
  .setDescription(`***${rUser.user.username} is passing endless gifts to ${message.author.username}.***\nBored yet?`)
  .setImage (`https://blusparkstudio.com/discord/endlessgift_1.gif`);
  return message.channel.send(ndlsgftembed);
}

module.exports.help = {
  name: "endlessgift"
}

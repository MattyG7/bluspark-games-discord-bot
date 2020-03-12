const Discord = require("discord.js");

module.exports.run = async (bot, message, args, messageArray) => {
  if(!args[0]) return message.channel.send(`I can't say nothing, ${message.author.username}!`);
  let words = args.slice(0).join(" ");
  let syembed = new Discord.RichEmbed()
  .setColor(`#827ec8`)
  .setDescription(words);
  message.channel.send(syembed);
}

module.exports.help = {
  name: "say"
}

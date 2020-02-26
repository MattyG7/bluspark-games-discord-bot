const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0]) {
    let emjembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription("You can't pick! I'll pick one for you.");
    return message.channel.send(emjembed);
  }
  let replies = ["😃", "😊", "😞", "😉", "😁", "😂", "😄", "😅", "😆", "😌", "😍", "😎", "😐", "😘", "😢", "😖", "😒", "😪", "😳"];
  let result = Math.floor((Math.random() * replies.length));

  let emjembed = new Discord.RichEmbed()
  .setColor(`#1fd1c8`)
  .setDescription(`${replies[result]}`);
  return message.channel.send(emjembed);
}

module.exports.help = {
  name: "emoji"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(args[0]) {
    let colembed = new Discord.RichEmbed()
    .setColor("#303030")
    .setDescription("No colour for you.");
    return message.channel.send(colembed);
  }
  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let result1 = Math.floor((Math.random() * replies.length));
  let result2 = Math.floor((Math.random() * replies.length));
  let result3 = Math.floor((Math.random() * replies.length));
  let result4 = Math.floor((Math.random() * replies.length));
  let result5 = Math.floor((Math.random() * replies.length));
  let result6 = Math.floor((Math.random() * replies.length));

  let colembed = new Discord.RichEmbed()
  .setColor(`#${replies[result1]}${replies[result2]}${replies[result3]}${replies[result4]}${replies[result5]}${replies[result6]}`)
  .setDescription(`Colour: #${replies[result1]}${replies[result2]}${replies[result3]}${replies[result4]}${replies[result5]}${replies[result6]}`);
  return message.channel.send(colembed);
}

module.exports.help = {
  name: "colour"
}

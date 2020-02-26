const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.channel.send(`${message.author.username}, please ask a full question.`);

  let replies = ["**Yes**", "**No**", "**Maybe**", "**Definitely**", "**Definitely not**", "**I don't know**", "**Let me think about it...**", "**Let me think about it...**", "**Ask someone else, I'm busy right now**"];
  let result = Math.floor((Math.random() * replies.length));

  if (result === 6) {
    let bllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`*8ball*`)
    .setDescription(replies[result]);
    message.channel.send(bllembed);
    setTimeout(() => {
      let blllembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`Yes`);
      return message.channel.send(blllembed);
    }, 3000);
  }
  if (result === 7) {
    let bllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`*8ball*`)
    .setDescription(replies[result]);
    message.channel.send(bllembed);
    setTimeout(() => {
      let blllembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`No`);
      return message.channel.send(blllembed);
    }, 3000);
  }
  if (result != 6 && result != 7) {
    let bllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`*8ball*`)
    .setDescription(replies[result]);
    return message.channel.send(bllembed);
  }
}

module.exports.help = {
  name: "8ball"
}

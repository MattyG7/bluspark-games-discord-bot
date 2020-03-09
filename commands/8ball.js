const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.channel.send(`${message.author.username}, please ask a full question.`);

  let replies = ["Yes.", "My magic failed to work, try again later.", "It's better if you don't know the answer right now.", "Ask someone else, I'm busy right now.", "Probably not.", "Definitely.", "Maybe.", "No.", "Definitely not.", "Yes, definitely.", "I don't know.", "Let me think about it..."];
  let result = Math.floor((Math.random() * replies.length));

  if (result === 11) {
    let bllembed = new Discord.RichEmbed()
    .setColor("#141c29")
    .setTitle(`*8-Ball*`)
    .setDescription(`**${replies[result]}**`);
    message.channel.send(bllembed);
    let repliesMore = ["Yes.", "My magic failed to work, try again later.", "It's better if you don't know the answer right now.", "Ask someone else, I'm busy right now.", "Probably not.", "Definitely.", "Maybe.", "No.", "Definitely not.", "Yes, definitely.", "I don't know."];
    let resultMore = Math.floor((Math.random() * repliesMore.length));
    setTimeout(() => {
      let blllembed = new Discord.RichEmbed()
      .setColor("#141c29")
      .setDescription(`**${repliesMore[resultMore]}**`);
      return message.channel.send(blllembed);
    }, 3000);
  }
  if (result != 11) {
    let bllembed = new Discord.RichEmbed()
    .setColor("#141c29")
    .setTitle(`*8-Ball*`)
    .setDescription(`**${replies[result]}**`);
    return message.channel.send(bllembed);
  }
}

module.exports.help = {
  name: "8ball"
}

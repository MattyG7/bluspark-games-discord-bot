const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author, messageArray) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
  if(!args[0]) return message.channel.send("Please state an amount of messages you'd like to spam.");
  if(isNaN(args[0])) return message.channel.send("Please use a number!");
  if (message.member.user.tag === author && args[0] === "0") return message.channel.send("Please use a number...above 0!");

  if (message.member.user.tag === author) {
    let sicon = message.author.displayAvatarURL;
    let num1 = args[0];
    let num1a = num1;
    while (num1 != 0) {
      num1a = num1;
      num1 = num1 - 1;
      let spmembed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`Spam ${num1a}`);
      message.channel.send(spmembed);
      setTimeout(() => {}, 1500);
    }
  }
}

module.exports.help = {
  name: "spam"
}

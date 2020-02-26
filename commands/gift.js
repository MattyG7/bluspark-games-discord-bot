const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author, messageArray) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
    if(!args[0]) return message.channel.send("Please state a person you'd like to gift to and define an amount you'd like to gift.");
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send("🚫 You can't gift SparkCoins to yourself!");
    if(messageArray.length < 3) return message.channel.send("Please define an amount you'd like to gift.");
    if(isNaN(args[1])) return message.channel.send("Please use a number!");
    if (message.member.user.tag === author) {
      let sicon = message.author.displayAvatarURL;
      let stlembed = new Discord.RichEmbed()
      .setAuthor("Gift 🎁", sicon)
      .setColor("#1fd1c8")
      .setDescription(`${message.author.username} gifted ${args[1]} SparkCoins to ${args[0]}.`);
      message.channel.send(stlembed);
    }
}

module.exports.help = {
  name: "gift"
}

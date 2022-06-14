const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} just kicked themself. Ouch...***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1", "2", "3", "4"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let kckicon = message.author.displayAvatarURL();
        let kckembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username} across the room!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_1.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 1) {
        let kckicon = message.author.displayAvatarURL();
        let kckembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username}!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_2.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 2) {
        let kckicon = message.author.displayAvatarURL();
        let kckembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username}!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_3.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 3) {
        let kckicon = message.author.displayAvatarURL();
        let kckembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username}!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_4.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 4) {
        let kckicon = message.author.displayAvatarURL();
        let kckembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username}!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_5.gif`);
        return message.channel.send(kckembed);
      }
    }
  });
}

module.exports.help = {
  name: "kick"
}

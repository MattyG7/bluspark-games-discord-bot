const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***No! Don't hurt yourself, ${message.author.username}.***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1", "2", "3", "4", "5"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let pnchicon = message.author.displayAvatarURL();
        let pnchembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Punch 👊", pnchicon)
        .setDescription(`***${message.author.username} punched ${rUser.user.username}!***\nOuch...I bet that hurt. 😬`)
        .setImage (`https://blusparkstudio.com/discord/punch_1.gif`);
        return message.channel.send(pnchembed);
      }
      if(result === 1) {
        let pnchicon = message.author.displayAvatarURL();
        let pnchembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Punch 👊", pnchicon)
        .setDescription(`***${message.author.username} punched ${rUser.user.username}!***\nOuch...I bet that hurt. 😬`)
        .setImage (`https://blusparkstudio.com/discord/punch_2.gif`);
        return message.channel.send(pnchembed);
      }
      if(result === 2) {
        let pnchicon = message.author.displayAvatarURL();
        let pnchembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Punch 👊", pnchicon)
        .setDescription(`***${message.author.username} punched ${rUser.user.username}!***\nOuch...I bet that hurt. 😬`)
        .setImage (`https://blusparkstudio.com/discord/punch_3.gif`);
        return message.channel.send(pnchembed);
      }
      if(result === 3) {
        let pnchicon = message.author.displayAvatarURL();
        let pnchembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Punch 👊", pnchicon)
        .setDescription(`***${message.author.username} is punching ${rUser.user.username}!***\nOuch...That looks like it hurts. 😬`)
        .setImage (`https://blusparkstudio.com/discord/punch_4.gif`);
        return message.channel.send(pnchembed);
      }
      if(result === 4) {
        let pnchicon = message.author.displayAvatarURL();
        let pnchembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Punch 👊", pnchicon)
        .setDescription(`***${message.author.username} punched ${rUser.user.username}!***\nOuch...I bet that hurt. 😬`)
        .setImage (`https://blusparkstudio.com/discord/punch_5.gif`);
        return message.channel.send(pnchembed);
      }
      if(result === 5) {
        let pnchicon = message.author.displayAvatarURL();
        let pnchembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Punch 👊", pnchicon)
        .setDescription(`***${message.author.username} is punching ${rUser.user.username} very fast!***\nOuch...😬`)
        .setImage (`https://blusparkstudio.com/discord/punch_6.gif`);
        return message.channel.send(pnchembed);
      }
    }
  });
}

module.exports.help = {
  name: "punch"
}

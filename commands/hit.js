const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`Be sure to mention someone you'd like to hit. 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Don't hit yourself, ${message.author.username}!***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} is hitting ${rUser.user.username}!***\n😯`)
        .setImage (`https://blusparkstudio.com/discord/hit_1.gif`);
        return message.channel.send(htembed);
      }
      if(result === 1) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} threw a pillow at ${rUser.user.username}!***\n😆`)
        .setImage (`https://blusparkstudio.com/discord/hit_2.gif`);
        return message.channel.send(htembed);
      }
      if(result === 2) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nYouch! 😯`)
        .setImage (`https://blusparkstudio.com/discord/hit_3.gif`);
        return message.channel.send(htembed);
      }
      if(result === 3) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nOuch! 😯`)
        .setImage (`https://blusparkstudio.com/discord/hit_4.gif`);
        return message.channel.send(htembed);
      }
      if(result === 4) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nOuch! 😯`)
        .setImage (`https://blusparkstudio.com/discord/hit_5.gif`);
        return message.channel.send(htembed);
      }
      if(result === 5) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nOuch! 😯`)
        .setImage (`https://blusparkstudio.com/discord/hit_6.gif`);
        return message.channel.send(htembed);
      }
      if(result === 6) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} is hitting ${rUser.user.username}!***\nOuch! 😯`)
        .setImage (`https://blusparkstudio.com/discord/hit_7.gif`);
        return message.channel.send(htembed);
      }
      if(result === 7) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\n😯`)
        .setImage (`https://blusparkstudio.com/discord/punch_1.gif`);
        return message.channel.send(htembed);
      }
      if(result === 8) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${rUser.user.username} got plate of food in their face!***\n😯`)
        .setImage (`https://blusparkstudio.com/discord/kill_2.gif`);
        return message.channel.send(htembed);
      }
      if(result === 9) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} dropped a ball on ${rUser.user.username}!***\n😧`)
        .setImage (`https://blusparkstudio.com/discord/kill_3.gif`);
        return message.channel.send(htembed);
      }
      if(result === 10) {
        let hticon = message.author.displayAvatarURL();
        let htembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Hit 👊", hticon)
        .setDescription(`***${message.author.username} hit ${rUser.user.username} with their...not gonna say it.***\n😯`)
        .setImage (`https://blusparkstudio.com/discord/kill_4.gif`);
        return message.channel.send(htembed);
      }
    }
  });
}

module.exports.help = {
  name: "hit"
}

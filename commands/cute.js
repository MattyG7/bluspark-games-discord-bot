const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      if (!args[0]) {
        let replies = ["0", "1", "2", "3", "4"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let cticon = message.author.displayAvatarURL();
          let ctembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is feeling cute ☺️`, cticon)
          .setImage (`https://blusparkstudio.com/discord/cute_1.gif`);
          return message.channel.send(ctembed);
        }
        if(result === 1) {
          let cticon = message.author.displayAvatarURL();
          let ctembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is feeling cute ☺️`, cticon)
          .setImage (`https://blusparkstudio.com/discord/cute_2.gif`);
          return message.channel.send(ctembed);
        }
        if(result === 2) {
          let cticon = message.author.displayAvatarURL();
          let ctembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is feeling cute ☺️`, cticon)
          .setImage (`https://blusparkstudio.com/discord/cute_4.gif`);
          return message.channel.send(ctembed);
        }
        if(result === 3) {
          let cticon = message.author.displayAvatarURL();
          let ctembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is feeling cute ☺️`, cticon)
          .setImage (`https://blusparkstudio.com/discord/cute_5.gif`);
          return message.channel.send(ctembed);
        }
        if(result === 4) {
          let cticon = message.author.displayAvatarURL();
          let ctembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is feeling cute ☺️`, cticon)
          .setImage (`https://blusparkstudio.com/discord/cute_6.gif`);
          return message.channel.send(ctembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} thinks that they're cute. Well...I don't disagree! ;)***`);

      let replies = ["0", "1", "2", "3"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let cticon = message.author.displayAvatarURL();
        let ctembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Cute ☺️", cticon)
        .setDescription(`***${message.author.username} thinks ${rUser.user.username} is cute.***\nI can see why ❤️`)
        .setImage (`https://blusparkstudio.com/discord/cute_3.gif`);
        return message.channel.send(ctembed);
      }
      if(result === 1) {
        let cticon = message.author.displayAvatarURL();
        let ctembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Cute ☺️", cticon)
        .setDescription(`***${message.author.username} thinks ${rUser.user.username} is cute.***\nI can see why ❤️`)
        .setImage (`https://blusparkstudio.com/discord/cute_7.gif`);
        return message.channel.send(ctembed);
      }
      if(result === 2) {
        let cticon = message.author.displayAvatarURL();
        let ctembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Cute ☺️", cticon)
        .setDescription(`***${message.author.username} thinks ${rUser.user.username} is cute.***\nI can see why ❤️`)
        .setImage (`https://blusparkstudio.com/discord/cute_8.gif`);
        return message.channel.send(ctembed);
      }
      if(result === 3) {
        let cticon = message.author.displayAvatarURL();
        let ctembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Cute ☺️", cticon)
        .setDescription(`***${message.author.username} thinks ${rUser.user.username} is cute.***\n❤️`)
        .setImage (`https://blusparkstudio.com/discord/cute_9.gif`);
        return message.channel.send(ctembed);
      }
    }
  });
}

module.exports.help = {
  name: "cute"
}

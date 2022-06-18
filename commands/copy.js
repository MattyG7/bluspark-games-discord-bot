const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`Copy what/who? 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Can you even copy yourself, ${message.author.username}? 🤔***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1", "2", "3"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let cpyicon = message.author.displayAvatarURL();
        let cpyembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Copy 📚", cpyicon)
        .setDescription(`***${message.author.username} is copying ${rUser.user.username}.***\nCopycat!`)
        .setImage (`https://blusparkstudio.com/discord/copy_1.gif`);
        return message.channel.send(cpyembed);
      }
      if(result === 1) {
        let cpyicon = message.author.displayAvatarURL();
        let cpyembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Copy 📚", cpyicon)
        .setDescription(`***${message.author.username} is copying and pasting ${rUser.user.username}.***\nCopycat!`)
        .setImage (`https://blusparkstudio.com/discord/copy_2.gif`);
        return message.channel.send(cpyembed);
      }
      if(result === 2) {
        let cpyicon = message.author.displayAvatarURL();
        let cpyembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Copy 📚", cpyicon)
        .setDescription(`***${message.author.username} is copying ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/copy_3.gif`);
        return message.channel.send(cpyembed);
      }
      if(result === 3) {
        let cpyicon = message.author.displayAvatarURL();
        let cpyembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Copy 📚", cpyicon)
        .setDescription(`***${message.author.username} is copying ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/copy_4.gif`);
        return message.channel.send(cpyembed);
      }
    }
  });
}

module.exports.help = {
  name: "copy"
}

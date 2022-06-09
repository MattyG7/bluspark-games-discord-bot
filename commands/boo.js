const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} just scared themself. Feel free to laugh.***`);

  //GET USER COLOUR
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let booicon = message.author.displayAvatarURL();
        let booembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Boo 👻", booicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/boo_1.gif`);
        return message.channel.send(booembed);
      }
      if(result === 1) {
        let booicon = message.author.displayAvatarURL();
        let booembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Boo 👻", booicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/boo_2.gif`);
        return message.channel.send(booembed);
      }
    }
  });
}

module.exports.help = {
  name: "boo"
}

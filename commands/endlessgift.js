const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  //GET USER COLOUR
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let userColour = "";
      if (data.col === "not-set") {
        userColour = "202225";
      } else {
        userColour = data.col;
      }
      console.log("Got user's colour Successfully!");

      if(!args[0]) {
        let ndlsgficon = message.author.displayAvatarURL;
        let ndlsgftembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor(`${message.author.username} is passing around an endless amount of gifts.`, ndlsgficon)
        .setImage (`https://blusparkstudio.com/discord/endlessgift_1.gif`);
        return message.channel.send(ndlsgftembed);
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is passing around an endless amount of gifts from themself to themself...I'm confused.***`);

      let ndlsgficon = message.author.displayAvatarURL;
      let ndlsgftembed = new Discord.RichEmbed()
      .setColor(`#${userColour}`)
      .setAuthor("Endless Gifts 🎁", ndlsgficon)
      .setDescription(`***${rUser.user.username} is passing endless gifts to ${message.author.username}.***\nBored yet?`)
      .setImage (`https://blusparkstudio.com/discord/endlessgift_1.gif`);
      return message.channel.send(ndlsgftembed);
    }
  });
}

module.exports.help = {
  name: "endlessgift"
}

const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

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
      let userColour = data.col;
      if (userColour === "not-set") {
        userColour = "1fd1c8";
      }
      console.log("Got user's colour Successfully!");

      let replies = ["0", "1"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let booicon = message.author.displayAvatarURL;
        let booembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Boo 👻", booicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/boo_1.gif`);
        return message.channel.send(booembed);
      }
      if(result === 1) {
        let booicon = message.author.displayAvatarURL;
        let booembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
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

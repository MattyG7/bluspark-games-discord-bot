const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You can't do that, ${message.author.username}!***`);

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

      let replies = ["0", "1", "2", "3", "4"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let kckicon = message.author.displayAvatarURL;
        let kckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username} across the room!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_1.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 1) {
        let kckicon = message.author.displayAvatarURL;
        let kckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username}!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_2.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 2) {
        let kckicon = message.author.displayAvatarURL;
        let kckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username}!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_3.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 3) {
        let kckicon = message.author.displayAvatarURL;
        let kckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Kick 👟", kckicon)
        .setDescription(`***${message.author.username} kicked ${rUser.user.username}!***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/kick_4.gif`);
        return message.channel.send(kckembed);
      }
      if(result === 4) {
        let kckicon = message.author.displayAvatarURL;
        let kckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
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

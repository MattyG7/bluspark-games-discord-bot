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
      let userColour = "";
      if (data.col === "not-set") {
        userColour = "202225";
      } else {
        userColour = data.col;
      }
      console.log("Got user's colour Successfully!");

      let replies = ["0", "1", "2", "3"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let scricon = message.author.displayAvatarURL;
        let scrembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/boo_1.gif`);
        return message.channel.send(scrembed);
      }
      if(result === 1) {
        let scricon = message.author.displayAvatarURL;
        let scrembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/boo_2.gif`);
        return message.channel.send(scrembed);
      }
      if(result === 2) {
        let scricon = message.author.displayAvatarURL;
        let scrembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/poke_3.gif`);
        return message.channel.send(scrembed);
      }
      if(result === 3) {
        let scricon = message.author.displayAvatarURL;
        let scrembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/poke_13.gif`);
        return message.channel.send(scrembed);
      }
    }
  });
}

module.exports.help = {
  name: "scare"
}

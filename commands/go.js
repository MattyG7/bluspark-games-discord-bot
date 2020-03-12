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

      if (!args[0]) {
        let replies = ["0", "1", "2", "3", "4"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let gicon = message.author.displayAvatarURL;
          let gembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} shouted "Go!".`, gicon)
          .setImage (`https://blusparkstudio.com/discord/go_1.gif`);
          return message.channel.send(gembed);
        }
        if(result === 1) {
          let gicon = message.author.displayAvatarURL;
          let gembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is cheering "Go".`, gicon)
          .setImage (`https://blusparkstudio.com/discord/go_2.gif`);
          return message.channel.send(gembed);
        }
        if(result === 2) {
          let gicon = message.author.displayAvatarURL;
          let gembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is cheering to go.`, gicon)
          .setImage (`https://blusparkstudio.com/discord/go_3.gif`);
          return message.channel.send(gembed);
        }
        if(result === 3) {
          let gicon = message.author.displayAvatarURL;
          let gembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Go Pokemon!".`, gicon)
          .setImage (`https://blusparkstudio.com/discord/go_4.gif`);
          return message.channel.send(gembed);
        }
        if(result === 4) {
          let gicon = message.author.displayAvatarURL;
          let gembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} wants to get going!`, gicon)
          .setImage (`https://blusparkstudio.com/discord/go_5.gif`);
          return message.channel.send(gembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} needs to get going. Hurry up!***`);

      let replies = ["0", "1", "2", "3", "4"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let gicon = message.author.displayAvatarURL;
        let gembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Go 👉", gicon)
        .setDescription(`***${message.author.username} shouted "Go!" at ${rUser.user.username}.***\nI think you should go and leave them alone for a bit. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/go_1.gif`);
        return message.channel.send(gembed);
      }
      if(result === 1) {
        let gicon = message.author.displayAvatarURL;
        let gembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Go 👉", gicon)
        .setDescription(`***${message.author.username}is cheering "Go" at ${rUser.user.username}.***\nLet's go! 🚶‍`)
        .setImage (`https://blusparkstudio.com/discord/go_2.gif`);
        return message.channel.send(gembed);
      }
      if(result === 2) {
        let gicon = message.author.displayAvatarURL;
        let gembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Go 👉", gicon)
        .setDescription(`***${message.author.username} is cheering to go with ${rUser.user.username}.***\nLet's go! 🚶`)
        .setImage (`https://blusparkstudio.com/discord/go_3.gif`);
        return message.channel.send(gembed);
      }
      if(result === 3) {
        let gicon = message.author.displayAvatarURL;
        let gembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Go 👉", gicon)
        .setDescription(`***${message.author.username} threw a Pokeball with ${rUser.user.username} in.***\nGo ${rUser.user.username}, I choose you! 🐢`)
        .setImage (`https://blusparkstudio.com/discord/go_4.gif`);
        return message.channel.send(gembed);
      }
      if(result === 4) {
        let gicon = message.author.displayAvatarURL;
        let gembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Go 👉", gicon)
        .setDescription(`***${message.author.username} is dragging ${rUser.user.username} along becasue they want to go.***\nCome on, fgs! Ugh. 🙄`)
        .setImage (`https://blusparkstudio.com/discord/go_5.gif`);
        return message.channel.send(gembed);
      }
    }
  });
}

module.exports.help = {
  name: "go"
}

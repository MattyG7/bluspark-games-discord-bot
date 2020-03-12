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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_1.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 1) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_2.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 2) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_3.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 3) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_4.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 4) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_5.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 5) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} wants you all to stop posting messages.`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_6.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 6) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_7.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 7) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_8.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 8) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_9.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 9) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_10.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 10) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_11.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 11) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is like "Oh, stop it you.".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_12.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 12) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_13.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 13) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_14.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 14) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_15.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 15) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_16.gif`);
          return message.channel.send(stpembed);
        }
        if(result === 16) {
          let stpicon = message.author.displayAvatarURL;
          let stpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says "Stop!".`, stpicon)
          .setImage (`https://blusparkstudio.com/discord/stop_17.gif`);
          return message.channel.send(stpembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} told themself to stop. Stop what?***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop it or else! 💥`)
        .setImage (`https://blusparkstudio.com/discord/stop_1.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 1) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop it or else! 💥`)
        .setImage (`https://blusparkstudio.com/discord/stop_2.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 2) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_3.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 3) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_4.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 4) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_5.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 5) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} is fed up of ${rUser.user.username}'s messages.***\nStop please! ✋`)
        .setImage (`https://blusparkstudio.com/discord/stop_6.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 6) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_7.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 7) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_8.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 8) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_9.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 9) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_10.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 10) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_11.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 11) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop their flirting.***\n"Oh, stop it you." 😉`)
        .setImage (`https://blusparkstudio.com/discord/stop_12.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 12) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_13.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 13) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_14.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 14) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_15.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 15) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_16.gif`);
        return message.channel.send(stpembed);
      }
      if(result === 16) {
        let stpicon = message.author.displayAvatarURL;
        let stpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Stop 🛑", stpicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to stop.***\nStop! 😠`)
        .setImage (`https://blusparkstudio.com/discord/stop_17.gif`);
        return message.channel.send(stpembed);
      }
    }
  });
}

module.exports.help = {
  name: "stop"
}

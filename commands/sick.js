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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_1.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 1) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_2.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 2) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_3.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 3) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_4.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 4) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_5.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 5) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_6.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 6) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_7.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 7) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_8.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 8) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_9.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 9) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_10.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 10) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_11.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 11) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is not well. 😵`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_12.gif`);
          return message.channel.send(sckembed);
        }
        if(result === 12) {
          let sckicon = message.author.displayAvatarURL;
          let sckembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sick. 🤒`, sckicon)
          .setImage (`https://blusparkstudio.com/discord/ill_13.gif`);
          return message.channel.send(sckembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} made themself sick. Ew!***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_1.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 1) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_2.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 2) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_3.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 3) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_4.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 4) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_5.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 5) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_6.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 6) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_7.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 7) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_8.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 8) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_9.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 9) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_10.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 10) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_11.gif`);
        return message.channel.send(sckembed);
      }
      if(result === 11) {
        let sckicon = message.author.displayAvatarURL;
        let sckembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Sick 🤢", sckicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} sick.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_13.gif`);
        return message.channel.send(sckembed);
      }
    }
  });
}

module.exports.help = {
  name: "sick"
}

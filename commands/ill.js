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
      let userColour = data.col;
      if (userColour === "not-set") {
        userColour = "1fd1c8";
      }
      console.log("Got user's colour Successfully!");

      if (!args[0]) {
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_1.gif`);
          return message.channel.send(llembed);
        }
        if(result === 1) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_2.gif`);
          return message.channel.send(llembed);
        }
        if(result === 2) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_3.gif`);
          return message.channel.send(llembed);
        }
        if(result === 3) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_4.gif`);
          return message.channel.send(llembed);
        }
        if(result === 4) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_5.gif`);
          return message.channel.send(llembed);
        }
        if(result === 5) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_6.gif`);
          return message.channel.send(llembed);
        }
        if(result === 6) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_7.gif`);
          return message.channel.send(llembed);
        }
        if(result === 7) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_8.gif`);
          return message.channel.send(llembed);
        }
        if(result === 8) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_9.gif`);
          return message.channel.send(llembed);
        }
        if(result === 9) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_10.gif`);
          return message.channel.send(llembed);
        }
        if(result === 10) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_11.gif`);
          return message.channel.send(llembed);
        }
        if(result === 11) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is not well. 😵`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_12.gif`);
          return message.channel.send(llembed);
        }
        if(result === 12) {
          let llicon = message.author.displayAvatarURL;
          let llembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is ill. 🤒`, llicon)
          .setImage (`https://blusparkstudio.com/discord/ill_13.gif`);
          return message.channel.send(llembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} made themself ill. Get better soon!***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_1.gif`);
        return message.channel.send(llembed);
      }
      if(result === 1) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_2.gif`);
        return message.channel.send(llembed);
      }
      if(result === 2) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_3.gif`);
        return message.channel.send(llembed);
      }
      if(result === 3) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_4.gif`);
        return message.channel.send(llembed);
      }
      if(result === 4) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_5.gif`);
        return message.channel.send(llembed);
      }
      if(result === 5) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_6.gif`);
        return message.channel.send(llembed);
      }
      if(result === 6) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_7.gif`);
        return message.channel.send(llembed);
      }
      if(result === 7) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_8.gif`);
        return message.channel.send(llembed);
      }
      if(result === 8) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_9.gif`);
        return message.channel.send(llembed);
      }
      if(result === 9) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_10.gif`);
        return message.channel.send(llembed);
      }
      if(result === 10) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_11.gif`);
        return message.channel.send(llembed);
      }
      if(result === 11) {
        let llicon = message.author.displayAvatarURL;
        let llembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Ill 🤒", llicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} ill.***\nYou should've kept your distance until you were better. 😷`)
        .setImage (`https://blusparkstudio.com/discord/ill_13.gif`);
        return message.channel.send(llembed);
      }
    }
  });
}

module.exports.help = {
  name: "ill"
}

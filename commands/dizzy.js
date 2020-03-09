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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_1.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 1) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_2.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 2) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_3.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 3) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_4.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 4) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_5.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 5) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_6.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 6) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_7.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 7) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_8.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 8) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_9.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 9) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_10.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 10) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_11.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 11) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_12.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 12) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_13.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 13) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_14.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 14) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_15.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 15) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_16.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 16) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_17.gif`);
          return message.channel.send(dzzyembed);
        }
        if(result === 17) {
          let dzzyicon = message.author.displayAvatarURL;
          let dzzyembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dizzy!`, dzzyicon)
          .setImage (`https://blusparkstudio.com/discord/dizzy_18.gif`);
          return message.channel.send(dzzyembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} made themself dizzy, lolz.***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_1.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 1) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_2.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 2) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_3.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 3) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_4.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 4) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_5.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 5) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_6.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 6) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_7.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 7) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_8.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 8) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_9.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 9) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_10.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 10) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_11.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 11) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_12.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 12) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_13.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 13) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_14.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 14) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_15.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 15) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_16.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 16) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_17.gif`);
        return message.channel.send(dzzyembed);
      }
      if(result === 17) {
        let dzzyicon = message.author.displayAvatarURL;
        let dzzyembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dizzy 😵", dzzyicon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} dizzy.***\nStay still for a minute and you'll be ok again. ⏲️`)
        .setImage (`https://blusparkstudio.com/discord/dizzy_18.gif`);
        return message.channel.send(dzzyembed);
      }
    }
  });
}

module.exports.help = {
  name: "dizzy"
}

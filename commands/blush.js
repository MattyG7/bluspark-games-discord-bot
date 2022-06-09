const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      if(!args[0]) {
        let result = "0";
        let repliesCHOICE = ["0", "1"];
        let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
        if(resultCHOICE === 0) {
          let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
          result = Math.floor((Math.random() * replies.length));
        }
        if(resultCHOICE === 1) {
          let replies = ["10", "11", "12", "13", "14", "15", "16", "17", "18"];
          result = Math.floor((Math.random() * replies.length));
          result = result + 10;
        }

        if(result === 0) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_1.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 1) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_2.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 2) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_3.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 3) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_4.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 4) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_5.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 5) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_6.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 6) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_7.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 7) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_8.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 8) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_9.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 9) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_10.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 10) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_11.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 11) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_12.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 12) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_13.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 13) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_14.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 14) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_15.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 15) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_16.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 16) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_17.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 17) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_18.gif`);
          return message.channel.send(blshembed);
        }
        if(result === 18) {
          let blshicon = message.author.displayAvatarURL();
          let blshembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is blushing.`, blshicon)
          .setImage (`https://blusparkstudio.com/discord/blush_19.gif`);
          return message.channel.send(blshembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is blushing for some reason. Did you think about someone you like or something embarrassing?***`);

      let result = "0";
      let repliesCHOICE = ["0", "1"];
      let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
      if(resultCHOICE === 0) {
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        result = Math.floor((Math.random() * replies.length));
      }
      if(resultCHOICE === 1) {
        let replies = ["10", "11", "12", "13", "14", "15", "16", "17", "18"];
        result = Math.floor((Math.random() * replies.length));
        result = result + 10;
      }

      if(result === 0) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_1.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 1) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_2.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 2) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_3.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 3) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_4.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 4) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_5.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 5) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_6.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 6) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_7.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 7) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_8.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 8) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_9.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 9) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_10.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 10) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_11.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 11) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_12.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 12) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_13.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 13) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_14.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 14) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_15.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 15) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_16.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 16) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_17.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 17) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_18.gif`);
        return message.channel.send(blshembed);
      }
      if(result === 18) {
        let blshicon = message.author.displayAvatarURL();
        let blshembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Blush 😳", blshicon)
        .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
        .setImage (`https://blusparkstudio.com/discord/blush_19.gif`);
        return message.channel.send(blshembed);
      }
    }
  });
}

module.exports.help = {
  name: "blush"
}

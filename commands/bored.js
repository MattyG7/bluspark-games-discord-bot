const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_1.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 1) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_2.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 2) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_3.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 3) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_4.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 4) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_5.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 5) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_6.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 6) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_7.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 7) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_8.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 8) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_9.gif`);
          return message.channel.send(brdembed);
        }
        if(result === 9) {
          let brdicon = message.author.displayAvatarURL;
          let brdembed = new Discord.RichEmbed()
          .setColor("#1fd1c8")
          .setAuthor(`${message.author.username} is bored and wants to be amused.`, brdicon)
          .setImage (`https://blusparkstudio.com/discord/bored_10.gif`);
          return message.channel.send(brdembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(!rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is bored. Someone, talk. 💬***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_1.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 1) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_2.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 2) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_3.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 3) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_4.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 4) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_5.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 5) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_6.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 6) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_7.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 7) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_8.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 8) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${rUser.user.username} is boring ${message.author.username}.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_9.gif`);
        return message.channel.send(brdembed);
      }
      if(result === 9) {
        let brdicon = message.author.displayAvatarURL;
        let brdembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setAuthor("Bored 😴", brdicon)
        .setDescription(`***${message.author.username} wants ${rUser.user.username} to amuse them.***\n💤`)
        .setImage (`https://blusparkstudio.com/discord/bored_10.gif`);
        return message.channel.send(brdembed);
      }
    }
  });
}

module.exports.help = {
  name: "bored"
}

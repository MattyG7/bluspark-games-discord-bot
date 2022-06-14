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
      if (!args[0]) {
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that very funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_1.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 1) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that quite funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_2.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 2) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_3.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 3) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_4.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 4) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that pretty funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_5.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 5) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is doing an evil laugh...`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_6.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 6) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_7.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 7) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_8.gif`);
          return message.channel.send(lghembed);
        }
        if(result === 8) {
          let lghicon = message.author.displayAvatarURL();
          let lghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} finds that funny!`, lghicon)
          .setImage (`https://blusparkstudio.com/discord/laugh_9.gif`);
          return message.channel.send(lghembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is laughing at themself...***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_1.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 1) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_2.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 2) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_3.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 3) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_4.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 4) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_5.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 5) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_6.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 6) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_7.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 7) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_8.gif`);
        return message.channel.send(lghembed);
      }
      if(result === 8) {
        let lghicon = message.author.displayAvatarURL();
        let lghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Laugh 😂", lghicon)
        .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
        .setImage (`https://blusparkstudio.com/discord/laugh_9.gif`);
        return message.channel.send(lghembed);
      }
    }
  });
}

module.exports.help = {
  name: "laugh"
}

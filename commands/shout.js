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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_1.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 1) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_2.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 2) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_3.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 3) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_4.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 4) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_5.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 5) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_6.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 6) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_7.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 7) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_8.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 8) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_9.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 9) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_10.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 10) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_11.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 11) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_12.gif`);
          return message.channel.send(shtembed);
        }
        if(result === 12) {
          let shticon = message.author.displayAvatarURL();
          let shtembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is shouting.`, shticon)
          .setImage (`https://blusparkstudio.com/discord/shout_13.gif`);
          return message.channel.send(shtembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is shouting at themself. I wonder what they did...***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_1.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 1) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_2.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 2) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_3.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 3) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_4.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 4) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_5.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 5) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_6.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 6) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_7.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 7) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_8.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 8) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_9.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 9) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_10.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 10) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_11.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 11) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_12.gif`);
        return message.channel.send(shtembed);
      }
      if(result === 12) {
        let shticon = message.author.displayAvatarURL();
        let shtembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Shout 📢", shticon)
        .setDescription(`***${message.author.username} is shouting at ${rUser.user.username}.***‍\nGlad I'm not the one being scolded. 🙈`)
        .setImage (`https://blusparkstudio.com/discord/shout_13.gif`);
        return message.channel.send(shtembed);
      }
    }
  });
}

module.exports.help = {
  name: "shout"
}

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
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_1.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 1) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_2.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 2) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_3.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 3) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_4.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 4) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_5.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 5) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_6.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 6) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_7.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 7) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_8.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 8) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_9.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 9) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_10.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 10) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_11.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 11) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_12.gif`);
          return message.channel.send(pchembed);
        }
        if(result === 12) {
          let pchicon = message.author.displayAvatarURL;
          let pchembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} pinched themself. Nope, you aren't dreaming.`, pchicon)
          .setImage (`https://blusparkstudio.com/discord/pinch_13.gif`);
          return message.channel.send(pchembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***You're not in a dream, ${message.author.username}.***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      let result = Math.floor((Math.random() * replies.length));
      //🤏
      if(result === 0) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_1.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 1) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_2.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 2) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_3.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 3) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_4.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 4) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_5.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 5) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_6.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 6) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_7.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 7) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_8.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 8) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_9.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 9) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_10.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 10) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_11.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 11) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_12.gif`);
        return message.channel.send(pchembed);
      }
      if(result === 12) {
        let pchicon = message.author.displayAvatarURL;
        let pchembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Pinch 👌", pchicon)
        .setDescription(`***${message.author.username} pinched ${rUser.user.username}.***\nOuchee! 😱`)
        .setImage (`https://blusparkstudio.com/discord/pinch_13.gif`);
        return message.channel.send(pchembed);
      }
    }
  });
}

module.exports.help = {
  name: "pinch"
}

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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_1.gif`);
          return message.channel.send(etembed);
        }
        if(result === 1) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_2.gif`);
          return message.channel.send(etembed);
        }
        if(result === 2) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_3.gif`);
          return message.channel.send(etembed);
        }
        if(result === 3) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_4.gif`);
          return message.channel.send(etembed);
        }
        if(result === 4) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_5.gif`);
          return message.channel.send(etembed);
        }
        if(result === 5) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_6.gif`);
          return message.channel.send(etembed);
        }
        if(result === 6) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_7.gif`);
          return message.channel.send(etembed);
        }
        if(result === 7) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_8.gif`);
          return message.channel.send(etembed);
        }
        if(result === 8) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_9.gif`);
          return message.channel.send(etembed);
        }
        if(result === 9) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is eating.`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_10.gif`);
          return message.channel.send(etembed);
        }
        if(result === 10) {
          let eticon = message.author.displayAvatarURL;
          let etembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} tried to cook something to eat...`, eticon)
          .setImage (`https://blusparkstudio.com/discord/eat_11.gif`);
          return message.channel.send(etembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***How do you taste, ${message.author.username}?***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_1.gif`);
        return message.channel.send(etembed);
      }
      if(result === 1) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_2.gif`);
        return message.channel.send(etembed);
      }
      if(result === 2) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_3.gif`);
        return message.channel.send(etembed);
      }
      if(result === 3) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_4.gif`);
        return message.channel.send(etembed);
      }
      if(result === 4) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_5.gif`);
        return message.channel.send(etembed);
      }
      if(result === 5) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_6.gif`);
        return message.channel.send(etembed);
      }
      if(result === 6) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_7.gif`);
        return message.channel.send(etembed);
      }
      if(result === 7) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_8.gif`);
        return message.channel.send(etembed);
      }
      if(result === 8) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_9.gif`);
        return message.channel.send(etembed);
      }
      if(result === 9) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_10.gif`);
        return message.channel.send(etembed);
      }
      if(result === 10) {
        let eticon = message.author.displayAvatarURL;
        let etembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Eat 🍴", eticon)
        .setDescription(`***${message.author.username} tried to cook wiht ${rUser.user.username}.***\n😦`)
        .setImage (`https://blusparkstudio.com/discord/eat_11.gif`);
        return message.channel.send(etembed);
      }
    }
  });
}

module.exports.help = {
  name: "eat"
}

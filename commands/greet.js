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
        let replies = ["0", "1", "2", "3", "4", "5"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let grticon = message.author.displayAvatarURL;
          let grtembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says hello.`, grticon)
          .setImage (`https://blusparkstudio.com/discord/greet_1.gif`);
          return message.channel.send(grtembed);
        }
        if(result === 1) {
          let grticon = message.author.displayAvatarURL;
          let grtembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says hello.`, grticon)
          .setImage (`https://blusparkstudio.com/discord/greet_2.gif`);
          return message.channel.send(grtembed);
        }
        if(result === 2) {
          let grticon = message.author.displayAvatarURL;
          let grtembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says hello.`, grticon)
          .setImage (`https://blusparkstudio.com/discord/greet_3.gif`);
          return message.channel.send(grtembed);
        }
        if(result === 3) {
          let grticon = message.author.displayAvatarURL;
          let grtembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says hello.`, grticon)
          .setImage (`https://blusparkstudio.com/discord/greet_4.gif`);
          return message.channel.send(grtembed);
        }
        if(result === 4) {
          let grticon = message.author.displayAvatarURL;
          let grtembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says hello.`, grticon)
          .setImage (`https://blusparkstudio.com/discord/greet_5.gif`);
          return message.channel.send(grtembed);
        }
        if(result === 5) {
          let grticon = message.author.displayAvatarURL;
          let grtembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} says hello.`, grticon)
          .setImage (`https://blusparkstudio.com/discord/greet_6.gif`);
          return message.channel.send(grtembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***Aww. Are you on your own, ${message.author.username}?***`);

      let replies = ["0", "1", "2", "3", "4", "5"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let grticon = message.author.displayAvatarURL;
        let grtembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Greet 👋", grticon)
        .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
        .setImage (`https://blusparkstudio.com/discord/greet_1.gif`);
        return message.channel.send(grtembed);
      }
      if(result === 1) {
        let grticon = message.author.displayAvatarURL;
        let grtembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Greet 👋", grticon)
        .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
        .setImage (`https://blusparkstudio.com/discord/greet_2.gif`);
        return message.channel.send(grtembed);
      }
      if(result === 2) {
        let grticon = message.author.displayAvatarURL;
        let grtembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Greet 👋", grticon)
        .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
        .setImage (`https://blusparkstudio.com/discord/greet_3.gif`);
        return message.channel.send(grtembed);
      }
      if(result === 3) {
        let grticon = message.author.displayAvatarURL;
        let grtembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Greet 👋", grticon)
        .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
        .setImage (`https://blusparkstudio.com/discord/greet_4.gif`);
        return message.channel.send(grtembed);
      }
      if(result === 4) {
        let grticon = message.author.displayAvatarURL;
        let grtembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Greet 👋", grticon)
        .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
        .setImage (`https://blusparkstudio.com/discord/greet_5.gif`);
        return message.channel.send(grtembed);
      }
      if(result === 5) {
        let grticon = message.author.displayAvatarURL;
        let grtembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Greet 👋", grticon)
        .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
        .setImage (`https://blusparkstudio.com/discord/greet_6.gif`);
        return message.channel.send(grtembed);
      }
    }
  });
}

module.exports.help = {
  name: "greet"
}

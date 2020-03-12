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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_1.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 1) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_2.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 2) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_3.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 3) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_4.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 4) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_5.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 5) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_6.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 6) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_7.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 7) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_8.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 8) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_9.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 9) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_10.gif`);
          return message.channel.send(insltembed);
        }
        if(result === 10) {
          let inslticon = message.author.displayAvatarURL;
          let insltembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} got insulted!`, inslticon)
          .setImage (`https://blusparkstudio.com/discord/insult_11.gif`);
          return message.channel.send(insltembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(!rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} insulted themself. You're not the only one who does that, don't worry.***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_1.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 1) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_2.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 2) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_4.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 3) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_5.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 4) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_6.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 5) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_7.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 6) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_8.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 7) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_10.gif`);
        return message.channel.send(insltembed);
      }
      if(result === 8) {
        let inslticon = message.author.displayAvatarURL;
        let insltembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Insult 😝", inslticon)
        .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
        .setImage (`https://blusparkstudio.com/discord/insult_11.gif`);
        return message.channel.send(insltembed);
      }
    }
  });
}

module.exports.help = {
  name: "insult"
}

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
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_1.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 1) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_2.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 2) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing...with guns?!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_3.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 3) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_4.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 4) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_5.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 5) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_6.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 6) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_7.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 7) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_8.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 8) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is quite a cute dancer!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_9.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 9) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is quite a cute dancer!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_10.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 10) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_11.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 11) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_12.gif`);
          return message.channel.send(dncembed);
        }
        if(result === 12) {
          let dncicon = message.author.displayAvatarURL;
          let dncembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is dancing!`, dncicon)
          .setImage (`https://blusparkstudio.com/discord/dance_13.gif`);
          return message.channel.send(dncembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is laughing at themself. Everyone, back away slowly...***`);

      let replies = ["0", "1", "2", "3", "4", "5"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let dncicon = message.author.displayAvatarURL;
        let dncembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dance 💃", dncicon)
        .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
        .setImage (`https://blusparkstudio.com/discord/dance_14.gif`);
        return message.channel.send(dncembed);
      }
      if(result === 1) {
        let dncicon = message.author.displayAvatarURL;
        let dncembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dance 💃", dncicon)
        .setDescription(`***${message.author.username} is caramell dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
        .setImage (`https://blusparkstudio.com/discord/dance_15.gif`);
        return message.channel.send(dncembed);
      }
      if(result === 2) {
        let dncicon = message.author.displayAvatarURL;
        let dncembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dance 💃", dncicon)
        .setDescription(`***${message.author.username} is caramell dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
        .setImage (`https://blusparkstudio.com/discord/dance_16.gif`);
        return message.channel.send(dncembed);
      }
      if(result === 3) {
        let dncicon = message.author.displayAvatarURL;
        let dncembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dance 💃", dncicon)
        .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
        .setImage (`https://blusparkstudio.com/discord/dance_17.gif`);
        return message.channel.send(dncembed);
      }
      if(result === 4) {
        let dncicon = message.author.displayAvatarURL;
        let dncembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dance 💃", dncicon)
        .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
        .setImage (`https://blusparkstudio.com/discord/dance_18.gif`);
        return message.channel.send(dncembed);
      }
      if(result === 5) {
        let dncicon = message.author.displayAvatarURL;
        let dncembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Dance 💃", dncicon)
        .setDescription(`***${message.author.username} is dancing with ${rUser.user.username}.***\nGreat moves! 👏`)
        .setImage (`https://blusparkstudio.com/discord/dance_19.gif`);
        return message.channel.send(dncembed);
      }
    }
  });
}

module.exports.help = {
  name: "dance"
}

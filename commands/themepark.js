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

      if(!args[0]) {
        let replies = ["0", "1", "2"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let thmprkicon = message.author.displayAvatarURL;
          let thmprkembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is on a rollercoaster.`, thmprkicon)
          .setImage (`https://blusparkstudio.com/discord/themepark_1.gif`);
          return message.channel.send(thmprkembed);
        }
        if(result === 1) {
          let thmprkicon = message.author.displayAvatarURL;
          let thmprkembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is on a rollercoaster.`, thmprkicon)
          .setImage (`https://blusparkstudio.com/discord/themepark_3.gif`);
          return message.channel.send(thmprkembed);
        }
        if(result === 2) {
          let thmprkicon = message.author.displayAvatarURL;
          let thmprkembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is on a rollercoaster. Oh yeahhh!`, thmprkicon)
          .setImage (`https://blusparkstudio.com/discord/themepark_4.gif`);
          return message.channel.send(thmprkembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is on a rollercoaster. You look scared...***`);

      let replies = ["0", "1", "2"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let thmprkicon = message.author.displayAvatarURL;
        let thmprkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Theme Park 🎢", thmprkicon)
        .setDescription(`***${rUser.user.username} is on a rollercoaster with ${message.author.username}.***\nWeeeeee!`)
        .setImage (`https://blusparkstudio.com/discord/themepark_2.gif`);
        return message.channel.send(thmprkembed);
      }
      if(result === 1) {
        let thmprkicon = message.author.displayAvatarURL;
        let thmprkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Theme Park 🎢", thmprkicon)
        .setDescription(`***${rUser.user.username} is on a drop tower with ${message.author.username}.***\nAhhhhhh!`)
        .setImage (`https://blusparkstudio.com/discord/themepark_5.gif`);
        return message.channel.send(thmprkembed);
      }
      if(result === 2) {
        let thmprkicon = message.author.displayAvatarURL;
        let thmprkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Theme Park 🎢", thmprkicon)
        .setDescription(`***${rUser.user.username} is on a rollercoaster with ${message.author.username}.***\nWeeeeee!`)
        .setImage (`https://blusparkstudio.com/discord/themepark_6.gif`);
        return message.channel.send(thmprkembed);
      }
    }
  });
}

module.exports.help = {
  name: "themepark"
}

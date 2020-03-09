const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Do you find yourself tasty, ${message.author.username}?***`);

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

      let replies = ["0", "1", "2", "3", "4", "5"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let lkicon = message.author.displayAvatarURL;
        let lkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Lick 😛", lkicon)
        .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
        .setImage (`https://blusparkstudio.com/discord/lick_1.gif`);
        return message.channel.send(lkembed);
      }
      if(result === 1) {
        let lkicon = message.author.displayAvatarURL;
        let lkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Lick 😛", lkicon)
        .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
        .setImage (`https://blusparkstudio.com/discord/lick_2.gif`);
        return message.channel.send(lkembed);
      }
      if(result === 2) {
        let lkicon = message.author.displayAvatarURL;
        let lkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Lick 😛", lkicon)
        .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
        .setImage (`https://blusparkstudio.com/discord/lick_3.gif`);
        return message.channel.send(lkembed);
      }
      if(result === 3) {
        let lkicon = message.author.displayAvatarURL;
        let lkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Lick 😛", lkicon)
        .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
        .setImage (`https://blusparkstudio.com/discord/lick_4.gif`);
        return message.channel.send(lkembed);
      }
      if(result === 4) {
        let lkicon = message.author.displayAvatarURL;
        let lkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Lick 😛", lkicon)
        .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
        .setImage (`https://blusparkstudio.com/discord/lick_5.gif`);
        return message.channel.send(lkembed);
      }
      if(result === 5) {
        let lkicon = message.author.displayAvatarURL;
        let lkembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Lick 😛", lkicon)
        .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
        .setImage (`https://blusparkstudio.com/discord/lick_6.gif`);
        return message.channel.send(lkembed);
      }
    }
  });
}

module.exports.help = {
  name: "lick"
}

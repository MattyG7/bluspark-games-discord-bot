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
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_1.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 1) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_2.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 2) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_3.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 3) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_4.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 4) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_5.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 5) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_6.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 6) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_7.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 7) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is sleeping. 😴`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/sleeping_8.gif`);
          return message.channel.send(slpembed);
        }
      }
      else {
        let rUser = message.mentions.members.first();
        if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is sleeping with themself? 🤨***`);
        return message.channel.send(`You aren't sleeping with someone here are you?! 😳`);
      }
    }
  });
}

module.exports.help = {
  name: "sleeping"
}

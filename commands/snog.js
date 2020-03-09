const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username}, that just looks weird...***`);

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

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_1.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 1) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_2.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 2) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_3.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 3) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_4.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 4) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_5.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 5) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_6.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 6) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_7.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 7) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_8.gif`);
        return message.channel.send(sgembed);
      }
      if(result === 8) {
        let sgicon = message.author.displayAvatarURL;
        let sgembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Snog 💋", sgicon)
        .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
        .setImage (`https://blusparkstudio.com/discord/snog_9.gif`);
        return message.channel.send(sgembed);
      }
    }
  });
}

module.exports.help = {
  name: "snog"
}

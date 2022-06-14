const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You can't do that, ${message.author.username}!***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1", "2", "3", "4", "5"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let kllicon = message.author.displayAvatarURL();
        let kllembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kill 👼", kllicon)
        .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
        .setImage (`https://blusparkstudio.com/discord/kill_1.gif`);
        return message.channel.send(kllembed);
      }
      if(result === 1) {
        let kllicon = message.author.displayAvatarURL();
        let kllembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kill 👼", kllicon)
        .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
        .setImage (`https://blusparkstudio.com/discord/kill_2.gif`);
        return message.channel.send(kllembed);
      }
      if(result === 2) {
        let kllicon = message.author.displayAvatarURL();
        let kllembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kill 👼", kllicon)
        .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
        .setImage (`https://blusparkstudio.com/discord/kill_3.gif`);
        return message.channel.send(kllembed);
      }
      if(result === 3) {
        let kllicon = message.author.displayAvatarURL();
        let kllembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kill 👼", kllicon)
        .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
        .setImage (`https://blusparkstudio.com/discord/kill_4.gif`);
        return message.channel.send(kllembed);
      }
      if(result === 4) {
        let kllicon = message.author.displayAvatarURL();
        let kllembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kill 👼", kllicon)
        .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
        .setImage (`https://blusparkstudio.com/discord/kill_5.gif`);
        return message.channel.send(kllembed);
      }
      if(result === 5) {
        let kllicon = message.author.displayAvatarURL();
        let kllembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Kill 👼", kllicon)
        .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
        .setImage (`https://blusparkstudio.com/discord/kill_6.gif`);
        return message.channel.send(kllembed);
      }
    }
  });
}

module.exports.help = {
  name: "kill"
}

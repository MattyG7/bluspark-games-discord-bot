const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  ///if(!rUser) return message.channel.send(`You can't scare the air... 😕`);
  if(!rUser) return message.channel.send(`Your attempt to scare eveyone was not very effective... 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} just scared themself. Feel free to laugh.***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1", "2", "3"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let scricon = message.author.displayAvatarURL();
        let scrembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/boo_1.gif`);
        return message.channel.send(scrembed);
      }
      if(result === 1) {
        let scricon = message.author.displayAvatarURL();
        let scrembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/boo_2.gif`);
        return message.channel.send(scrembed);
      }
      if(result === 2) {
        let scricon = message.author.displayAvatarURL();
        let scrembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/poke_3.gif`);
        return message.channel.send(scrembed);
      }
      if(result === 3) {
        let scricon = message.author.displayAvatarURL();
        let scrembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Scare 👻", scricon)
        .setDescription(`***${message.author.username} made ${rUser.user.username} jump!***\n*[Screams]* 😱`)
        .setImage (`https://blusparkstudio.com/discord/poke_13.gif`);
        return message.channel.send(scrembed);
      }
    }
  });
}

module.exports.help = {
  name: "scare"
}

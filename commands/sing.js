const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = [
        "**All Star**\n\nSome...",
        "**All Star**\n\nSome..."];

      let result = Math.floor((Math.random() * replies.length));
      if (result === 1 || result === 0){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result]);
        let botMessage = await message.channel.send(sngembed);
        setTimeout(() => {
          let sngembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setTitle(`🎵`)
          .setDescription("**All Star**\n\nSomebody once told me the world is gonna roll me\nI ain't the sharpest tool in the shed");
          botMessage.edit(sngembed);
        }, 4000);
      }
      
    }
  });
}

module.exports.help = {
  name: "sing"
}

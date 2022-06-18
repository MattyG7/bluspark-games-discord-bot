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
        "**Random Singing To Self**\n\nLa la la laaa la la laaaa",
        "**All Star**\n\nSome..."];

      let result = Math.floor((Math.random() * replies.length));
      if (result === 1){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result]);
        const m = message.channel.send(sngembed);
        setTimeout(() => {
          msg
            .setDescription("**All Star**\n\nSomebody once told me the world is gonna roll me\nI ain't the sharpest tool in the shed");
          m.edit(msg);
        }, 4000);
        return;
      }
      
      let sngembed = new Discord.MessageEmbed()
      .setColor(`${data.col}`)
      .setTitle(`🎵`)
      .setDescription(replies[result]);
      return message.channel.send(sngembed);
    }
  });
}

module.exports.help = {
  name: "sing"
}

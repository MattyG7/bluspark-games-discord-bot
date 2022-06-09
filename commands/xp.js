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
      //console.log("Data loaded!");
      //console.log(data);
      console.log("Successfully got the user's level, currentxp and targetxp: " + data.level + " , " + data.currentxp + " , " + data.targetxp);
      //message.channel.send(data.level);
      let level = data.level;
      let xphave = data.currentxp;
      let xptogo = data.targetxp - data.currentxp;
      let xpforlvl = data.targetxp;
      let xcolour = "";
      if (data.col === "not-set") {
        xcolour = "202225";
      } else {
        xcolour = data.col;
      }
      let xicon = message.author.displayAvatarURL();
      let wlltembed = new Discord.MessageEmbed()
      .setColor(`#${xcolour}`)
      .setAuthor(`🎮 ${message.author.username}'s Level`, xicon)
      .setDescription(`You are Level ${level} and have ${xptogo}XP to go until you level up!`)
      .setFooter(`${xphave}/${xpforlvl}XP`);
      return message.channel.send(wlltembed);
    }
  });
}

module.exports.help = {
  name: "xp"
}

const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

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
      let lcolour = "";
      if (data.col === "not-set") {
        lcolour = "202225";
      } else {
        lcolour = data.col;
      }
      let licon = message.author.displayAvatarURL;
      let wlltembed = new Discord.RichEmbed()
      .setColor(`#${lcolour}`)
      .setAuthor(`🎮 ${message.author.username}'s Level`, licon)
      .setDescription(`You are Level ${level} and have ${xptogo}XP to go until you level up!`)
      .setFooter(`${xphave}/${xpforlvl}XP`);
      return message.channel.send(wlltembed);
    }
  });
}

module.exports.help = {
  name: "lvl"
}

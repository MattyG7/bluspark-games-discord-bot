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
      console.log("Successfully got the user's SparkCoin amount: " + data.sparkcoins);
      let coins = data.sparkcoins;
      let wicon = message.author.displayAvatarURL();
      let wlltembed = new Discord.MessageEmbed()
      .setColor(`${data.col}`)
      .setAuthor(`💳 ${message.author.username}'s Wallet`, wicon)
      .setDescription(`You have ${coins} SparkCoins.`);
      return message.channel.send(wlltembed);
    }
  });
}

module.exports.help = {
  name: "wallet"
}

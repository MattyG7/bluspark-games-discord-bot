const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let flipUser = message.author.id;
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      if (!args[0]) {
        let replies = ["Heads", "Tails"];
        let result = Math.floor((Math.random() * replies.length));

        let fflpembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`Coin Flip (no prize) 💰`)
        .setDescription(`The coin landed on **${replies[result]}**!`);
        return message.channel.send(fflpembed);
      }
      if(args[2]) return message.channel.send(`Please use the correct format: ~flip or ~flip COINSIDE SPARKCOINAMOUNT.`);
      if(args[0] && !args[1]) return message.channel.send(`Please use the correct format: ~flip or ~flip COINSIDE SPARKCOINAMOUNT.`);
      if(args[0] != "heads" && args[0] != "tails") return message.channel.send(`Please use the correct format: ~flip or ~flip COINSIDE SPARKCOINAMOUNT.`);
      if(isNaN(args[1])) return message.channel.send(`Please use a money amount.`);

      let userSparkCoins = data.sparkcoins;
      let coinSide = args[0];
      let SparkCoinsBET = parseInt(args[1]);
      console.log("Successfully got the user's SparkCoin amount: " + userSparkCoins);

      if (SparkCoinsBET > userSparkCoins) {
        console.log("User CAN'T afford bet.");
        let ntenghembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setDescription(`❗ Not enough SparkCoins!`)
        .setFooter(`You have ${userSparkCoins}.`);
        return message.channel.send(ntenghembed);
      } else {
        console.log("User CAN afford bet.");
        console.log("User is betting: " + SparkCoinsBET + " SparkCoins.");
        let replies = ["heads", "tails"];
        let result = Math.floor((Math.random() * replies.length));

        if (coinSide === replies[result]) {
          let userSparkCoinsNEW = userSparkCoins + SparkCoinsBET;
          console.log(`User won ${SparkCoinsBET} SparkCoins.`);
          let sparkcoinlogmembed = new Discord.MessageEmbed()
          .setColor("#7c889c")
          .setDescription(`**${message.author.username}** won ${SparkCoinsBET} SparkCoins!`)
          .setFooter("Flip");
          bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
          let flpembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setTitle(`Coin Flip 💰`)
          .setDescription(`The coin landed on **${replies[result]}**. You won **${SparkCoinsBET} SparkCoins**!`);
          message.channel.send(flpembed);
          mongoose.model("DiscordUserData").updateOne ({userID: flipUser}, {
            sparkcoins: `${userSparkCoinsNEW}`
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log(`Successfully updated user's SparkCoins amount!`);
              console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            }
          });
          return;
        } else {
          let userSparkCoinsNEW = userSparkCoins - SparkCoinsBET;
          console.log(`User lost ${SparkCoinsBET} SparkCoins.`);
          let sparkcoinlogmembed = new Discord.MessageEmbed()
          .setColor("#7c889c")
          .setDescription(`**${message.author.username}** lost ${SparkCoinsBET} SparkCoins.`)
          .setFooter("Flip");
          bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
          let flpembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setTitle(`Coin Flip 💰`)
          .setDescription(`The coin landed on **${replies[result]}**. You lost **${SparkCoinsBET} SparkCoins**.`);
          message.channel.send(flpembed);
          mongoose.model("DiscordUserData").updateOne ({userID: flipUser}, {
            sparkcoins: `${userSparkCoinsNEW}`
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log(`Successfully updated user's SparkCoins amount!`);
              console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            }
          });
          return;
        }
      }
    }
  });
}

module.exports.help = {
  name: "flip"
}

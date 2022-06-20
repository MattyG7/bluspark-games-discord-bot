const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    mongoose.model("DiscordUserData").findOne ({
      userID: `${message.author.id}`
    }, function(error, data) {
      if (error) {
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        let replies = [`**GOAL!** You scored!`, `Missed! Better luck next time.`, `The keeper saved it! Unlucky.`, `Skied it! 😐`];
        let result = Math.floor((Math.random() * replies.length));

        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`Penalty (no prize) ⚽`)
        .setDescription(`You run up, kick the ball and...`);
        message.channel.send(fbwlembed);
        setTimeout(() => {
          let fbwllembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setDescription(replies[result]);
          return message.channel.send(fbwllembed);
        }, 3000);
      }
    });
  }
  if(args[1]) return message.channel.send(`${message.author.username}, please use the correct format: ~penalty prize.`);
  if(args[0]) {
    if(args[0] != "prize") return message.channel.send(`${message.author.username}, please use the correct format: ~penalty prize.`);
    let penaltyUser = `${message.author.id}`;
    mongoose.model("DiscordUserData").findOne ({
      userID: `${message.author.id}`
    }, function(error, data) {
      if (error) {
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        var datetime = new Date();
        var datetimeToday = datetime.toISOString().slice(0,10);
        let datelastkicked = data.lastkicked;
        if (datetimeToday === data.lastkicked) {
          return message.channel.send("You have already played this game today.");
        } else {
          let userColour = data.col;
          let userSparkCoins = data.sparkcoins;
          console.log("Successfully got the user's SparkCoin amount: " + userSparkCoins);

          console.log("Prize is 100 SparkCoins.");

          let replies = [`**GOAL!** You scored!`, `Missed! Better luck next time.`, `The keeper saved it! Unlucky.`, `Skied it! 😐`];
          let result = Math.floor((Math.random() * replies.length));

          if (result === 0) {
            let fbwlembed = new Discord.MessageEmbed()
            .setColor(`${data.col}`)
            .setTitle(`Penalty ⚽`)
            .setDescription(`You run up, kick the ball and...`);
            message.channel.send(fbwlembed);
            setTimeout(() => {
              let sparkcoinlogmembed = new Discord.MessageEmbed()
              .setColor("#7c889c")
              .setDescription(`**${message.author.username}** won 100 SparkCoins!`)
              .setFooter("Penalty");
              bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
              let fbwllembed = new Discord.MessageEmbed()
              .setColor(`${data.col}`)
              .setDescription(`${replies[result]} You won **100 SparkCoins**!`);
              message.channel.send(fbwllembed);
            }, 3000);
            let userSparkCoinsNEW = userSparkCoins + 100;
            mongoose.model("DiscordUserData").updateMany ({userID: penaltyUser}, {
              sparkcoins: `${userSparkCoinsNEW}`,
              lastkicked: `${datetimeToday}`
            }, function(error, data) {
              if (error) {
                console.log("Failed to save the data :(");
                console.log(error);
              } else {
                console.log(`Successfully updated user's SparkCoins amount and last kicked date!`);
                console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
                console.log(`- BEFORE: ${datelastkicked}. AFTER: ${datetimeToday}`);
              }
            });
          } else {
            let fbwlembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setTitle(`Penalty ⚽`)
            .setDescription(`You run up, kick the ball and...`);
            message.channel.send(fbwlembed);
            setTimeout(() => {
              let fbwllembed = new Discord.MessageEmbed()
              .setColor("#7c889c")
              .setDescription(`${replies[result]} You didn't win any SparkCoins today.`);
              return message.channel.send(fbwllembed);
            }, 3000);
            mongoose.model("DiscordUserData").updateOne ({userID: penaltyUser}, {
              lastkicked: `${datetimeToday}`
            }, function(error, data) {
              if (error) {
                console.log("Failed to save the data :(");
                console.log(error);
              } else {
                console.log(`Successfully updated user's last kicked date!`);
                console.log(`- BEFORE: ${datelastkicked}. AFTER: ${datetimeToday}`);
              }
            });
          }
        }
      }
    });
  }
}

module.exports.help = {
  name: "penalty"
}

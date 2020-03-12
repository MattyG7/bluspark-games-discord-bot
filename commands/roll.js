const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    mongoose.model("DiscordUserData").findOne ({
      userID: `${message.author.id}`
    }, function(error, data) {
      if (error) {
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        let userColour = "";
        if (data.col === "not-set") {
          userColour = "202225";
        } else {
          userColour = data.col;
        }
        console.log("Got user's colour Successfully!");

        let replies = ["1", "2", "3", "4", "5", "6"];
        let result = Math.floor((Math.random() * replies.length));

        let fbwlembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setTitle(`Dice Roll (no prize) 🎲`)
        .setDescription(`You rolled a **${replies[result]}**.`);
        return message.channel.send(fbwlembed);
      }
    });
  }
  if(args[1]) return message.channel.send(`${message.author.username}, please use the correct format: ~roll DICENUMBER.`);
  if(args[0]) {
    let diceNumber = parseInt(args[0]);
    if(diceNumber != 1 && diceNumber != 2 && diceNumber != 3 && diceNumber != 4 && diceNumber != 5 && diceNumber != 6) return message.channel.send(`${message.author.username}, please use a dice number from 1 to 6.`);
    let rollUser = `${message.author.id}`;
    mongoose.model("DiscordUserData").findOne ({
      userID: `${message.author.id}`
    }, function(error, data) {
      if (error) {
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        var datetime = new Date();
        var datetimeToday = datetime.toISOString().slice(0,10);
        let datelastrolled = data.lastrolled;
        if (datetimeToday === data.lastrolled) {
          return message.channel.send("You have already played this game today.");
        } else {
          let userColour = data.col;
          let userSparkCoins = data.sparkcoins;
          let userStreak = data.dailystreak;

          let replies = ["1", "2", "3", "4", "5", "6"];
          let result = Math.floor((Math.random() * replies.length));
          console.log(`User rolled a ${replies[result]}.`);

          if (diceNumber === replies[result]) {
            let winnings = parseInt(replies[result]) * userStreak;
            let userSparkCoinsNEW = userSparkCoins + winnings;
            console.log(`${replies[result]} x ${userStreak} (dailystreak count) = ${winnings}`);
            console.log(`User wins ${winnings} SparkCoins!`);
            console.log(`User now has ${userSparkCoinsNEW} SparkCoins.`);

            let sparkcoinlogmembed = new Discord.RichEmbed()
            .setColor("#1c9472")
            .setDescription(`**${message.author.username}** won ${winnings} SparkCoins.`)
            .setFooter("Dice Roll");
            bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
            let fbwlembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setTitle(`Dice Roll 🎲`)
            .setDescription(`You rolled a **${replies[result]}**. You guessed correctly so you win **${winnings} SparkCoins**!`);
            message.channel.send(fbwlembed);
            mongoose.model("DiscordUserData").updateMany ({userID: rollUser}, {
              sparkcoins: `${userSparkCoinsNEW}`,
              lastrolled: `${datetimeToday}`
            }, function(error, data) {
              if (error) {
                console.log("Failed to save the data :(");
                console.log(error);
              } else {
                console.log(`Successfully updated user's SparkCoins amount and last rolled date!`);
                console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
                console.log(`- BEFORE: ${datelastrolled}. AFTER: ${datetimeToday}`);
              }
            });
          } else {
            let userSparkCoinsNEW = userSparkCoins + replies[result];
            console.log(`User only wins ${replies[result]} SparkCoins!`);
            console.log(`User now has ${userSparkCoinsNEW} SparkCoins.`);

            let sparkcoinlogmembed = new Discord.RichEmbed()
            .setColor("#1c9472")
            .setDescription(`**${message.author.username}** won ${replies[result]} SparkCoins.`)
            .setFooter("Dice Roll");
            bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
            let fbwlembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setTitle(`Dice Roll 🎲`)
            .setDescription(`You rolled a **${replies[result]}**. You didn't guess correctly so you only win **${replies[result]} SparkCoins**.`);
            message.channel.send(fbwlembed);
            mongoose.model("DiscordUserData").updateMany ({userID: rollUser}, {
              sparkcoins: `${userSparkCoinsNEW}`,
              lastrolled: `${datetimeToday}`
            }, function(error, data) {
              if (error) {
                console.log("Failed to save the data :(");
                console.log(error);
              } else {
                console.log(`Successfully updated user's SparkCoins amount and last rolled date!`);
                console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
                console.log(`- BEFORE: ${datelastrolled}. AFTER: ${datetimeToday}`);
              }
            });
          }
        }
      }
    });
  }
}

module.exports.help = {
  name: "roll"
}

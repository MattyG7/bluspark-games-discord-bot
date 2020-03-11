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

        let replies = ["**0 pins**", "**1 pin**", "**2 pins**", "**3 pins**", "**4 pins**", "**5 pins**", "**6 pins**", "**7 pins**", "**8 pins**", "**9 pins**", "**10 pins**"];
        let result = Math.floor((Math.random() * replies.length));

        if (result === 0) {
          let fbwlembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setTitle(`Bowling (no prize) 🎳`)
          .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
          message.channel.send(fbwlembed);
          setTimeout(() => {
            let fbwllembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setDescription(`Knocked down ${replies[result]}. Ouch...`);
            return message.channel.send(fbwllembed);
          }, 4000);
        }
        if (result === 1 || result === 2 || result === 3) {
          let fbwlembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setTitle(`Bowling (no prize) 🎳`)
          .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
           message.channel.send(fbwlembed);
          setTimeout(() => {
            let fbwllembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setDescription(`Knocked down ${replies[result]}. Unlucky, better luck next time.`);
            return message.channel.send(fbwllembed);
          }, 4000);
        }
        if (result === 4 || result === 5 || result === 6) {
          let fbwlembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setTitle(`Bowling (no prize) 🎳`)
          .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
           message.channel.send(fbwlembed);
          setTimeout(() => {
            let fbwllembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setDescription(`Knocked down ${replies[result]}. Eh, not bad.`);
            return message.channel.send(fbwllembed);
          }, 4000);
        }
        if (result === 7 || result === 8 || result === 9) {
          let fbwlembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setTitle(`Bowling (no prize) 🎳`)
          .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
           message.channel.send(fbwlembed);
          setTimeout(() => {
            let fbwllembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setDescription(`Knocked down ${replies[result]}. Nice!`);
            return message.channel.send(fbwllembed);
          }, 4000);
        }
        if (result === 10) {
          let fbwlembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setTitle(`Bowling (no prize) 🎳`)
          .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
           message.channel.send(fbwlembed);
          setTimeout(() => {
            let fbwllembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setDescription(`Knocked down ${replies[result]}. You got a **Strike**!`);
            return message.channel.send(fbwllembed);
          }, 4000);
        }
      }
    });
  }
  if(args[1]) return message.channel.send(`${message.author.username}, please use the correct format: ~bowl 10.`);
  if(args[0]) {
    if(isNaN(args[0])) return message.channel.send(`${message.author.username}, please use a money amount.`);
    if(args[0] === "0") return message.channel.send(`You can't bet zero SparkCoins, ${message.author.username}.`);
    let bowlUser = `${message.author.id}`;
    mongoose.model("DiscordUserData").findOne ({
      userID: `${message.author.id}`
    }, function(error, data) {
      if (error) {
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        var datetime = new Date();
        var datetimeToday = datetime.toISOString().slice(0,10);
        let datelastbowled = data.lastbowled;
        if (datetimeToday === data.lastbowled) {
          return message.channel.send("You have already played this game today.");
        } else {
          let userColour = data.col;
          let userSparkCoins = data.sparkcoins;
          let SparkCoinsBET = parseInt(args[0]);
          console.log("Successfully got the user's SparkCoin amount: " + userSparkCoins);
          if (userSparkCoins > SparkCoinsBET || userSparkCoins === SparkCoinsBET) {
            console.log("User CAN afford bet.");
            console.log("User is betting: " + SparkCoinsBET + " SparkCoins.");

            let result = 11;
            let repliesCHOICE = ["0", "1", "2"];
            let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
            if(resultCHOICE === 0 || resultCHOICE === 1) {
              let replies = ["0 pins", "1 pin", "2 pins", "3 pins", "4 pins", "5 pins", "6 pins", "7 pins", "8 pins", "9 pins", "10 pins"];
              result = Math.floor((Math.random() * replies.length));
            }
            if(resultCHOICE === 2) {
              result = 0;
            }

            let betWinnings = SparkCoinsBET * result;
            console.log(`Pins knocked down: ${result}`);
            console.log(`Winnings: ${betWinnings} SparkCoins`);

            //0 PINS
            if (result === 0) {
              let userSparkCoinsNEW = userSparkCoins - SparkCoinsBET;
              console.log(`User lost ${SparkCoinsBET} SparkCoins.`);
              console.log(`User now has ${userSparkCoinsNEW} SparkCoins.`);

              let fbwlembed = new Discord.RichEmbed()
              .setColor(`#${userColour}`)
              .setTitle(`Bowling 🎳`)
              .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
              message.channel.send(fbwlembed);
              setTimeout(() => {
                let sparkcoinlogmembed = new Discord.RichEmbed()
                .setColor("#1c9472")
                .setDescription(`**${message.author.username}** lost ${SparkCoinsBET} SparkCoins.`)
                .setFooter("Bowling");
                bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
                let fbwllembed = new Discord.RichEmbed()
                .setColor(`#${userColour}`)
                .setDescription(`Knocked down **0 pins**. You lose ${SparkCoinsBET} SparkCoins.`);
                return message.channel.send(fbwllembed);
              }, 4000);
              mongoose.model("DiscordUserData").updateMany ({userID: bowlUser}, {
                sparkcoins: `${userSparkCoinsNEW}`,
                lastbowled: `${datetimeToday}`
              }, function(error, data) {
                if (error) {
                  console.log("Failed to save the data :(");
                  console.log(error);
                } else {
                  console.log(`Successfully updated user's SparkCoins amount and last bowled date!`);
                  console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
                  console.log(`- BEFORE: ${datelastbowled}. AFTER: ${datetimeToday}`);
                }
              });
            }
            //1 PIN
            if (result === 1) {
              console.log(`User didn't win or lose any SparkCoins.`);

              let fbwlembed = new Discord.RichEmbed()
              .setColor(`#${userColour}`)
              .setTitle(`Bowling 🎳`)
              .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
              message.channel.send(fbwlembed);
              setTimeout(() => {
                let fbwllembed = new Discord.RichEmbed()
                .setColor(`#${userColour}`)
                .setDescription(`Knocked down **1 pin**. You didn't win or lose any SparkCoins.`);
                return message.channel.send(fbwllembed);
              }, 4000);
            }
            //2-10 PINS
            if (result > 1) {
              let userSparkCoinsNEW = userSparkCoins + betWinnings;
              userSparkCoinsNEW = userSparkCoinsNEW - SparkCoinsBET;
              let betWinningsNEW = betWinnings - SparkCoinsBET;
              console.log(`User won ${betWinningsNEW} SparkCoins.`);
              console.log(`User now has ${userSparkCoinsNEW} SparkCoins.`);

              let fbwlembed = new Discord.RichEmbed()
              .setColor(`#${userColour}`)
              .setTitle(`Bowling 🎳`)
              .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
              message.channel.send(fbwlembed);
              setTimeout(() => {
                let sparkcoinlogmembed = new Discord.RichEmbed()
                .setColor("#1c9472")
                .setDescription(`**${message.author.username}** won ${betWinningsNEW} SparkCoins!`)
                .setFooter("Bowling");
                bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
                let fbwllembed = new Discord.RichEmbed()
                .setColor(`#${userColour}`)
                .setDescription(`Knocked down **${result} pins**. You won **${betWinningsNEW} SparkCoins**!`);
                return message.channel.send(fbwllembed);
              }, 4000);
              mongoose.model("DiscordUserData").updateMany ({userID: bowlUser}, {
                sparkcoins: `${userSparkCoinsNEW}`,
                lastbowled: `${datetimeToday}`
              }, function(error, data) {
                if (error) {
                  console.log("Failed to save the data :(");
                  console.log(error);
                } else {
                  console.log(`Successfully updated user's SparkCoins amount and last bowled date!`);
                  console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
                  console.log(`- BEFORE: ${datelastbowled}. AFTER: ${datetimeToday}`);
                }
              });
            }
          } else {
            console.log("User CAN'T afford bet.");
            let ntenghembed = new Discord.RichEmbed()
            .setColor(`#${userColour}`)
            .setDescription(`❗ Not enough SparkCoins!`)
            .setFooter(`You have ${userSparkCoins}.`);
            return message.channel.send(ntenghembed);
          }
        }
      }
    });
  }
}

module.exports.help = {
  name: "bowl"
}

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
  if(!args[1] || args[2]) return message.channel.send(`${message.author.username}, please use the correct format: ~roll 6 100.`);
  if(args[0]) {
    let diceNumber = parseInt(args[0]);
    if(diceNumber != 1 && diceNumber != 2 && diceNumber != 3 && diceNumber != 4 && diceNumber != 5 && diceNumber != 6) return message.channel.send(`${message.author.username}, please use a dice number from 1 to 6.`);
    if(isNaN(args[1])) return message.channel.send(`${message.author.username}, please use a money amount.`);
    if(args[1] === "0") return message.channel.send(`You can't bet zero SparkCoins, ${message.author.username}.`);
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
          let SparkCoinsBET = parseInt(args[1]);
          console.log("Successfully got the user's SparkCoin amount: " + userSparkCoins);
          if (userSparkCoins > SparkCoinsBET || userSparkCoins === SparkCoinsBET) {
            console.log("User CAN afford bet.");
            console.log("User is betting: " + SparkCoinsBET + " SparkCoins.");

            let replies = ["1", "2", "3", "4", "5", "6"];
            let result = Math.floor((Math.random() * replies.length));
            console.log(`User rolled a ${replies[result]}.`);

            if (diceNumber === replies[result]) {
              console.log(`User betted correctly so they win ${SparkCoinsBET} SparkCoins!`);
              let userSparkCoinsNEW = userSparkCoins + SparkCoinsBET;
              console.log(`User now has ${userSparkCoinsNEW} SparkCoins.`);
              let sparkcoinlogmembed = new Discord.RichEmbed()
              .setColor("#1c9472")
              .setDescription(`**${message.author.username}** won ${SparkCoinsBET} SparkCoins.`)
              .setFooter("Dice Roll");
              bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
              let fbwlembed = new Discord.RichEmbed()
              .setColor(`#${userColour}`)
              .setTitle(`Dice Roll 🎲`)
              .setDescription(`You rolled a **${replies[result]}**. You won **${SparkCoinsBET} SparkCoins**!`);
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
              console.log(`User did not bet correctly so they lose ${SparkCoinsBET} SparkCoins!`);
              let userSparkCoinsNEW = userSparkCoins - SparkCoinsBET;
              console.log(`User now has ${userSparkCoinsNEW} SparkCoins.`);
              let sparkcoinlogmembed = new Discord.RichEmbed()
              .setColor("#1c9472")
              .setDescription(`**${message.author.username}** lost ${SparkCoinsBET} SparkCoins.`)
              .setFooter("Dice Roll");
              bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
              let fbwlembed = new Discord.RichEmbed()
              .setColor(`#${userColour}`)
              .setTitle(`Dice Roll 🎲`)
              .setDescription(`You rolled a **${replies[result]}**. You lost **${SparkCoinsBET} SparkCoins**.`);
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
  name: "roll"
}

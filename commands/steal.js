const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args, author, messageArray) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
    if(!args[0]) return message.channel.send("Please state a person you'd like to steal from and define an amount you'd like to steal.");
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.id === message.author.id) return message.channel.send("🚫 You can't steal SparkCoins from yourself!");
    if(messageArray.length < 3) return message.channel.send("Please define an amount you'd like to steal.");
    if(isNaN(args[1])) return message.channel.send("Please use a number!");

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

        if (message.member.user.tag === author) {
          let currentSparkCoins = data.sparkcoins;
          let stolenSparkCoins = parseInt(args[1]);
          let newSparkCoins = currentSparkCoins + stolenSparkCoins;

          let sicon = message.author.displayAvatarURL;
          let stlembed = new Discord.RichEmbed()
          .setAuthor("Steal 💸", sicon)
          .setColor(`#${userColour}`)
          .setDescription(`${message.author.username} stole **${stolenSparkCoins} SparkCoins** from ${rUser.user.username}. 😜`);
          message.channel.send(stlembed);

          let sparkcoinlogmembed1 = new Discord.RichEmbed()
          .setColor("#1c9472")
          .setDescription(`**${rUser.user.username}** lost ${stolenSparkCoins} SparkCoins!`)
          .setFooter("Steal");
          bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed1);
          let sparkcoinlogmembed2 = new Discord.RichEmbed()
          .setColor("#1c9472")
          .setDescription(`**${message.author.username}** received ${stolenSparkCoins} SparkCoins!`)
          .setFooter("Steal");
          bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed2);


          mongoose.model("DiscordUserData").updateOne ({userID: `${message.author.id}`}, {
            sparkcoins: `${newSparkCoins}`
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log(`Successfully updated user's SparkCoins amount!`);
              console.log(`- BEFORE: ${currentSparkCoins}. AFTER: ${newSparkCoins}`);
            }
          });
          let stolenFromUser = `${rUser.id}`;
          mongoose.model("DiscordUserData").findOne ({
            userID: stolenFromUser
          }, function(error, data) {
            if (error) {
              console.log("Failed to get data :(");
              console.log(error);
            } else {
              let stolenFromuserSparkCoins = data.sparkcoins;
              let stolenFromuserSparkCoinsNEW = stolenFromuserSparkCoins - stolenSparkCoins;
              mongoose.model("DiscordUserData").updateOne ({userID: stolenFromUser}, {
                sparkcoins: `${stolenFromuserSparkCoinsNEW}`
              }, function(error, data) {
                if (error) {
                  console.log("Failed to save the data :(");
                  console.log(error);
                } else {
                  console.log(`Successfully updated other user's SparkCoins amount!`);
                  console.log(`- BEFORE: ${stolenFromuserSparkCoins}. AFTER: ${stolenFromuserSparkCoinsNEW}`);
                }
              });
            }
          });
        }
      }
    });
}

module.exports.help = {
  name: "steal"
}

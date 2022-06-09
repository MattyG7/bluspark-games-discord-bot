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
      console.log("Successfully got the user's SparkCoin amount, last daily command date and daily command streak: " + data.sparkcoins + " , " + data.dailydate + " , " + data.dailystreak);

      var datetime = new Date();
      //console.log(datetime.toISOString().slice(0,10));
      var datetimeToday = datetime.toISOString().slice(0,10);
      if (datetimeToday === data.dailydate) {
        return message.channel.send("You have already collected your SparkCoins today.");
      } else {
        let dateOnDB = data.dailydate;
        let coinsBefore = data.sparkcoins;
        let coinsNow = coinsBefore + 50;
        let streakBefore = data.dailystreak;
        let streakNow = streakBefore + 1;

        //YESTERDAY
        var todayDate = new Date();
        var yesterdayDate = new Date(todayDate.setDate(todayDate.getDate()-1));
        var yesterdayDateNEW = yesterdayDate.toISOString().slice(0,10);

        if (dateOnDB === yesterdayDateNEW) {
          //CONTINUE STREAK
          //Set SparkCoins and dailydate in DB
          mongoose.model("DiscordUserData").updateMany ({userID: message.author.id}, {
            sparkcoins: `${coinsNow}`,
            dailydate: `${datetimeToday}`,
            dailystreak: `${streakNow}`
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log("Successfully saved the data!");
              console.log(`- BEFORE: ${coinsBefore}. AFTER: ${coinsNow}`);
              console.log(`- BEFORE: ${streakBefore}. AFTER: ${streakNow}`);
              console.log("User's streak has gone up 1!");
              console.log(`- ${datetimeToday}`);
              let sparkcoinlogmembed = new Discord.MessageEmbed()
              .setColor("#7c889c")
              .setDescription(`**${message.author.username}** received their daily SparkCoins!`)
              .setFooter(streakNow + " day streak.");
              bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
              let dicon = message.author.displayAvatarURL();
              let dlyembed = new Discord.MessageEmbed()
              .setColor(`${data.col}`)
              .setAuthor("💷 Here are your daily 50 SparkCoins!", dicon)
              .setDescription(`You now have ${coinsNow} SparkCoins.`);
              message.channel.send(dlyembed);

              //If streak is divisible by 5
              let lastDigitOfNumberNUMBER = streakNow % 10;
              if (lastDigitOfNumberNUMBER === 0 || lastDigitOfNumberNUMBER === 5) {
                console.log(`Streak is divisible by 5!`);
                let coinsNowNow = coinsNow + streakNow;
                console.log(`User got a bonus ${streakNow} SparkCoins!`);
                mongoose.model("DiscordUserData").updateOne ({userID: message.author.id}, {
                  sparkcoins: `${coinsNowNow}`
                }, function(error, data) {
                  if (error) {
                    console.log("Failed to save the data :(");
                    console.log(error);
                  } else {
                    console.log("Successfully saved the data!");
                    console.log(`- BEFORE: ${coinsNow}. AFTER: ${coinsNowNow}`);
                    let sparkcoinlogmembedBNS = new Discord.MessageEmbed()
                    .setColor("#7c889c")
                    .setDescription(`**${message.author.username}** received a bonus ${streakNow} SparkCoins!`)
                    .setFooter(streakNow + " day streak bonus!");
                    bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembedBNS);
                    let dlyembedBNS = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setAuthor(`💷 Here are a bonus ${streakNow} SparkCoins!`, dicon)
                    .setDescription(`You are on a ${streakNow} day streak! You now have ${coinsNowNow} SparkCoins.`);
                    return message.channel.send(dlyembedBNS);
                  }
                });
              } else {
                console.log(`Streak is NOT divisible by 5.`);
              }
            }
          });
          //==================================
        } else {
          //RESET STREAK
          //Set SparkCoins and dailydate in DB
          mongoose.model("DiscordUserData").updateMany ({userID: message.author.id}, {
            sparkcoins: `${coinsNow}`,
            dailydate: `${datetimeToday}`,
            dailystreak: 1
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log("Successfully saved the data!");
              console.log(`- BEFORE: ${coinsBefore}. AFTER: ${coinsNow}`);
              console.log(`- BEFORE: ${streakBefore}. AFTER: 1`);
              console.log("User's streak has been reset to 1.");
              console.log(`- ${datetimeToday}`);
              let sparkcoinlogmembed = new Discord.MessageEmbed()
              .setColor("#7c889c")
              .setDescription(`**${message.author.username}** just received their daily SparkCoins!`)
              .setFooter("1 day streak.");
              bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
              let dicon = message.author.displayAvatarURL();
              let dlyembed = new Discord.MessageEmbed()
              .setColor(`${data.col}`)
              .setAuthor("💷 Here are your daily 50 SparkCoins!", dicon)
              .setDescription(`You now have ${coinsNow} SparkCoins.`);
              return message.channel.send(dlyembed);
            }
          });
          //==================================
        }
      }
    }
  });
}

module.exports.help = {
  name: "daily"
}

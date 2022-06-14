const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args, author, messageArray) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
  if(!args[0]) return message.channel.send("Please state a person you'd like to gift to and define an amount you'd like to gift.");
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send("🚫 You can't gift SparkCoins to yourself!");
  if(messageArray.length < 3) return message.channel.send("Please define an amount you'd like to gift.");
  if(isNaN(args[1])) return message.channel.send("Please use a number!");

  //mongoose.model("DiscordUserData").findOne ({
    //userID: `${message.author.id}`
    //}, function(error, data) {
      //if (error) {
        //console.log("Failed to get data :(");
        //console.log(error);
      //} else {
        //let gifterSparkCoins = data.sparkcoins;
        //console.log("Successfully got the gifter's SparkCoin amount: " + data.sparkcoins);
      //}
    //}
  //);
  mongoose.model("DiscordUserData").findOne ({
    userID: `${rUser.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      console.log("Successfully got the receiver's SparkCoin amount: " + data.sparkcoins);
      let SparkCoinsGIFT = parseInt(args[1]);
      let receiverSparkCoinsBEFORE = data.sparkcoins;
      let receiverSparkCoinsNOW = receiverSparkCoinsBEFORE + SparkCoinsGIFT;
      mongoose.model("DiscordUserData").updateOne ({userID: rUser.id}, {
        sparkcoins: `${receiverSparkCoinsNOW}`
      }, function(error, data) {
        if (error) {
          console.log("Failed to save the data :(");
          console.log(error);
        } else {
          console.log(`Successfully gifted ${SparkCoinsGIFT} SparkCoins to the receiver!`);
          console.log(`- BEFORE: ${receiverSparkCoinsBEFORE}. AFTER: ${receiverSparkCoinsNOW}`);
          //if (args[2] === "Special" || args[2] === "special") {
            //let sparkcoinlogmembed = new Discord.RichEmbed()
            //.setColor("#1c9472")
            //.setDescription(`**${rUser.username}** just received ${SparkCoinsGIFT} SparkCoins!`);
            //bot.channels.get(`681249230232223767`).send(sparkcoinlogmembed);
            //let dicon = rUser.displayAvatarURL;
            //let dlyembed = new Discord.RichEmbed()
            //.setColor("#1fd1c8")
            //.setAuthor(`🎁 ${message.author.username} gifted ${SparkCoinsGIFT} SparkCoins to ${rUser.username}!`, dicon)
            //.setDescription(`You now have ${receiverSparkCoinsNOW} SparkCoins.`);
            //return message.channel.send(dlyembed);
          //}
          if (SparkCoinsGIFT != 100 && SparkCoinsGIFT != 200 && SparkCoinsGIFT != 500 && SparkCoinsGIFT != 1000 && SparkCoinsGIFT != 1500) {
            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${rUser.user.username}** received ${SparkCoinsGIFT} SparkCoins!`)
            .setFooter(`Gift`);
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let dicon = rUser.user.displayAvatarURL();
            let dlyembed = new Discord.MessageEmbed()
            .setColor(`${data.col}`)
            .setAuthor(`🎁 ${message.author.username} gifted ${SparkCoinsGIFT} SparkCoins to ${rUser.user.username}!`, dicon)
            .setDescription(`You now have ${receiverSparkCoinsNOW} SparkCoins.`);
            return message.channel.send(dlyembed);
          }
          if (SparkCoinsGIFT === 100) {
            var months = new Array();
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";
            var dateFull = new Date();
            var monthName = months[dateFull.getMonth()];

            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${rUser.user.username}** received their monthly ${SparkCoinsGIFT} SparkCoins!`)
            .setFooter(`Supporter Spark Patron - ${monthName}`);
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let dicon = rUser.user.displayAvatarURL();
            let dlyembed = new Discord.MessageEmbed()
            .setColor(`${data.col}`)
            .setAuthor(`🎁 ${message.author.username} gifted ${SparkCoinsGIFT} SparkCoins to ${rUser.user.username}!`, dicon)
            .setDescription(`You now have ${receiverSparkCoinsNOW} SparkCoins.`);
            return message.channel.send(dlyembed);
          }
          if (SparkCoinsGIFT === 200) {
            var months = new Array();
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";
            var dateFull = new Date();
            var monthName = months[dateFull.getMonth()];

            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${rUser.user.username}** received their monthly ${SparkCoinsGIFT} SparkCoins!`)
            .setFooter(`Regular Spark Patron - ${monthName}`);
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let dicon = rUser.user.displayAvatarURL();
            let dlyembed = new Discord.MessageEmbed()
            .setColor(`${data.col}`)
            .setAuthor(`🎁 ${message.author.username} gifted ${SparkCoinsGIFT} SparkCoins to ${rUser.user.username}!`, dicon)
            .setDescription(`You now have ${receiverSparkCoinsNOW} SparkCoins.`);
            return message.channel.send(dlyembed);
          }
          if (SparkCoinsGIFT === 500) {
            var months = new Array();
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";
            var dateFull = new Date();
            var monthName = months[dateFull.getMonth()];

            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${rUser.user.username}** received their monthly ${SparkCoinsGIFT} SparkCoins!`)
            .setFooter(`Great Spark Patron - ${monthName}`);
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let dicon = rUser.user.displayAvatarURL();
            let dlyembed = new Discord.MessageEmbed()
            .setColor(`${data.col}`)
            .setAuthor(`🎁 ${message.author.username} gifted ${SparkCoinsGIFT} SparkCoins to ${rUser.user.username}!`, dicon)
            .setDescription(`You now have ${receiverSparkCoinsNOW} SparkCoins.`);
            return message.channel.send(dlyembed);
          }
          if (SparkCoinsGIFT === 1000) {
            var months = new Array();
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";
            var dateFull = new Date();
            var monthName = months[dateFull.getMonth()];

            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${rUser.user.username}** received their monthly ${SparkCoinsGIFT} SparkCoins!`)
            .setFooter(`Ultra Spark Patron - ${monthName}`);
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let dicon = rUser.user.displayAvatarURL();
            let dlyembed = new Discord.MessageEmbed()
            .setColor(`${data.col}`)
            .setAuthor(`🎁 ${message.author.username} gifted ${SparkCoinsGIFT} SparkCoins to ${rUser.user.username}!`, dicon)
            .setDescription(`You now have ${receiverSparkCoinsNOW} SparkCoins.`);
            return message.channel.send(dlyembed);
          }
          if (SparkCoinsGIFT === 1500) {
            var months = new Array();
            months[0] = "January";
            months[1] = "February";
            months[2] = "March";
            months[3] = "April";
            months[4] = "May";
            months[5] = "June";
            months[6] = "July";
            months[7] = "August";
            months[8] = "September";
            months[9] = "October";
            months[10] = "November";
            months[11] = "December";
            var dateFull = new Date();
            var monthName = months[dateFull.getMonth()];

            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${rUser.user.username}** received their monthly ${SparkCoinsGIFT} SparkCoins!`)
            .setFooter(`Legendary Spark Patron - ${monthName}`);
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let dicon = rUser.user.displayAvatarURL();
            let dlyembed = new Discord.MessageEmbed()
            .setColor(`${data.col}`)
            .setAuthor(`🎁 ${message.author.username} gifted ${SparkCoinsGIFT} SparkCoins to ${rUser.user.username}!`, dicon)
            .setDescription(`You now have ${receiverSparkCoinsNOW} SparkCoins.`);
            return message.channel.send(dlyembed);
          }
        }
      });
    }
  });
}

module.exports.help = {
  name: "gift"
}

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
      if (!args[0]) {
        let result = "0";
        let repliesCHOICE = ["0", "1", "2"];
        let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
        if(resultCHOICE === 0) {
          let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
          result = Math.floor((Math.random() * replies.length));
        }
        if(resultCHOICE === 1) {
          let replies = ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
          result = Math.floor((Math.random() * replies.length));
          result = result + 14;
        }
        if(resultCHOICE === 2) {
          let replies = ["28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42"];
          result = Math.floor((Math.random() * replies.length));
          result = result + 28;
        }

        if(result === 0) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_1.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 1) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_2.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 2) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_3.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 3) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_4.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 4) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_5.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 5) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_6.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 6) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_7.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 7) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_8.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 8) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_9.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 9) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} failed to run.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_10.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 10) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_11.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 11) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_12.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 12) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_13.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 13) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_14.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 14) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_15.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 15) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_16.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 16) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_17.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 17) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_18.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 18) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_19.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 19) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_20.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 20) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_21.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 21) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_22.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 22) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_23.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 23) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_24.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 24) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_25.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 25) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_26.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 26) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_27.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 27) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_28.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 28) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running but not getting anywhere.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_29.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 29) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_30.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 30) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_31.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 31) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_32.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 32) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_33.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 33) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_34.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 34) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_35.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 35) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_36.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 36) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_37.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 37) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_38.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 38) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_39.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 39) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_40.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 40) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_41.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 41) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_42.gif`);
          return message.channel.send(rnembed);
        }
        if(result === 42) {
          let rnicon = message.author.displayAvatarURL();
          let rnembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is running.`, rnicon)
          .setImage (`https://blusparkstudio.com/discord/run_43.gif`);
          return message.channel.send(rnembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is running away from themself... How?***`);

      let result = "0";
      let repliesCHOICE = ["0", "1", "2"];
      let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
      if(resultCHOICE === 0) {
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
        result = Math.floor((Math.random() * replies.length));
      }
      if(resultCHOICE === 1) {
        let replies = ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
        result = Math.floor((Math.random() * replies.length));
        result = result + 14;
      }
      if(resultCHOICE === 2) {
        let replies = ["28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42"];
        result = Math.floor((Math.random() * replies.length));
        result = result + 28;
      }

      if(result === 0) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***‍`)
        .setImage (`https://blusparkstudio.com/discord/run_1.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 1) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is beating ${rUser.user.username} in a race.***`)
        .setImage (`https://blusparkstudio.com/discord/run_2.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 2) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_3.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 3) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running with ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_4.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 4) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running to ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_5.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 5) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} stole ${rUser.user.username}'s tie and is running away.***`)
        .setImage (`https://blusparkstudio.com/discord/run_6.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 6) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running with ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_7.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 7) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running in ${rUser.user.username}'s high heels.***`)
        .setImage (`https://blusparkstudio.com/discord/run_8.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 8) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running towards ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_9.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 9) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} witnessed ${rUser.user.username} failing to run.***`)
        .setImage (`https://blusparkstudio.com/discord/run_10.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 10) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is telling ${rUser.user.username} to run.***`)
        .setImage (`https://blusparkstudio.com/discord/run_11.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 11) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is racing ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_12.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 12) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from something scary with ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_13.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 13) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} and ${rUser.user.username} are running away from a scary Pokemon.***`)
        .setImage (`https://blusparkstudio.com/discord/run_14.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 14) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} and ${rUser.user.username} are running away from something.***`)
        .setImage (`https://blusparkstudio.com/discord/run_15.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 15) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running towards ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_16.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 16) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running after ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_17.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 17) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} tried to run away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_18.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 18) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running happily away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_19.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 19) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_20.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 20) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running after ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_21.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 21) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}, crying.***`)
        .setImage (`https://blusparkstudio.com/discord/run_22.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 22) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}'s girlfriends'.***`)
        .setImage (`https://blusparkstudio.com/discord/run_23.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 23) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running after ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_24.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 24) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running through groups of ${rUser.user.username} clones.***`)
        .setImage (`https://blusparkstudio.com/discord/run_25.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 25) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running towards ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_26.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 26) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_27.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 27) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_28.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 28) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username} but not getting anywhere.***`)
        .setImage (`https://blusparkstudio.com/discord/run_29.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 29) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running with ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_30.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 30) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running with ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_31.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 31) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running towards ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_32.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 32) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_33.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 33) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_34.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 34) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running with ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_35.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 35) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_36.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 36) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_37.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 37) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_38.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 38) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running towards ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_39.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 39) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running with ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_40.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 40) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_41.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 41) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_42.gif`);
        return message.channel.send(rnembed);
      }
      if(result === 42) {
        let rnicon = message.author.displayAvatarURL();
        let rnembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Run 🏃‍", rnicon)
        .setDescription(`***${message.author.username} is running away from ${rUser.user.username}.***`)
        .setImage (`https://blusparkstudio.com/discord/run_43.gif`);
        return message.channel.send(rnembed);
      }
    }
  });
}

module.exports.help = {
  name: "run"
}

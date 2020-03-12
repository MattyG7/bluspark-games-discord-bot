const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    console.log(`User called their own profile.`);
    let member = message.guild.member(message.author);
    let memberRoles1 = member.roles.map(roles => `${roles.name}`).join(' ');
    let memberRoles2 = memberRoles1.split(" ");
    let memberRoles3 = memberRoles2.slice(1);
    let memberRoles4 = "";
    var number = 0;
    for (number in memberRoles3) {
      memberRoles4 = memberRoles4 + memberRoles3[number] + " ";
      console.log(`Role array - ${memberRoles3[number]}`);
      number++;
    }
    console.log(`Got user's role Successfully: ${memberRoles4}`);
    mongoose.model("DiscordUserData").findOne ({
      userID: `${message.author.id}`
    }, function(error, data) {
      if (error) {
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        let _sparkcoins = data.sparkcoins;
        let _currentxp = data.currentxp;
        let _targetxp = data.targetxp;
        let _level = data.level;
        let _dailystreak = data.dailystreak;
        let _col = "";
        if (data.col === "not-set") {
          _col = "202225";
        } else {
          _col = data.col;
        }
        let _web = data.web;
        let _yt = data.yt;
        let _tw = data.tw;
        let _lo = data.lo;
        //NO COLOUR SET
        if (_col === "not-set") {_col = "000000";}
        //ALL SET
        if (_web != "not-set" && _yt != "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt} || 🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB YT TW LO
        if (_web === "not-set" && _yt === "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true);
          return message.channel.send(pembed);
        }
        //YT TW LO
        if (_web != "not-set" && _yt === "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web}`);
          return message.channel.send(pembed);
        }
        //WEB TW LO
        if (_web === "not-set" && _yt != "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt}`);
          return message.channel.send(pembed);
        }
        //WEB YT LO
        if (_web === "not-set" && _yt === "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
        //WEB YT TW
        if (_web === "not-set" && _yt === "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB YT
        if (_web === "not-set" && _yt === "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB TW
        if (_web === "not-set" && _yt != "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB LO
        if (_web === "not-set" && _yt != "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt} || 🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
        //YT TW
        if (_web != "not-set" && _yt === "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //YT LO
        if (_web != "not-set" && _yt === "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
        //TW LO
        if (_web != "not-set" && _yt != "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt}`);
          return message.channel.send(pembed);
        }
        //WEB
        if (_web === "not-set" && _yt != "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt} || 🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //YT
        if (_web != "not-set" && _yt === "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //TW
        if (_web != "not-set" && _yt != "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //LO
        if (_web != "not-set" && _yt != "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = message.author.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${message.author.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${message.author}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt} || 🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
      }
    });
  }
  //------------------------------------------------------------------ BOT
  if (args[0]) {
    console.log(`User called someone else's profile.`);
    let userMentioned = message.mentions.members.first();
    let member = message.guild.member(userMentioned);
    let memberRoles1 = member.roles.map(roles => `${roles.name}`).join(' ');
    let memberRoles2 = memberRoles1.split(" ");
    let memberRoles3 = memberRoles2.slice(1);
    let memberRoles4 = "";
    var number = 0;
    for (number in memberRoles3) {
      memberRoles4 = memberRoles4 + memberRoles3[number] + " ";
      console.log(`Role array - ${memberRoles3[number]}`);
      number++;
    }
    console.log(`Got mentioned user's role Successfully: ${memberRoles4}`);
    mongoose.model("DiscordUserData").findOne ({
      userID: `${userMentioned.id}`
    }, function(error, data) {
      if (error) {
        message.channel.send("That user does not exist.");
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        let _sparkcoins = data.sparkcoins;
        let _currentxp = data.currentxp;
        let _targetxp = data.targetxp;
        let _level = data.level;
        let _dailystreak = data.dailystreak;
        let _col = data.col;
        let _web = data.web;
        let _yt = data.yt;
        let _tw = data.tw;
        let _lo = data.lo;
        //NO COLOUR SET
        if (_col === "not-set") {_col = "000000";}
        //ALL SET
        if (_web != "not-set" && _yt != "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt} || 🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB YT TW LO
        if (_web === "not-set" && _yt === "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true);
          return message.channel.send(pembed);
        }
        //YT TW LO
        if (_web != "not-set" && _yt === "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web}`);
          return message.channel.send(pembed);
        }
        //WEB TW LO
        if (_web === "not-set" && _yt != "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt}`);
          return message.channel.send(pembed);
        }
        //WEB YT LO
        if (_web === "not-set" && _yt === "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
        //WEB YT TW
        if (_web === "not-set" && _yt === "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB YT
        if (_web === "not-set" && _yt === "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB TW
        if (_web === "not-set" && _yt != "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //WEB LO
        if (_web === "not-set" && _yt != "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt} || 🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
        //YT TW
        if (_web != "not-set" && _yt === "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //YT LO
        if (_web != "not-set" && _yt === "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
        //TW LO
        if (_web != "not-set" && _yt != "not-set" && _tw === "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt}`);
          return message.channel.send(pembed);
        }
        //WEB
        if (_web === "not-set" && _yt != "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`📹 ${_yt} || 🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //YT
        if (_web != "not-set" && _yt === "not-set" && _tw != "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 🐦 @${_tw} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //TW
        if (_web != "not-set" && _yt != "not-set" && _tw === "not-set" && _lo != "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt} || 🌍 ${_lo}`);
          return message.channel.send(pembed);
        }
        //LO
        if (_web != "not-set" && _yt != "not-set" && _tw != "not-set" && _lo === "not-set") {
          let picon = userMentioned.user.displayAvatarURL;
          let pembed = new Discord.RichEmbed()
          .setTitle(`⚡ ${userMentioned.user.username}'s Profile`)
          .setColor(`#${_col}`)
          .setThumbnail(`${picon}`)
          .addField("SparkCoins", `${_sparkcoins}`, true)
          .addField("Level", `${_level}`, true)
          .addField("XP", `${_currentxp}/${_targetxp}`, true)
          .addField("Streak", `${_dailystreak}`, false)
          .addBlankField(false)
          .addField("Discord Tag", `${userMentioned.user}`, true)
          .addField("Server Role", `${memberRoles4}`, true)
          .setFooter(`🌐 ${_web} || 📹 ${_yt} || 🐦 @${_tw}`);
          return message.channel.send(pembed);
        }
      }
    });
  }
}

module.exports.help = {
  name: "profile"
}

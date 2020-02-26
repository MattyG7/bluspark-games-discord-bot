const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let level = 0;
  let xphave = 2;
  let xptogo = 8;
  let xpforlvl = 10;
  let col = "1fd1c8";                                                   //1
  let web = "blusparkstudio.com";                                       //2
  let yt = "youtube.com/c/masterbluspark";                              //3
  let tw = "MasterBluspark";                                            //4
  let lo = "UK";                                                        //5

  //------------------------------------------------------------------ NONE SET
  if (!args[0]) {
    let picon = message.author.displayAvatarURL;
    let pembed = new Discord.RichEmbed()
    .setTitle(`⚡ ${message.author.username}'s Profile`)
    .setColor(`#${col}`)
    .setThumbnail(`${picon}`)
    .addField("Money", `${coins}`, false)
    .addField("Level", `${level}`, true)
    .addField("XP", `${xphave}/${xpforlvl}`, true)
    .addBlankField(false)
    .addField("Discord Tag", `${message.author}`)
    .setFooter(`🌐 ${web} || 📹 ${yt} || 🐦 @${tw} || 🌍 ${lo}`);
    return message.channel.send(pembed);
  }
  //------------------------------------------------------------------ BOT
  if (args[0]) {
    let rUser = message.mentions.members.first();
    if(!rUser) return message.channel.send(`User not found! 😕`);
    if(rUser.user.username === "Bluspark Games") {
      let picon = bot.user.displayAvatarURL;
      let pembed = new Discord.RichEmbed()
      .setTitle(`⚡ Bluspark Games's Profile`)
      .setColor("#005884")
      .setThumbnail(`${picon}`)
      .addField("Money", `∞`, false)
      .addField("Level", `100`, true)
      .addField("XP", `1000/1000`, true)
      .addBlankField(false)
      .addField("Discord Tag", `Bluspark Games#1354`)
      .setFooter(`🌍 Sparkville`);
      return message.channel.send(pembed);
    }
    else {
      let picon = bot.user.displayAvatarURL;
      let pembed = new Discord.RichEmbed()
      .setTitle(`⚡ Other User's Profile`)
      .setColor("#005884")
      .setThumbnail(`${picon}`)
      .addField("Money", `0`, false)
      .addField("Level", `1`, true)
      .addField("XP", `0/100`, true)
      .addBlankField(false)
      .addField("Discord Tag", `Name#0000`)
      .setFooter(`🌍 USA`);
      return message.channel.send(pembed);
    }
  }
  //------------------------------------------------------------------ 1
  //if (args[0] === "1" && !args[1] && !args[2] && !args[3] && !args[4]) {
    //let picon = message.author.displayAvatarURL;
    //let pembed = new Discord.RichEmbed()
    //.setTitle(`⚡ ${message.author.username}'s Profile`)
    //.setColor(`#${col}`)
    //.setThumbnail(`${picon}`)
    //.addField("Money", `${coins}`, false)
    //.addField("Level", `${level}`, true)
    //.addField("XP", `${xphave}/${xpforlvl}`, true)
    //.addBlankField(false)
    //.addField("Discord Tag", `${message.author}`);
    //return message.channel.send(pembed);
  //}
}

module.exports.help = {
  name: "p"
}

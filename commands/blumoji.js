const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let replies = ["0", "1", "2", "3", "4"];
  //let result = Math.floor((Math.random() * replies.length));

  if(!args[0]) {
    let mthembed = new Discord.MessageEmbed()
    .setColor("#7c889c")
    .setTitle(`**Blumojis**`)
    //.setDescription("*Type one of the mathematical symbols below and press 'Enter'.*")
    .addField("~blumoji happy", `<:bluhappy:502494527425347605>`)
    .addField("~blumoji sad", `<:blusad:502920569604538378>`)
    .addField("~blumoji grin", `<:blugrin:502920712227651585>`)
    .addField("~blumoji mad", `<:blumad:502920727717216256>`)
    .addField("~blumoji sleeping / ~blumoji sleepy / ~blumoji tired", `<:blusleepy:502920766136778762>`)
    .addField("~blumoji expressionless", `<:bluexpressionless:502920783572500501>`)
    .addField("~blumoji bread", `<:blubread1:502950379491950593> / <:blubread2:502950394914275343> / <:blubread3:502950408650489896>`);
    return message.channel.send(mthembed);
  }
  if(args[0] === "happy") {
    return message.channel.send(`<:bluhappy:502494527425347605>`);
  }
  if(args[0] === "sad") {
    return message.channel.send(`<:blusad:502920569604538378>`);
  }
  if(args[0] === "grin") {
    return message.channel.send(`<:blugrin:502920712227651585>`);
  }
  if(args[0] === "mad") {
    return message.channel.send(`<:blumad:502920727717216256>`);
  }
  if(args[0] === "sleeping" || args[0] === "sleepy" || args[0] === "tired") {
    return message.channel.send(`<:blusleepy:502920766136778762>`);
  }
  if(args[0] === "expressionless") {
    return message.channel.send(`<:bluexpressionless:502920783572500501>`);
  }
  if(args[0] === "bread") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));
    if (replies[result] === "0") {
      return message.channel.send(`<:blubread1:502950379491950593>`);
    }
    if (replies[result] === "1") {
      return message.channel.send(`<:blubread2:502950394914275343>`);
    }
    if (replies[result] === "2") {
      return message.channel.send(`<:blubread3:502950408650489896>`);
    }
  }
}

module.exports.help = {
  name: "blumoji"
}

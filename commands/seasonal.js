const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0] || args[0] === "help" || args[0] === "greets" || args[0] === "greetings") {
    let ssnlembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`📅 **Seasonal Greetings**`)
    .addField("Valentine's Day", "`~happy valentines day, ~happy valentines`")
    .addField("Easter", "`~happy easter`")
    .addField("Halloween", "`~happy halloween`")
    .addField("Christmas", "`~merry christmas`")
    .addField("Birthday", "`~happy birthday`");
    return message.channel.send(ssnlembed);
  }
}

module.exports.help = {
  name: "seasonal"
}

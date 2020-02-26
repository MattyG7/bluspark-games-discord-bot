const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpxembed = new Discord.RichEmbed()
  .setDescription("**Command Examples:**")
  .setColor("#1fd1c8")
  .addField("Profile Stuff", "~profile")
  .addField("Greets", "~hello")
  .addField("Other Phrases", "~ilikeyou")
  .addField("Actions", "~hug @*INSERTNAMEHERE*")
  .addField("Emotions & Solo Actions", "~cute")
  .addField("Games", "~flip heads 20 | ~roll 6 20 (please note that the order is Dice Number and then Money Amount) | ~bowl 20 | ~penalty 20 | ~rps | ~memory, ~memory e | ~deal | ~dontgetbit")
  .addField("Fun", "~8ball is grass green | ~flip | ~roll | ~bowl | ~penalty | ~say words go here | ~blumoji happy")
  .addField("Randomising", "~sing")
  .addField("Education", "~calc, ~calc help, ~calc *NUMBER* + *NUMBER*")
  .addField("Admin Only", "~clear 2 | ~gift @*INSERTNAMEHERE* 100 | ~steal @*INSERTNAMEHERE* 100 | ~spam 2");
  return message.channel.send(helpxembed);
}

module.exports.help = {
  name: "helpx"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setDescription("**Commands:**")
  .setColor("#1fd1c8")
  .addField("Profile Stuff", "`profile, wallet, level, daily, setup`", )
  .addField("Greets", "`hello, hi, hey, goodbye, bye, goodnight, night, seasonal`")
  .addField("Other Phrases", "`ilikeyou, iloveyou, ihateyou`")
  .addField("Actions", "`bite, blush, boo, bored, brushhair, cheer, congrats, congratulations, copy, cry, cute, dance, eat, endlessgift, excited, greet, hi5, highfive, hit, hug, ill, insult, kick, kill, kiss, laugh, lick, mad, pat, pinch, poke, punch, sad, scare, scared, sick, slap, sleeping, sleepy, snog, stickouttongue, themepark, thinking, tired`")
  .addField("Emotions & Solo Actions", "`blush, bored, brushhair, cheer, cry, cute, dance, endlessgift, excited, ill, insult, laugh, mad, sad, scared, sick, sleeping, sleepy, themepark, thinking, tired`")
  //.addField("Actions", "`stop, run`")
  //.addField("Emotions", "`dizzy`")
  .addField("Games", "`flip, roll, bowl, penalty, rps, memory, deal, dontgetbit`")
  .addField("Fun", "`8ball, flip, roll, bowl, penalty, say, blumoji`")
  .addField("Randomising", "`sing, colour, emoji, anime, fortune, loli`")
  .addField("Education", "`calc`")
  .addField("Admin Only", "`clear, gift, steal, spam`")
  .addBlankField(true)
  .addField("***For examples***", "*type ~helpx*");
  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}

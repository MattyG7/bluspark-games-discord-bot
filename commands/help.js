const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setDescription("**Commands:**")
  .setColor("#1c9472")
  .addField("Profile Stuff", "`exp/xp/lvl/level, daily, m/money/w/wallet, p/profile, setup, getdate, getday, getmonth, getmyid, getmynametag, getmyrole, getmyusername`")
  .addField("Greets", "`hello/hey/hi, bye/goodbye, goodnight/night, seasonal`")
  .addField("Other Phrases", "`ihateyou, ilikeyou, iloveyou`")
  .addField("Actions", "`bite, blush, boo, bored, brushhair, cheer, congrats, congratulations, copy, cry, cute, dance, dizzy, eat, endlessgift, excited, go, greet, hi5, highfive, hit, hug, ill, insult, kick, kill, kiss, laugh, lick, mad, pat, pinch, poke, punch, run, sad, scare, scared, shout, sick, slap, sleeping, sleepy, snog, stickouttongue, stop, themepark, thinking, tired`")
  .addField("Emotions & Solo Actions", "`blush, bored, brushhair, cheer, cry, cute, dance, dizzy, eat, endlessgift, excited, go, greet, ill, insult, laugh, mad, pinch, run, sad, scared, shout, sick, slap, sleeping, sleepy, stop, themepark, thinking, tired`")
  .addField("Games (no prize)", "`bowl, deal, dontgetbit, flip, memory, penalty, roll, rps`")
  .addField("Games", "`dontgetbit, flip, rps`")
  .addField("Daily Games", "`bowl, deal, memory, penalty, roll`")
  .addField("Fun", "`8ball, blumoji, say`")
  .addField("Randomising", "`anime, colour, emoji, fortune, loli, sing`")
  .addField("Education", "`calc/calculator/maths`")
  .addField("Admin Only", "`clear, gift, spam, steal`")
  .addBlankField(true)
  .addField("***For examples***", "*type ~helpx*");
  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}

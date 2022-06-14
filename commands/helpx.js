const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpxembed = new Discord.MessageEmbed()
  .setDescription("**Command Examples:**")
  .setColor("#1c9472")
  .addField("Profile Stuff", "`~lvl`** | **`~daily`** | **`~w`** | **`~p`** | **`~setup`, `~setup lo UK`** | **`~getdate`** | **`~getday`** | **`~getmonth`** | **`~getmyid`** | **`~getmynametag`** | **`~getmyrole`** | **`~getmyusername`")
  .addField("Greets", "`~hey`** | **`~bye`** | **`~night`** | **`~seasonal`, `~happy halloween`")
  .addField("Other Phrases", "`~ilikeyou`...")
  .addField("Actions", "`~hug @NAME`...")
  .addField("Emotions & Solo Actions", "`~laugh`...")
  .addField("Games (no prize)", "`~flip`...")
  .addField("Games", "`~dontgetbit SPARKCOINAMOUNT`** | **`~flip COINSIDE SPARKCOINAMOUNT`** | **`~rps CHOICE SPARKCOINAMOUNT`")
  .addField("Daily Games", "`~bowl SPARKCOINAMOUNT`** | **`~deal low`, `~deal high`** | **`~memory`** | **`~penalty prize`** | **`~roll DICENUMBER`")
  .addField("Fun", "`~8ball should i go to bed`** | **`~blumoji`** | **`~c`** | **`~say i am a bot`")
  .addField("Randomising", "`~anime`** | **`~colour`** | **`~emoji`** | **`~fortune`** | **`~loli`** | **`~sing`")
  .addField("Education", "`~calc`")
  .addField("Admin Only", "`~clear MESSAGESAMOUNT`** | **`~gift @NAME SPARKCOINAMOUNT`** | **`~log USERNAME SPARKCOINAMOUNT GAMENAME`** | **`~spam MESSAGESAMOUNT`** | **`~steal @NAME SPARKCOINAMOUNT`")
  return message.channel.send(helpxembed);
}

module.exports.help = {
  name: "helpx"
}

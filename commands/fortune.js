const Discord = require("discord.js");

module.exports.run = async (bot, message, args, messageArray) => {
  if(!args[0]) {
    let replies = ["**Today will be a good day.**", "**Today was a good day.**", "**Today was a bad day.**", "**Your future looks bright**", "**Someone new will come along very soon**", "**This'll be a good year**", "**Things look good**", "**Try again later, I'm can't forsee your future right now**"];
    let result = Math.floor((Math.random() * replies.length));

    let frtnembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`*🔮 Fortune*`)
    .setDescription(replies[result]);
    return message.channel.send(frtnembed);
  }
  return message.channel.send(`${message.author.username}, please just say *~fortune*.`);
}

module.exports.help = {
  name: "fortune"
}

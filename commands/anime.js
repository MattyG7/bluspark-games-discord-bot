const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["Angel Beats", "Clannad + Clannad After Story", "Toradora", "Kanon", "Air", "Sword Art Online", "Charlotte", "Oreimo", "I Don't Want To Get Hurt So I'll Max Out My Defence", "Little Busters", "Kokoro Connect", "The Pet Girl of Sakurasou", "Teasing Master Takagi San"];
  let result = Math.floor((Math.random() * replies.length));

  if (result === 0) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_angelbeats.jpg");
    return message.channel.send(animembed);
  }
  if (result === 1) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_clannad.jpg");
    return message.channel.send(animembed);
  }
  if (result === 2) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_toradora.jpg");
    return message.channel.send(animembed);
  }
  if (result === 3) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_kanon.jpg");
    return message.channel.send(animembed);
  }
  if (result === 4) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_air.jpg");
    return message.channel.send(animembed);
  }
  if (result === 5) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_swordartonline.jpg");
    return message.channel.send(animembed);
  }
  if (result === 6) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_charlotte.jpg");
    return message.channel.send(animembed);
  }
  if (result === 7) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_oreimo.jpg");
    return message.channel.send(animembed);
  }
  if (result === 8) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_idontwanttogethurtsoillmaxoutmydefence.jpg");
    return message.channel.send(animembed);
  }
  if (result === 9) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_littlebusters.jpg");
    return message.channel.send(animembed);
  }
  if (result === 10) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_kokoroconnect.jpg");
    return message.channel.send(animembed);
  }
  if (result === 11) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_thepetgirlofsakurasou.jpg");
    return message.channel.send(animembed);
  }
  if (result === 12) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_thepetgirlofsakurasou.jpg");
    return message.channel.send(animembed);
  }
  if (result === 13) {
    let animembed = new Discord.RichEmbed()
    .setTitle(`📺 ${replies[result]}`)
    .setColor("#1fd1c8")
    .setImage("https://blusparkstudio.com/discord/anime_teasingmastertakagisan.png");
    return message.channel.send(animembed);
  }
}

module.exports.help = {
  name: "anime"
}

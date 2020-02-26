const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Did you just high five yourself, ${message.author.username}?***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_1.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 1) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_2.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 2) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_3.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 3) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_4.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 4) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_5.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 5) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_6.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 6) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_7.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 7) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_8.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 8) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_9.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 9) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_10.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 10) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_11.gif`);
    return message.channel.send(h5embed);
  }
  if(result === 11) {
    let h5icon = message.author.displayAvatarURL;
    let h5embed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("High Five ✋", h5icon)
    .setDescription(`***${message.author.username} high fived ${rUser.user.username}.***\n👏`)
    .setImage (`https://blusparkstudio.com/discord/hi5_12.gif`);
    return message.channel.send(h5embed);
  }
}

module.exports.help = {
  name: "highfive"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username}, that just looks weird...***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_1.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 1) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_2.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 2) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_3.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 3) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_4.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 4) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_5.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 5) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_6.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 6) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_7.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 7) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_8.gif`);
    return message.channel.send(sgembed);
  }
  if(result === 8) {
    let sgicon = message.author.displayAvatarURL;
    let sgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Snog 💋", sgicon)
    .setDescription(`***${message.author.username} snogged ${rUser.user.username}.***\nGet a room! 🙈`)
    .setImage (`https://blusparkstudio.com/discord/snog_9.gif`);
    return message.channel.send(sgembed);
  }
}

module.exports.help = {
  name: "snog"
}

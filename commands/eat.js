const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***How do you taste, ${message.author.username}?***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_1.gif`);
    return message.channel.send(etembed);
  }
  if(result === 1) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_2.gif`);
    return message.channel.send(etembed);
  }
  if(result === 2) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_3.gif`);
    return message.channel.send(etembed);
  }
  if(result === 3) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_4.gif`);
    return message.channel.send(etembed);
  }
  if(result === 4) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_5.gif`);
    return message.channel.send(etembed);
  }
  if(result === 5) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_6.gif`);
    return message.channel.send(etembed);
  }
  if(result === 6) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_7.gif`);
    return message.channel.send(etembed);
  }
  if(result === 7) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_8.gif`);
    return message.channel.send(etembed);
  }
  if(result === 8) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://blusparkstudio.com/discord/eat_9.gif`);
    return message.channel.send(etembed);
  }
}

module.exports.help = {
  name: "eat"
}

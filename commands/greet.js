const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Aww. Are you on your own, ${message.author.username}?***`);

  let replies = ["0", "1", "2", "3", "4", "5"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/greet_1.gif`);
    return message.channel.send(grtembed);
  }
  if(result === 1) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/greet_2.gif`);
    return message.channel.send(grtembed);
  }
  if(result === 2) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/greet_3.gif`);
    return message.channel.send(grtembed);
  }
  if(result === 3) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/greet_4.gif`);
    return message.channel.send(grtembed);
  }
  if(result === 4) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/greet_5.gif`);
    return message.channel.send(grtembed);
  }
  if(result === 5) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/greet_6.gif`);
    return message.channel.send(grtembed);
  }
}

module.exports.help = {
  name: "greet"
}

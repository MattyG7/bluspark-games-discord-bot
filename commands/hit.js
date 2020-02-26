const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You can't do that, ${message.author.username}!***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} is hitting ${rUser.user.username}!***\n😯`)
    .setImage (`https://blusparkstudio.com/discord/hit_1.gif`);
    return message.channel.send(htembed);
  }
  if(result === 1) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} threw a pillow at ${rUser.user.username}!***\n😆`)
    .setImage (`https://blusparkstudio.com/discord/hit_2.gif`);
    return message.channel.send(htembed);
  }
  if(result === 2) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nYouch! 😯`)
    .setImage (`https://blusparkstudio.com/discord/hit_3.gif`);
    return message.channel.send(htembed);
  }
  if(result === 3) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nOuch! 😯`)
    .setImage (`https://blusparkstudio.com/discord/hit_4.gif`);
    return message.channel.send(htembed);
  }
  if(result === 4) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nOuch! 😯`)
    .setImage (`https://blusparkstudio.com/discord/hit_5.gif`);
    return message.channel.send(htembed);
  }
  if(result === 5) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\nOuch! 😯`)
    .setImage (`https://blusparkstudio.com/discord/hit_6.gif`);
    return message.channel.send(htembed);
  }
  if(result === 6) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} hit ${rUser.user.username}!***\n😯`)
    .setImage (`https://blusparkstudio.com/discord/punch_1.gif`);
    return message.channel.send(htembed);
  }
  if(result === 7) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${rUser.user.username} got plate of food in their face!***\n😯`)
    .setImage (`https://blusparkstudio.com/discord/kill_2.gif`);
    return message.channel.send(htembed);
  }
  if(result === 8) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} dropped a ball on ${rUser.user.username}!***\n😧`)
    .setImage (`https://blusparkstudio.com/discord/kill_3.gif`);
    return message.channel.send(htembed);
  }
  if(result === 9) {
    let hticon = message.author.displayAvatarURL;
    let htembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hit 👊", hticon)
    .setDescription(`***${message.author.username} hit ${rUser.user.username} with their...not gonna say it.***\n😯`)
    .setImage (`https://blusparkstudio.com/discord/kill_4.gif`);
    return message.channel.send(htembed);
  }
}

module.exports.help = {
  name: "hit"
}

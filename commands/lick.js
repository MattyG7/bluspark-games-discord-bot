const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Do you find yourself tasty, ${message.author.username}?***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let lkicon = message.author.displayAvatarURL;
    let lkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Lick 😛", lkicon)
    .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
    .setImage (`https://blusparkstudio.com/discord/lick_1.gif`);
    return message.channel.send(lkembed);
  }
  if(result === 1) {
    let lkicon = message.author.displayAvatarURL;
    let lkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Lick 😛", lkicon)
    .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
    .setImage (`https://blusparkstudio.com/discord/lick_2.gif`);
    return message.channel.send(lkembed);
  }
  if(result === 2) {
    let lkicon = message.author.displayAvatarURL;
    let lkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Lick 😛", lkicon)
    .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
    .setImage (`https://blusparkstudio.com/discord/lick_3.gif`);
    return message.channel.send(lkembed);
  }
  if(result === 3) {
    let lkicon = message.author.displayAvatarURL;
    let lkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Lick 😛", lkicon)
    .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
    .setImage (`https://blusparkstudio.com/discord/lick_4.gif`);
    return message.channel.send(lkembed);
  }
  if(result === 4) {
    let lkicon = message.author.displayAvatarURL;
    let lkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Lick 😛", lkicon)
    .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
    .setImage (`https://blusparkstudio.com/discord/lick_5.gif`);
    return message.channel.send(lkembed);
  }
  if(result === 5) {
    let lkicon = message.author.displayAvatarURL;
    let lkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Lick 😛", lkicon)
    .setDescription(`***${message.author.username} licked ${rUser.user.username}.***\nYum. 😋`)
    .setImage (`https://blusparkstudio.com/discord/lick_6.gif`);
    return message.channel.send(lkembed);
  }
}

module.exports.help = {
  name: "lick"
}

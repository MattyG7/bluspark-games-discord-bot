const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You can't do that, ${message.author.username}!***`);

  let replies = ["0", "1", "2", "3"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`https://blusparkstudio.com/discord/kill_1.gif`);
    return message.channel.send(kllembed);
  }
  if(result === 1) {
    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`https://blusparkstudio.com/discord/kill_2.gif`);
    return message.channel.send(kllembed);
  }
  if(result === 2) {
    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`https://blusparkstudio.com/discord/kill_3.gif`);
    return message.channel.send(kllembed);
  }
  if(result === 3) {
    let kllicon = message.author.displayAvatarURL;
    let kllembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kill 👼", kllicon)
    .setDescription(`***${rUser.user.username} got wasted!***\n... 😨`)
    .setImage (`https://blusparkstudio.com/discord/kill_4.gif`);
    return message.channel.send(kllembed);
  }
}

module.exports.help = {
  name: "kill"
}

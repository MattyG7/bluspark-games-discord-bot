const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***That's kinda weird, ${message.author.username}...***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_1.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 1) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_2.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 2) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_3.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 3) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_4.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 4) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\nCheer up buddy 🙁`)
    .setImage (`https://blusparkstudio.com/discord/pat_5.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 5) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_6.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 6) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_7.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 7) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***Postman Pat.***\nProbably not what you were expecting 😂`)
    .setImage (`https://blusparkstudio.com/discord/pat_8.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 8) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_9.gif`);
    return message.channel.send(ptembed);
  }
  if(result === 9) {
    let pticon = message.author.displayAvatarURL;
    let ptembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Pat ✋", pticon)
    .setDescription(`***${message.author.username} patted ${rUser.user.username}.***\n😊`)
    .setImage (`https://blusparkstudio.com/discord/pat_10.gif`);
    return message.channel.send(ptembed);
  }
}

module.exports.help = {
  name: "pat"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} now has a sore red hand mark...***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_1.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 1) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_2.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 2) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_3.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 3) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_4.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 4) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_5.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 5) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_6.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 6) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_7.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 7) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_8.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 8) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_9.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 9) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_10.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 10) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_11.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 11) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_12.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 12) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_13.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 13) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_14.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 14) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/slap_15.gif`);
    return message.channel.send(slpembed);
  }
  if(result === 15) {
    let slpicon = message.author.displayAvatarURL;
    let slpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Slap ✋", slpicon)
    .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
    .setImage (`https://blusparkstudio.com/discord/hit_5.gif`);
    return message.channel.send(slpembed);
  }
}

module.exports.help = {
  name: "slap"
}

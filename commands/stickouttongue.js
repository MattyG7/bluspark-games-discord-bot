const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} stood infront of a mirror and stuck their tongue out at their reflection. Why?***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_1.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 1) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_2.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 2) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_3.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 3) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_4.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 4) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_5.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 5) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_6.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 6) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_7.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 7) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_8.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 8) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_9.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 9) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_10.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 10) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_11.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 11) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://blusparkstudio.com/discord/stickouttongue_12.gif`);
    return message.channel.send(tngembed);
  }
}

module.exports.help = {
  name: "stickouttongue"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Aw. Do you need a hug, ${message.author.username}?***`);

  let result = "0";
  let repliesCHOICE = ["0", "1"];
  let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
  if(resultCHOICE === 0) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    result = Math.floor((Math.random() * replies.length));
  }
  if(resultCHOICE === 1) {
    let replies = ["10", "11", "12", "13", "14", "15", "16", "17", "18"];
    result = Math.floor((Math.random() * replies.length));
  }

  if(result === 0) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_1.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 1) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_2.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 2) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_3.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 3) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_4.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 4) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_5.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 5) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_6.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 6) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_7.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 7) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_8.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 8) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_9.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 9) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_10.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 10) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_11.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 11) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_12.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 12) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_13.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 13) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_14.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 14) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} would like a warm hug from ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_15.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 15) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_16.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 16) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_17.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 17) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_18.gif`);
    return message.channel.send(hgembed);
  }
  if(result === 18) {
    let hgicon = message.author.displayAvatarURL;
    let hgembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Hug 🤗", hgicon)
    .setDescription(`***${message.author.username} hugged ${rUser.user.username}.***\nAww. ☺️`)
    .setImage (`https://blusparkstudio.com/discord/hug_19.gif`);
    return message.channel.send(hgembed);
  }
}

module.exports.help = {
  name: "hug"
}

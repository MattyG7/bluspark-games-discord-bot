const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://blusparkstudio.com/discord/loli_1.gif`);
      return message.channel.send(loliembed);
    }
    if(result === 1) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://blusparkstudio.com/discord/loli_2.gif`);
      return message.channel.send(loliembed);
    }
    if(result === 2) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://blusparkstudio.com/discord/loli_3.gif`);
      return message.channel.send(loliembed);
    }
    if(result === 3) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://blusparkstudio.com/discord/loli_4.gif`);
      return message.channel.send(loliembed);
    }
    if(result === 4) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://blusparkstudio.com/discord/loli_5.gif`);
      return message.channel.send(loliembed);
    }
    if(result === 5) {
      let loliicon = message.author.displayAvatarURL;
      let loliembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor(`A loli a day keps the doctor away`, loliicon)
      .setImage (`https://blusparkstudio.com/discord/loli_8.gif`);
      return message.channel.send(loliembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} likes lolis.***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\n❤`)
    .setImage (`https://blusparkstudio.com/discord/loli_1.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 1) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\nI dare ya to go sit with her.`)
    .setImage (`https://blusparkstudio.com/discord/loli_2.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 2) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\nNom nom. 😋`)
    .setImage (`https://blusparkstudio.com/discord/loli_3.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 3) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${message.author.username} says that ${rUser.user.username} likes lolis.***\n❤`)
    .setImage (`https://blusparkstudio.com/discord/loli_4.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 4) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://blusparkstudio.com/discord/loli_1.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 5) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://blusparkstudio.com/discord/loli_2.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 6) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://blusparkstudio.com/discord/loli_3.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 7) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli.***\n😜`)
    .setImage (`https://blusparkstudio.com/discord/loli_4.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 8) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a loli...with a whale.***\n🐋`)
    .setImage (`https://blusparkstudio.com/discord/loli_5.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 9) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a sad loli.***\n😢`)
    .setImage (`https://blusparkstudio.com/discord/loli_6.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 10) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a hungry loli.***\n🍪`)
    .setImage (`https://blusparkstudio.com/discord/loli_7.gif`);
    return message.channel.send(loliembed);
  }
  if(result === 11) {
    let loliicon = message.author.displayAvatarURL;
    let loliembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Loli 👧", loliicon)
    .setDescription(`***${rUser.user.username} is a hungry loli.***\n🍪`)
    .setImage (`https://blusparkstudio.com/discord/loli_8.gif`);
    return message.channel.send(loliembed);
  }
}

module.exports.help = {
  name: "loli"
}

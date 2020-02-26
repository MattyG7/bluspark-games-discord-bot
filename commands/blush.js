const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_1.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 1) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_2.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 2) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_3.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 3) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_4.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 4) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_5.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 5) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_6.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 6) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_7.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 7) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_8.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 8) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_9.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 9) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_10.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 10) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_11.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 11) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_12.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 12) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_13.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 13) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_14.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 14) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_16.gif`);
      return message.channel.send(blshembed);
    }
    if(result === 15) {
      let blshicon = message.author.displayAvatarURL;
      let blshembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is blushing.`, blshicon)
      .setImage (`https://blusparkstudio.com/discord/blush_17.gif`);
      return message.channel.send(blshembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is blushing for some reason. Did you think about someone you like or something embarrassing?***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_1.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 1) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_2.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 2) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_3.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 3) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_4.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 4) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_5.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 5) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_6.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 6) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_7.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 7) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_8.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 8) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_9.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 9) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_10.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 10) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_11.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 11) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_12.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 12) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_13.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 13) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_14.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 14) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_15.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 15) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_16.gif`);
    return message.channel.send(blshembed);
  }
  if(result === 16) {
    let blshicon = message.author.displayAvatarURL;
    let blshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Blush 😳", blshicon)
    .setDescription(`***${rUser.user.username} made ${message.author.username} blush.***\nLol 😏`)
    .setImage (`https://blusparkstudio.com/discord/blush_17.gif`);
    return message.channel.send(blshembed);
  }
}

module.exports.help = {
  name: "blush"
}

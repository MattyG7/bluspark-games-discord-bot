const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_1.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 1) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_2.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 2) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_3.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 3) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_4.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 4) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_5.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 5) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_6.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 6) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_7.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 7) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_8.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 8) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_9.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 9) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_10.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 10) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_11.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 11) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_12.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 12) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_13.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 13) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_14.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 14) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_15.gif`);
      return message.channel.send(trdembed);
    }
    if(result === 15) {
      let trdicon = message.author.displayAvatarURL;
      let trdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is tired. 😴`, trdicon)
      .setImage (`https://blusparkstudio.com/discord/tired_16.gif`);
      return message.channel.send(trdembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} made themself tired. 💤***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_1.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 1) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_2.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 2) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_3.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 3) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_4.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 4) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_5.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 5) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_6.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 6) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_7.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 7) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_8.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 8) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_9.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 9) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_10.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 10) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_11.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 11) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_12.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 12) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_13.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 13) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_14.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 14) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_15.gif`);
    return message.channel.send(trdembed);
  }
  if(result === 15) {
    let trdicon = message.author.displayAvatarURL;
    let trdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Tired 😴", trdicon)
    .setDescription(`***${rUser.user.username} is boring ${message.author.username} and making them feel tired.***\n💤`)
    .setImage (`https://blusparkstudio.com/discord/tired_16.gif`);
    return message.channel.send(trdembed);
  }
}

module.exports.help = {
  name: "tired"
}

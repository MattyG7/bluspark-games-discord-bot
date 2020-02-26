const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_1.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 1) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_2.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 2) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_3.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 3) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_4.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 4) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_5.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 5) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_6.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 6) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_7.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 7) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_8.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 8) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_9.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 9) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_10.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 10) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_11.gif`);
      return message.channel.send(scrdembed);
    }
    if(result === 11) {
      let scrdicon = message.author.displayAvatarURL;
      let scrdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor("Scared 👻", scrdicon)
      .setDescription(`***${rUser.author.username} is scared.***\n🙈`)
      .setImage (`https://blusparkstudio.com/discord/scared_12.gif`);
      return message.channel.send(scrdembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is scared of themself. Feel free to laugh.***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_1.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 1) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_2.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 2) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_3.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 3) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_4.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 4) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_5.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 5) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_6.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 6) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_7.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 7) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_8.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 8) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_9.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 9) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_10.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 10) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_11.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 11) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of ${rUser.user.username}!***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_12.gif`);
    return message.channel.send(scrdembed);
  }
  if(result === 12) {
    let scrdicon = message.author.displayAvatarURL;
    let scrdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Scared 👻", scrdicon)
    .setDescription(`***${message.author.username} is scared of the situation ${rUser.user.username} is in but ${rUser.user.username} is not.***\n*😱`)
    .setImage (`https://blusparkstudio.com/discord/scared_13.gif`);
    return message.channel.send(scrdembed);
  }
}

module.exports.help = {
  name: "scared"
}

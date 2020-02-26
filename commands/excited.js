const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_1.gif`);
      return message.channel.send(excembed);
    }
    if(result === 1) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_2.gif`);
      return message.channel.send(excembed);
    }
    if(result === 2) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_3.gif`);
      return message.channel.send(excembed);
    }
    if(result === 3) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_4.gif`);
      return message.channel.send(excembed);
    }
    if(result === 4) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_5.gif`);
      return message.channel.send(excembed);
    }
    if(result === 5) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_6.gif`);
      return message.channel.send(excembed);
    }
    if(result === 6) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_7.gif`);
      return message.channel.send(excembed);
    }
    if(result === 7) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_8.gif`);
      return message.channel.send(excembed);
    }
    if(result === 8) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_9.gif`);
      return message.channel.send(excembed);
    }
    if(result === 9) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://blusparkstudio.com/discord/excited_10.gif`);
      return message.channel.send(excembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is excited!***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_1.gif`);
    return message.channel.send(excembed);
  }
  if(result === 1) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_2.gif`);
    return message.channel.send(excembed);
  }
  if(result === 2) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_3.gif`);
    return message.channel.send(excembed);
  }
  if(result === 3) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_4.gif`);
    return message.channel.send(excembed);
  }
  if(result === 4) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_5.gif`);
    return message.channel.send(excembed);
  }
  if(result === 5) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_6.gif`);
    return message.channel.send(excembed);
  }
  if(result === 6) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_7.gif`);
    return message.channel.send(excembed);
  }
  if(result === 7) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_8.gif`);
    return message.channel.send(excembed);
  }
  if(result === 8) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_9.gif`);
    return message.channel.send(excembed);
  }
  if(result === 9) {
    let excicon = message.author.displayAvatarURL;
    let excembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Excited 😄", excicon)
    .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
    .setImage (`https://blusparkstudio.com/discord/excited_10.gif`);
    return message.channel.send(excembed);
  }
}

module.exports.help = {
  name: "excited"
}

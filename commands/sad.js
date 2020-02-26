const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let result = "0";
    let repliesCHOICE = ["0", "1"];
    let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
    if(resultCHOICE === 0) {
      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
      result = Math.floor((Math.random() * replies.length));
    }
    if(resultCHOICE === 1) {
      let replies = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
      result = Math.floor((Math.random() * replies.length));
    }

    if(result === 0) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_1.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 1) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_2.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 2) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_3.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 3) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_4.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 4) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_5.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 5) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_6.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 6) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_7.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 7) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_8.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 8) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_9.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 9) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_10.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 10) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_11.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 11) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_12.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 12) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_13.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 13) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_14.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 14) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_15.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 15) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_16.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 16) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_17.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 17) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_18.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 18) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_19.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 19) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_20.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 20) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_21.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 21) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_22.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 22) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_23.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 23) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very sad.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/sad_24.gif`);
      return message.channel.send(sdembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is very sad. Someone, cheer them up! 😔***`);

  let result = "0";
  let repliesCHOICE = ["0", "1"];
  let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
  if(resultCHOICE === 0) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    result = Math.floor((Math.random() * replies.length));
  }
  if(resultCHOICE === 1) {
    let replies = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
    result = Math.floor((Math.random() * replies.length));
  }

  if(result === 0) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_1.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 1) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_2.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 2) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_3.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 3) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_4.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 4) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_5.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 5) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_6.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 6) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_7.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 7) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_8.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 8) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_9.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 9) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_10.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 10) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_11.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 11) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_12.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 12) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_13.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 13) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_14.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 14) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_15.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 15) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_16.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 16) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_17.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 17) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_18.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 18) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_19.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 19) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_20.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 20) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_21.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 21) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_22.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 22) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_23.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 23) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Sad 😔", sdicon)
    .setDescription(`***${message.author.username} is sad because of ${rUser.user.username}.***\nWhat did you do? 😟`)
    .setImage (`https://blusparkstudio.com/discord/sad_24.gif`);
    return message.channel.send(sdembed);
  }
}

module.exports.help = {
  name: "sad"
}

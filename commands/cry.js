const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let result = "0";
    let repliesCHOICE = ["0", "1"];
    let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
    if(resultCHOICE === 0) {
      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      result = Math.floor((Math.random() * replies.length));
    }
    if(resultCHOICE === 1) {
      let replies = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
      result = Math.floor((Math.random() * replies.length));
    }

    if(result === 0) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_1.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 1) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_2.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 2) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_3.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 3) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_4.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 4) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_5.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 5) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_6.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 6) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_7.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 7) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_8.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 8) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_9.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 9) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_10.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 10) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_11.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 11) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_12.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 12) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_13.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 13) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_14.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 14) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_15.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 15) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_16.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 16) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_17.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 17) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_18.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 18) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_19.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 19) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_20.gif`);
      return message.channel.send(cryembed);
    }
    if(result === 20) {
      let cryicon = message.author.displayAvatarURL;
      let cryembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is crying!`, cryicon)
      .setImage (`https://blusparkstudio.com/discord/cry_21.gif`);
      return message.channel.send(cryembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is crying. Someone, do something! 😭***`);

  let result = "0";
  let repliesCHOICE = ["0", "1"];
  let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
  if(resultCHOICE === 0) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    result = Math.floor((Math.random() * replies.length));
  }
  if(resultCHOICE === 1) {
    let replies = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    result = Math.floor((Math.random() * replies.length));
  }

  if(result === 0) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_1.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 1) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_2.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 2) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_3.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 3) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_4.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 4) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_5.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 5) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_6.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 6) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_7.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 7) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_8.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 8) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_9.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 9) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_10.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 10) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_11.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 11) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_12.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 12) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_13.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 13) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_14.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 14) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_15.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 15) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_16.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 16) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_17.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 17) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_18.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 18) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_19.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 19) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_20.gif`);
    return message.channel.send(cryembed);
  }
  if(result === 20) {
    let cryicon = message.author.displayAvatarURL;
    let cryembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Cry 😭", cryicon)
    .setDescription(`***${message.author.username} is crying because of ${rUser.user.username}.***\nThat was mean! 😠`)
    .setImage (`https://blusparkstudio.com/discord/cry_21.gif`);
    return message.channel.send(cryembed);
  }
}

module.exports.help = {
  name: "cry"
}

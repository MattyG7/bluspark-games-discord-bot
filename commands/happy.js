const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (args[0] === "valentines day") {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! ❤️`);
    }
    if(result === 1) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💛`);
    }
    if(result === 2) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💚`);
    }
    if(result === 3) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💙`);
    }
    if(result === 4) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💜`);
    }
    if(result === 5) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💘`);
    }
    if(result === 6) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💖`);
    }
    if(result === 7) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💝`);
    }
    if(result === 8) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💗`);
    }
    if(result === 9) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💞`);
    }
    if(result === 10) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💓`);
    }
  }
  if (args[0] === "valentines") {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! ❤️`);
    }
    if(result === 1) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💛`);
    }
    if(result === 2) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💚`);
    }
    if(result === 3) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💙`);
    }
    if(result === 4) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💜`);
    }
    if(result === 5) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💘`);
    }
    if(result === 6) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💖`);
    }
    if(result === 7) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💝`);
    }
    if(result === 8) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💗`);
    }
    if(result === 9) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💞`);
    }
    if(result === 10) {
      return message.channel.send(`Happy Valentines Day ${message.author.username}! 💓`);
    }
  }
  if (args[0] === "easter") {
    let replies = ["0", "1", "2", "3", "4", "5"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Happy Easter ${message.author.username}! 🐰`);
    }
    if(result === 1) {
      return message.channel.send(`Happy Easter ${message.author.username}! 🐇`);
    }
    if(result === 2) {
      return message.channel.send(`Happy Easter ${message.author.username}! 🐣`);
    }
    if(result === 3) {
      return message.channel.send(`Happy Easter ${message.author.username}! 🐤`);
    }
    if(result === 4) {
      return message.channel.send(`Happy Easter ${message.author.username}! 🐥`);
    }
    if(result === 5) {
      return message.channel.send(`Happy Easter ${message.author.username}! 🍫`);
    }
  }
  if (args[0] === "halloween") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Happy Halloween ${message.author.username}! 👻`);
    }
    if(result === 1) {
      return message.channel.send(`Happy Halloween ${message.author.username}! 🎃`);
    }
    if(result === 2) {
      return message.channel.send(`Happy Halloween ${message.author.username}! 🍬`);
    }
  }
  if (args[0] === "xmas") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎄`);
    }
    if(result === 1) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎅`);
    }
    if(result === 2) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎁`);
    }
  }
  if (args[0] === "christmas") {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎄`);
    }
    if(result === 1) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎅`);
    }
    if(result === 2) {
      return message.channel.send(`Merry Christmas ${message.author.username}! 🎁`);
    }
  }
  if (args[0] === "birthday") {
    return message.channel.send(`It's not my birthday today ${message.author.username}. Is it yours?`);
  }
  if (!args[0]) {
    let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_1.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 1) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_2.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 2) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_3.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 3) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_4.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 4) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_5.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 5) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_6.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 6) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_7.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 7) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_8.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 8) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_9.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 9) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_10.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 10) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_11.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 11) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_12.gif`);
      return message.channel.send(sdembed);
    }
    if(result === 12) {
      let sdicon = message.author.displayAvatarURL;
      let sdembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is very happy.`, sdicon)
      .setImage (`https://blusparkstudio.com/discord/happy_13.gif`);
      return message.channel.send(sdembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is very happy right now!***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_1.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 1) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_2.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 2) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_3.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 3) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_4.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 4) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_5.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 5) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_6.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 6) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_7.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 7) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_8.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 8) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_9.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 9) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_10.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 10) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_11.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 11) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_12.gif`);
    return message.channel.send(sdembed);
  }
  if(result === 12) {
    let sdicon = message.author.displayAvatarURL;
    let sdembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Happy 😊", sdicon)
    .setDescription(`***${message.author.username} is happy because of ${rUser.user.username}.***\n😄`)
    .setImage (`https://blusparkstudio.com/discord/happy_13.gif`);
    return message.channel.send(sdembed);
  }
}

module.exports.help = {
  name: "happy"
}

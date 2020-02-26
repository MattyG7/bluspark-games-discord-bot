const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} poked themself, lol.***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_1.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 1) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_2.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 2) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_3.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 3) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}...a little too hard.***\nOuch 😬`)
    .setImage (`https://blusparkstudio.com/discord/poke_4.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 4) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_5.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 5) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_6.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 6) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_7.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 7) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_8.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 8) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_9.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 9) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username} but then got eaten.***\nOuch 😬`)
    .setImage (`https://blusparkstudio.com/discord/poke_10.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 10) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_11.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 11) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nDid that tickle? 😆`)
    .setImage (`https://blusparkstudio.com/discord/poke_12.gif`);
    return message.channel.send(pkembed);
  }
  if(result === 12) {
    let pkicon = message.author.displayAvatarURL;
    let pkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Poke 👉", pkicon)
    .setDescription(`***${message.author.username} poked ${rUser.user.username}.***\nCareful with that knife dude! 😂`)
    .setImage (`https://blusparkstudio.com/discord/poke_13.gif`);
    return message.channel.send(pkembed);
  }
}

module.exports.help = {
  name: "poke"
}

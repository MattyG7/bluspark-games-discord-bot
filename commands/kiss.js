const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***You need a gf or bf, ${message.author.username}.***`);

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
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_1.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 1) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} wants to kis ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_2.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 2) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username} but some randomer interfered.***\n😕`)
    .setImage (`https://blusparkstudio.com/discord/kiss_3.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 3) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_4.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 4) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_5.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 5) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_6.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 6) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_7.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 7) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_8.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 8) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_9.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 9) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_10.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 10) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_11.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 11) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_12.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 12) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_13.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 13) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_14.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 14) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_15.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 15) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_16.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 16) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_17.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 17) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_18.gif`);
    return message.channel.send(kssembed);
  }
  if(result === 18) {
    let kssicon = message.author.displayAvatarURL;
    let kssembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Kiss 😚", kssicon)
    .setDescription(`***${message.author.username} kissed ${rUser.user.username}.***\nOoooh. 😏`)
    .setImage (`https://blusparkstudio.com/discord/kiss_19.gif`);
    return message.channel.send(kssembed);
  }
}

module.exports.help = {
  name: "kiss"
}

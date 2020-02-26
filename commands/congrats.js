const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} feels proud. ☺️***`);

  let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/cheer_1.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 1) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/congrats_1.png`);
    return message.channel.send(cngrtembed);
  }
  if(result === 2) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/congrats_2.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 3) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/cheer_2.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 4) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/cheer_3.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 5) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/cheer_4.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 6) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/cheer_5.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 7) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/congrats_3.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 8) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://blusparkstudio.com/discord/congrats_4.gif`);
    return message.channel.send(cngrtembed);
  }
}

module.exports.help = {
  name: "congrats"
}

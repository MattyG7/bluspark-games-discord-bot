const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      if (!args[0]) {
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_1.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 1) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_2.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 2) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_3.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 3) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_4.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 4) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_5.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 5) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_6.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 6) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_7.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 7) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_8.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 8) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_9.gif`);
          return message.channel.send(mdembed);
        }
        if(result === 9) {
          let mdicon = message.author.displayAvatarURL();
          let mdembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setAuthor(`${message.author.username} is very mad.`, mdicon)
          .setImage (`https://blusparkstudio.com/discord/mad_10.gif`);
          return message.channel.send(mdembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(!rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is mad at themself. Stay back until they calm down.***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_1.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 1) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_2.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 2) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_3.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 3) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_4.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 4) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_5.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 5) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_6.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 6) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_7.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 7) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_8.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 8) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_9.gif`);
        return message.channel.send(sdembed);
      }
      if(result === 9) {
        let mdicon = message.author.displayAvatarURL();
        let mdembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Happy 😊", sdicon)
        .setDescription(`***${message.author.username} is mad because of ${rUser.user.username}.***\nWatch out 😶`)
        .setImage (`https://blusparkstudio.com/discord/mad_10.gif`);
        return message.channel.send(sdembed);
      }
    }
  });
}

module.exports.help = {
  name: "mad"
}

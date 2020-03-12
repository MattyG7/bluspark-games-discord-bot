const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  //GET USER COLOUR
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let userColour = "";
      if (data.col === "not-set") {
        userColour = "202225";
      } else {
        userColour = data.col;
      }
      console.log("Got user's colour Successfully!");

      if (!args[0]) {
        let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_1.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 1) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_2.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 2) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_3.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 3) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_4.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 4) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_5.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 5) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_6.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 6) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_7.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 7) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_8.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 8) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_9.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 9) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_10.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 10) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_11.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 11) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_12.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 12) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_13.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 13) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_14.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 14) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_15.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 15) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/slap_16.gif`);
          return message.channel.send(slpembed);
        }
        if(result === 16) {
          let slpicon = message.author.displayAvatarURL;
          let slpembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} slapped themself. Ouch.`, slpicon)
          .setImage (`https://blusparkstudio.com/discord/hit_5.gif`);
          return message.channel.send(slpembed);
        }
      }
      let rUser = message.mentions.members.first();
      if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
      if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} now has a sore red hand mark...***`);

      let replies = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_1.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 1) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_2.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 2) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_3.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 3) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_4.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 4) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_5.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 5) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_6.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 6) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_7.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 7) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_8.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 8) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_9.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 9) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_10.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 10) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_11.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 11) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_12.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 12) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_13.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 13) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_14.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 14) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_15.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 15) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nErm... 😶`)
        .setImage (`https://blusparkstudio.com/discord/slap_16.gif`);
        return message.channel.send(slpembed);
      }
      if(result === 16) {
        let slpicon = message.author.displayAvatarURL;
        let slpembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Slap ✋", slpicon)
        .setDescription(`***${message.author.username} slapped ${rUser.user.username}.***\nOoh, that looks sore. 😶`)
        .setImage (`https://blusparkstudio.com/discord/hit_5.gif`);
        return message.channel.send(slpembed);
      }
    }
  });
}

module.exports.help = {
  name: "slap"
}

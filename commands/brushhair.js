const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    //GET USER COLOUR
    mongoose.model("DiscordUserData").findOne ({
      userID: `${message.author.id}`
    }, function(error, data) {
      if (error) {
        console.log("Failed to get data :(");
        console.log(error);
      } else {
        let userColour = data.col;
        if (userColour === "not-set") {
          userColour = "1fd1c8";
        }
        console.log("Got user's colour Successfully!");

        let replies = ["0", "1"];
        let result = Math.floor((Math.random() * replies.length));

        if(result === 0) {
          let brshicon = message.author.displayAvatarURL;
          let brshembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is brushing their hair.`, brshicon)
          .setImage (`https://blusparkstudio.com/discord/brushhair_1.gif`);
          return message.channel.send(brshembed);
        }
        if(result === 1) {
          let brshicon = message.author.displayAvatarURL;
          let brshembed = new Discord.RichEmbed()
          .setColor(`#${userColour}`)
          .setAuthor(`${message.author.username} is brushing their hair.`, brshicon)
          .setImage (`https://blusparkstudio.com/discord/brushhair_3.gif`);
          return message.channel.send(brshembed);
        }
      }
    });
    return;
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is brushing their hair. Going out somewhere?***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let userColour = data.col;
      if (userColour === "not-set") {
        userColour = "1fd1c8";
      }
      console.log("Got user's colour Successfully!");

      let replies = ["0", "1"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let brshicon = message.author.displayAvatarURL;
        let brshembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Brush Hair 💆", brshicon)
        .setDescription(`***${message.author.username} is brushing ${rUser.user.username}'s hair.***\nAww, how nice. 😊`)
        .setImage (`https://blusparkstudio.com/discord/brushhair_2.gif`);
        return message.channel.send(brshembed);
      }
      if(result === 1) {
        let brshicon = message.author.displayAvatarURL;
        let brshembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setAuthor("Brush Hair 💆", brshicon)
        .setDescription(`***${message.author.username} is br...erm...sniffing ${rUser.user.username}'s hair?***\nHow...nice? 😶`)
        .setImage (`https://blusparkstudio.com/discord/brushhair_4.gif`);
        return message.channel.send(brshembed);
      }
    }
  });
}

module.exports.help = {
  name: "brushhair"
}

const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args, messageArray) => {
  if(!args[0]) return message.channel.send(`I can't say nothing, ${message.author.username}!`);

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

      let words = args.slice(0).join(" ");
      let syembed = new Discord.RichEmbed()
      .setColor(`#${userColour}`)
      .setDescription(words);
      return message.channel.send(syembed);
    }
  });
}

module.exports.help = {
  name: "say"
}

const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args, messageArray) => {
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

      if(!args[0]) {
        let replies = ["Today will be a good day.", "Today will be a bad day.", "Today will be an average day.", "Your future looks bright.", "Someone new will come along very soon.", "This'll be a good year.", "Things look good.", "Try again later, I can't forsee your future right now.", "The crystal ball is foggy, I can't forsee your future right now."];
        let result = Math.floor((Math.random() * replies.length));

        let frtnembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setTitle(`*🔮 Fortune*`)
        .setDescription(`**${replies[result]}**`);
        return message.channel.send(frtnembed);
      }
      return message.channel.send(`${message.author.username}, please just say *~fortune*.`);
    }
  });
}

module.exports.help = {
  name: "fortune"
}

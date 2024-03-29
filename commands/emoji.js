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
      if(args[0]) {
        let emjembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setDescription("You can't pick! I'll pick one for you.");
        return message.channel.send(emjembed);
      }

      let result = "0";
      let replies = "0";
      let repliesCHOICE = ["0", "1", "2", "3", "4", "5"];
      let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
      if(repliesCHOICE[resultCHOICE] === "0") {
        replies = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "☺"];
        result = Math.floor((Math.random() * replies.length));
      }
      if(repliesCHOICE[resultCHOICE] === "1") {
        replies = ["🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴"];
        result = Math.floor((Math.random() * replies.length));
      }
      if(repliesCHOICE[resultCHOICE] === "2") {
        replies = ["😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹", "🙁", "😖", "😞", "😟", "😤", "😢"];
        result = Math.floor((Math.random() * replies.length));
      }
      if(repliesCHOICE[resultCHOICE] === "3") {
        replies = ["😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "🥴", "😠", "😡", "🤬", "😷"];
        result = Math.floor((Math.random() * replies.length));
      }
      if(repliesCHOICE[resultCHOICE] === "4") {
        replies = ["🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥺", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿", "💀", "👾"];
        result = Math.floor((Math.random() * replies.length));
      }
      if(repliesCHOICE[resultCHOICE] === "5") {
        replies = ["🤖", "💩", "🐢", "🐬", "🐥", "🐤", "🐣", "🐌", "🐛", "🐝", "🕷"];
        result = Math.floor((Math.random() * replies.length));
      }
      let emjembed = new Discord.MessageEmbed()
      .setColor(`${data.col}`)
      .setDescription(replies[result]);
      return message.channel.send(emjembed);
    }
  });
}

module.exports.help = {
  name: "emoji"
}

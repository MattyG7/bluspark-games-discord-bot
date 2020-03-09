const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var fulldate = new Date();
  var date = fulldate.getDate();
  let extra = "th";
  if (date === "1" || date === "21" || date === "31") {
    extra = "st";
  }
  if (date === "2" || date === "22") {
    extra = "nd";
  }
  if (date === "3" || date === "23") {
    extra = "rd";
  }
  return message.channel.send(`Today's date is the ${date}${extra}.`);
}

module.exports.help = {
  name: "getdate"
}

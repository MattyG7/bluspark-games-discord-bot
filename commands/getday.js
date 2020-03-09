const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  var fulldate = new Date();
  var day = fulldate.getDay() - 1;
  if (day < 0) {
    day = 6;
  }
  let today = days[day];
  return message.channel.send(`It is ${today}, today.`);
}

module.exports.help = {
  name: "getday"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var months = new Array();
  months[0] = "January";
  months[1] = "February";
  months[2] = "March";
  months[3] = "April";
  months[4] = "May";
  months[5] = "June";
  months[6] = "July";
  months[7] = "August";
  months[8] = "September";
  months[9] = "October";
  months[10] = "November";
  months[11] = "December";

  var date = new Date();
  var monthName = months[date.getMonth()];
  return message.channel.send(`We are in ${monthName}.`);
}

module.exports.help = {
  name: "getmonth"
}

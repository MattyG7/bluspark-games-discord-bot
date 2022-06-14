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

  let seasonColour = "";
  var date = new Date();
  var dateNumber = date.getMonth();
  if (dateNumber === 11 || dateNumber === 0 || dateNumber === 1) {
    //season = "Winter";
    seasonColour = "a4d6de"; //b1d6e3
  }
  if (dateNumber === 2 || dateNumber === 3 || dateNumber === 4) {
    //season = "Spring";
    seasonColour = "479e5b"; //2d9652
  }
  if (dateNumber === 5 || dateNumber === 6 || dateNumber === 7) {
    //season = "Summer";
    seasonColour = "#e6b060"; //edae40, edc31c
  }
  if (dateNumber === 8 || dateNumber === 9 || dateNumber === 10) {
    //season = "Autumn";
    seasonColour = "804e18"; //8f561a, 804c11
  }
  if (!args[0] || args[0] === "help" || args[0] === "greets" || args[0] === "greetings") {
    let ssnlembed = new Discord.MessageEmbed()
    //.setColor("#cc1d37")
    .setColor(`#${seasonColour}`)
    .setTitle(`📅 **Seasonal Greetings**`)
    .addField("Valentine's Day", "`~happy valentines day, ~happy valentines`")
    .addField("Easter", "`~happy easter`")
    .addField("Halloween", "`~happy halloween`")
    .addField("Christmas", "`~merry christmas`")
    .addField("Birthday", "`~happy birthday`");
    return message.channel.send(ssnlembed);
  }
}

module.exports.help = {
  name: "seasonal"
}

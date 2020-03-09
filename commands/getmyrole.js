const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let member = message.guild.member(message.author);
  let memberRoles1 = member.roles.map(roles => `${roles.name}`).join(' ');
  let memberRoles2 = memberRoles1.split(" ");
  let memberRoles3 = memberRoles2.slice(1);
  let memberRoles4 = "";
  var number = 0;
  for (number in memberRoles3) {
    memberRoles4 = memberRoles4 + memberRoles3[number] + " ";
    console.log(`Role array - ${memberRoles3[number]}`);
    number++;
  }
  return message.channel.send(`Your role is **${memberRoles4}**.`);
}

module.exports.help = {
  name: "getmyrole"
}

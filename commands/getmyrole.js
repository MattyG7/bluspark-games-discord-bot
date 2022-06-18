const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let memberRole = message.member.roles.cache.map(roles => roles.name).slice(0,-1);
  console.log(`Got user's role Successfully: ${memberRole}`);
  return message.channel.send(`Your role is **${memberRole}**.`);
}

module.exports.help = {
  name: "getmyrole"
}

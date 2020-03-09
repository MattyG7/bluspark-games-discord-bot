const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
  if (!args[0]) return message.channel.send("How many messages would you like to clear? ~clear **NUMBER**");
  if (message.member.user.tag === author) {
    if (args[0] === "1") {
      message.channel.bulkDelete(args[0]).then(() => {
        return message.channel.send(`${args[0]} message cleared.`)
      });
    }
    else {
      message.channel.bulkDelete(args[0]).then(() => {
        return message.channel.send(`${args[0]} messages cleared.`)
      });
    }
  }
}

module.exports.help = {
  name: "clear"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
  if (!args[0]) return message.channel.send("How many messages would you like to clear? ~clear **NUMBER**.");
  if (isNaN(args[0])) return message.channel.send("Please use a number.");
  let numParsedArgs = parseInt(args[0]);
  if (numParsedArgs > 25) return message.channel.send("That is too many! Try 25.");
  if (message.member.user.tag === author) {
    if (args[0] === "1") {
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`1 message cleared.`)
        setTimeout(() => {
          message.channel.bulkDelete(1);
        }, 1500);
      });
    } else {
      message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages cleared.`)
        setTimeout(() => {
          message.channel.bulkDelete(1);
        }, 1500);
      });
    }
  }
}

module.exports.help = {
  name: "clear"
}

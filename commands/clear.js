const Discord = require("discord.js");

module.exports.run = async (bot, message, args, author) => {
  if (message.member.user.tag !== author) return message.channel.send("🚫 You're not allowed to use this command!");
  if (!args[0]) return message.channel.send("How many messages would you like to clear? ~clear **NUMBER**.");
  if (isNaN(args[0])) return message.channel.send("Please use a number.");
  let numParsedArgs = parseInt(args[0]);
  if (numParsedArgs > 25) return message.channel.send("That is too many! Try 25.");
  if (message.member.user.tag === author) {
    if (numParsedArgs === 1) {
      message.channel.bulkDelete(2);
      message.channel.send(`1 message cleared.`).then(msg => {
        msg.delete(5000)
      });
    } else {
      let numParsedArgsPLUSONE = numParsedArgs + 1;
      message.channel.bulkDelete(numParsedArgsPLUSONE);
      message.channel.send(`${numParsedArgs} messages cleared.`).then(msg => {
        msg.delete(5000)
      });
    }
  }
}

module.exports.help = {
  name: "clear"
}

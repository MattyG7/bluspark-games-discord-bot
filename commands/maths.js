const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let nmbr = "**number**";
  let symbls = "`+ - x / ^`";
  if (!args[0] || args[0] === "help") {
    let mthembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`📐 **Calculator Help**`)
    //.setDescription("*Type one of the mathematical symbols below and press 'Enter'.*")
    .addField("Add", "`+`")
    .addField("Subtract", "`-`")
    .addField("Multiply", "`x`")
    .addField("Divide", "`/`")
    .addField("Power of", "`^`")
    .setFooter("Alternate commands: ~calc ~calculator");
    return message.channel.send(mthembed);
  }
  let nothelp = "***~calc***";
  let nothelpp = "***~calc help***";
  if (args[0] !== "help" && !args[1]) return message.channel.send(`Did you mean ${nothelp} or ${nothelpp}?`);
  if (args[1] != "+" && args[1] != "-" && args[1] != "x" && args[1] != "*" && args[1] != "/" && args[1] != "^") return message.channel.send(`Please use one of these: ${symbls}`);
  if (args[1] === "+") {
    if (isNaN(args[0]) || isNaN(args[2])) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    if(args[3]) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    let num1 = args[0];
    let num2 = args[2];
    let sum = `${args[0]} + ${args[2]}`;
    let ans = Number(args[0]) + Number(args[2]);

    let mthembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription(`${sum} = ${ans}`);
    return message.channel.send(mthembed);
  }
  if (args[1] === "-") {
    if (isNaN(args[0]) || isNaN(args[2])) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    if(args[3]) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    let num1 = args[0];
    let num2 = args[2];
    let sum = `${args[0]} - ${args[2]}`;
    let ans = args[0] - args[2];

    let mthembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription(`${sum} = ${ans}`);
    return message.channel.send(mthembed);
  }
  if (args[1] === "x" || args[1] === "*") {
    if (isNaN(args[0]) || isNaN(args[2])) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    if(args[3]) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    let num1 = args[0];
    let num2 = args[2];
    let sum = `${args[0]} x ${args[2]}`;
    let ans = args[0] * args[2];

    let mthembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription(`${sum} = ${ans}`);
    return message.channel.send(mthembed);
  }
  if (args[1] === "/") {
    if (isNaN(args[0]) || isNaN(args[2])) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    if(args[3]) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    let num1 = args[0];
    let num2 = args[2];
    let sum = `${args[0]} / ${args[2]}`;
    let ans = args[0] / args[2];

    let mthembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription(`${sum} = ${ans}`);
    return message.channel.send(mthembed);
  }
  if (args[1] === "^") {
    if (isNaN(args[0]) || isNaN(args[2])) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    if(args[3]) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
    if(args[2] === "0") {
      let sum = `${args[0]} to the power of ${args[2]}`;
      let mthembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`${sum} is 0`);
      return message.channel.send(mthembed);
    }
    if(args[2] === "1") {
      if (isNaN(args[0]) || isNaN(args[2])) return message.channel.send(`Please use the correct format, ${message.author.username}. Type *~calc help* for assistance.`);
      let sum = `${args[0]} to the power of ${args[2]}`;
      let mthembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`${sum} is ${args[0]}`);
      return message.channel.send(mthembed);
    }
    let num1 = args[0];
    let num2 = args[2];
    let sum = `${args[0]} to the power of ${args[2]}`;
    let ans = args[0] * args[0];
    num2 = num2 - 1;
    //let temp = 0;
    while (num2 > 1) {
      ans = ans * num1;
      num2 = num2 - 1;
    }

    let mthembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription(`${sum} is ${ans}`);
    return message.channel.send(mthembed);
  }
}

module.exports.help = {
  name: "maths"
}

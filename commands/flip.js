const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let cnsd = `**coinside**`;
  let mnyamnt = `**moneyamount**`;
  if (!args[0]) {
    let replies = ["**Heads**", "**Tails**"];
    let result = Math.floor((Math.random() * replies.length));

    let fflpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`Coin Flip (no prize) 💰`)
    .setDescription(`The coin landed on ${replies[result]}!`);
    return message.channel.send(fflpembed);
  }
  if(args[2]) return message.channel.send(`Please use the correct format: ~flip ${cnsd} ${mnyamnt}.`);
  if(args[0] && !args[1]) return message.channel.send(`Please use the correct format: ~flip ${cnsd} ${mnyamnt}.`);
  if(args[0] != "heads" && args[0] != "tails") return message.channel.send(`Please use the correct format: ~flip ${cnsd} ${mnyamnt}.`);
  if(isNaN(args[1])) return message.channel.send(`Please use a money amount.`);
  if (args[1] > coins) {
    let ntenghembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setDescription(`Not enough money!`)
    .setFooter(`You have ${coins} SparkCoins`);
    return message.channel.send(ntenghembed);
  }
  let replies = ["heads", "tails"];
  let result = Math.floor((Math.random() * replies.length));

  let win = `*You win ${args[1]} SparkCoins!*`;
  let lose = `*You lose ${args[1]} SparkCoins.*`;
  let frmtresult = "None";
  if (args[0] === replies[result]) {
    if (replies[result] === "heads") {frmtresult = "**Heads**";}
    if (replies[result] === "tails") {frmtresult = "**Tails**";}
    coins = coins + args[1];
    let flpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`Coin Flip 💰`)
    .setDescription(`The coin landed on ${frmtresult}! ${win}`);
    return message.channel.send(flpembed);
  }
  if (args[0] !== replies[result]) {
    if (replies[result] === "heads") {frmtresult = "**Heads**";}
    if (replies[result] === "tails") {frmtresult = "**Tails**";}
    coins = coins - args[1];
    let flpembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`Coin Flip 💰`)
    .setDescription(`The coin landed on ${frmtresult}! ${lose}`);
    return message.channel.send(flpembed);
  }
}

module.exports.help = {
  name: "flip"
}

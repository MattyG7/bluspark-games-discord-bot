const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let gl = `**GOAL!**`;
  let mnyamnt = `**moneyamount**`;
  if (!args[0]) {
    let replies = [`${gl} You scored!`, "Missed! Better luck next time.", "The keeper saved it! Unlucky.", "Skied it! 😐"];
    let result = Math.floor((Math.random() * replies.length));

    let fpnltyembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setTitle(`Penalty (no prize) ⚽`)
    .setDescription(`You run up, kick the ball and...`);
     message.channel.send(fpnltyembed);
    setTimeout(() => {
      let fpnltyyembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`${replies[result]}`);
      return message.channel.send(fpnltyyembed);
    }, 3000);
  }
  if(args[1]) return message.channel.send(`${message.author.username}, please use the correct format: ~penalty ${mnyamnt}.`);
  if(args[0]) {
    if(isNaN(args[0])) return message.channel.send(`${message.author.username}, please use numbers! The correct format is: ~penalty ${mnyamnt}.`);
    if (args[0] > coins) {
      let ntenghembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`Not enough money!`)
      .setFooter(`You have ${coins} SparkCoins`);
      return message.channel.send(ntenghembed);
    }
    let replies = [`${gl} You scored!`, "Missed! Better luck next time.", "The keeper saved it! Unlucky.", "Skied it! 😐"];
    let result = Math.floor((Math.random() * replies.length));

    let win = `*You win ${args[0]} SparkCoins!*`;
    let lose = `*You lose ${args[0]} SparkCoins.*`;
    //let frmtresult = "None";
    if (result === 0) {
      coins = coins + args[0];
      let fpnltyembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Penalty ⚽`)
      .setDescription(`You run up, kick the ball and...`);
       message.channel.send(fpnltyembed);
      setTimeout(() => {
        let fpnltyyembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`${replies[result]} ${win}`);
        return message.channel.send(fpnltyyembed);
      }, 3000);
    }
    if (result === 1 || result === 2 || result === 3) {
      coins = coins - args[0];
      let pnltyembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Penalty ⚽`)
      .setDescription(`You run up, kick the ball and...`);
       message.channel.send(pnltyembed);
      setTimeout(() => {
        let pnltyyembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`${replies[result]} ${lose}`);
        return message.channel.send(pnltyyembed);
      }, 3000);
    }
  }
}

module.exports.help = {
  name: "penalty"
}

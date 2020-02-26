const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let coins = 100;
  let mnyamnt = `**moneyamount**`;
  let allpns = "*Strike*";
  if (!args[0]) {
    let replies = ["**0 pins**", "**1 pin**", "**2 pins**", "**3 pins**", "**4 pins**", "**5 pins**", "**6 pins**", "**7 pins**", "**8 pins**", "**9 pins**", "**10 pins**"];
    let result = Math.floor((Math.random() * replies.length));

    if (result === 0) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling (no prize) 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. Ouch...`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
    if (result === 1 || result === 2 || result === 3) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling (no prize) 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. Unlucky, better luck next time.`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
    if (result === 4 || result === 5 || result === 6) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling (no prize) 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. Eh, not bad.`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
    if (result === 7 || result === 8 || result === 9) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling (no prize) 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. Nice.`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
    if (result === 10) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling (no prize) 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. You got a ${allpns}!`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
  }
  if(args[1]) return message.channel.send(`${message.author.username}, please use the correct format: ~bowl ${mnyamnt}.`);
  if(args[0]) {
    if(isNaN(args[0])) return message.channel.send(`${message.author.username}, please use a money amount.`);
    if (args[0] > coins) {
      let ntenghembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setDescription(`Not enough money!`)
      .setFooter(`You have ${coins} SparkCoins`);
      return message.channel.send(ntenghembed);
    }
    let replies = ["**0 pins**", "**1 pin**", "**2 pins**", "**3 pins**", "**4 pins**", "**5 pins**", "**6 pins**", "**7 pins**", "**8 pins**", "**9 pins**", "**10 pins**"];
    let result = Math.floor((Math.random() * replies.length));

    let wnngs = args[0] * result;
    let bns = `*You win ${wnngs} SparkCoins + a bonus ${result} SparkCoins!*`;
    let win = `*You win ${wnngs} SparkCoins!*`;
    let nthng = `*You didn't win any SparkCoins. Try again later.*`;
    let lose = `*You lose ${wnngs} SparkCoins. Try again later.*`;
    let losez = `*You lose ${args[0]} SparkCoins. Try again later.*`;
    if (result === 0) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. ${losez}`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
    if (result === 1) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. ${nthng}`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
    if (result > 1 && result < 10) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. ${win}`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
    if (result === 10) {
      let fbwlembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setTitle(`Bowling 🎳`)
      .setDescription(`You picked up a bowling ball, threw it down the lane and...`);
       message.channel.send(fbwlembed);
      setTimeout(() => {
        let fbwllembed = new Discord.RichEmbed()
        .setColor("#1fd1c8")
        .setDescription(`Knocked down ${replies[result]}. You got a ${allpns}! ${bns}`);
        return message.channel.send(fbwllembed);
      }, 4000);
    }
  }
}

module.exports.help = {
  name: "bowl"
}

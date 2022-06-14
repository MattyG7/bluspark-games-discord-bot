const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  if(args[1]) return message.channel.send(`${message.author.username}, please use the correct format: ~dontgetbit or ~dontgetbit SPARKCOINAMOUNT.`);

  let bitUser = message.author.id;
  //Get user data
  let usersData = await mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      console.log("Got user's data Successfully!");
      return;
    }
  });

  if (!args[0]) {
    //▇
    //▁
    let teeth = ["▇", "▇", "▇", "▇", "▇", "▇", "▇", "▇", "▇", "▇"];
    let choices = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    let badChoice = Math.floor((Math.random() * choices.length));
    let setBadChoice = choices[badChoice];
    console.log(badChoice);
    let teethLeft = 10;
    let gameFinished = "No";
    let fbwlembed = new Discord.MessageEmbed()
    .setColor(`${usersData.col}`) //2b573e
    .setTitle(`Don't Get Bit! (no prize) 🐊`)
    .setDescription(`Game started! ${teethLeft} teeth left.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
    const m = await message.channel.send(fbwlembed);

    console.log("Running");
    while (gameFinished === "No") {
      console.log("Still running");
      //Reactions being added
      const reacts = await promptMessage(m, message.author, 30, choices);

      //Check the reacion
      const chosenTooth = await getResult(reacts); //, teeth

      //Clear reactions
      await m.clearReactions();

      fbwlembed
        .setDescription(`${teethLeft} teeth left.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
      m.edit(fbwlembed);
    }
    console.log("Ended");
    if (gameFinished === "Yess") {
      fbwlembed
        .setDescription(`Well done! Only the dangerous tooth is left.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
      m.edit(fbwlembed);
    }
    if (gameFinished === "Yes") {
      let safeTeeth = teethLeft - 1;
      fbwlembed
        .setDescription(`Game Over! You had ${safeTeeth} safe teeth left.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
      m.edit(fbwlembed);
    }

    async function promptMessage(message, author, time, validReactions) {
      // We put in the time as seconds, with this it's being transfered to MS
      time *= 1000;
      // For every emoji in the function parameters, react in the good order.
      for (const reaction of validReactions) await message.react(reaction);
      // Only allow reactions from the author,
      // and the emoji must be in the array we provided.
      const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === bitUser;
      // And of course, await the reactions
      return message
        .awaitReactions(filter, { max: 1, time: time})
        .then(collected => collected.first() && collected.first().emoji.name);
    }

    function getResult(me) { //, clientChosen
      if (me === setBadChoice) {
        gameFinished = "Yes";
      }
      if (me === "1️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(0, 1, "▁");
        //let removedChoices = choices.splice(0, 1);
        //var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "1️⃣") {
            choices.splice(i, 1);
          }
        } //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "2️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(1, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "2️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "3️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(2, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "3️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "4️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(3, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "4️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "5️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(4, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "5️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }

      if (me === "6️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(5, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "6️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "7️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(6, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "7️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "8️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(7, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "8️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "9️⃣") {
        teethLeft = teethLeft - 1;
        teeth.splice(8, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "9️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "🔟") {
        teethLeft = teethLeft - 1;
        teeth.splice(9, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "🔟") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
    }
  } else {
    let SparkCoinsBET = parseInt(args[0]);
    //▇
    //▁
    let teeth = ["▇", "▇", "▇", "▇", "▇", "▇", "▇", "▇", "▇", "▇"];
    let choices = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    let badChoice = Math.floor((Math.random() * choices.length));
    let setBadChoice = choices[badChoice];
    console.log(badChoice);
    let userSparkCoins = usersData.sparkcoins;
    let teethLeft = 10;
    let teethDown = 0;
    let coinCount = 0;
    let gameFinished = "No";
    let fbwlembed = new Discord.MessageEmbed()
    .setColor(`${usersData.col}`) //195e37,2b573e
    .setTitle(`Don't Get Bit! 🐊`)
    .setDescription(`Game started! ${teethLeft} teeth left.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
    const m = await message.channel.send(fbwlembed);

    console.log("Running");
    while (gameFinished === "No") {
      console.log("Still running");
      //Reactions being added
      const reacts = await promptMessage(m, message.author, 30, choices);

      //Check the reacion
      const chosenTooth = await getResult(reacts); //, teeth

      //Clear reactions
      await m.clearReactions();

      fbwlembed
        .setDescription(`${teethLeft} teeth left.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
      m.edit(fbwlembed);
    }
    console.log("Ended");
    if (gameFinished === "Yess") {
      coinCount = coinCount + SparkCoinsBET;
      let userSparkCoinsNEW = userSparkCoins + coinCount;
      let sparkcoinlogmembed = new Discord.MessageEmbed()
      .setColor("#7c889c")
      .setDescription(`**${message.author.username}** won ${coinCount} SparkCoins!`)
      .setFooter("Don't Get Bit");
      bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
      fbwlembed
        .setDescription(`Well done! You won ${coinCount} SparkCoins.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
      m.edit(fbwlembed);
      mongoose.model("DiscordUserData").updateOne ({userID: bitUser}, {
        sparkcoins: `${userSparkCoinsNEW}`
      }, function(error, data) {
        if (error) {
          console.log("Failed to save the data :(");
          console.log(error);
        } else {
          console.log(`Successfully updated user's SparkCoins amount!`);
          console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
        }
      });
    }
    if (gameFinished === "Yes") {
      coinCount = coinCount - SparkCoinsBET;
      let userSparkCoinsNEW = userSparkCoins + coinCount;
      if (coinCount < 0) {
        let coinCountPositive = coinCount * -1;
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** lost ${coinCountPositive} SparkCoins.`)
        .setFooter("Don't Get Bit");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        fbwlembed
          .setDescription(`Game Over! You lose ${coinCountPositive} SparkCoins.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
        m.edit(fbwlembed);
      }
      if (coinCount === 0) {
        fbwlembed
          .setDescription(`Game Over! You didn't win or lose any SparkCoins.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
        m.edit(fbwlembed);
      }
      if (coinCount > 0) {
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** won ${coinCount} SparkCoins!`)
        .setFooter("Don't Get Bit");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        fbwlembed
          .setDescription(`Game Over! You won ${coinCount} SparkCoins.\n\n${teeth[0]} ${teeth[1]} ${teeth[2]} ${teeth[3]} ${teeth[4]} ${teeth[5]} ${teeth[6]} ${teeth[7]} ${teeth[8]} ${teeth[9]}`);
        m.edit(fbwlembed);
      }
      mongoose.model("DiscordUserData").updateOne ({userID: bitUser}, {
        sparkcoins: `${userSparkCoinsNEW}`
      }, function(error, data) {
        if (error) {
          console.log("Failed to save the data :(");
          console.log(error);
        } else {
          console.log(`Successfully updated user's SparkCoins amount!`);
          console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
        }
      });
    }

    async function promptMessage(message, author, time, validReactions) {
      // We put in the time as seconds, with this it's being transfered to MS
      time *= 1000;
      // For every emoji in the function parameters, react in the good order.
      for (const reaction of validReactions) await message.react(reaction);
      // Only allow reactions from the author,
      // and the emoji must be in the array we provided.
      const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === bitUser;
      // And of course, await the reactions
      return message
        .awaitReactions(filter, { max: 1, time: time})
        .then(collected => collected.first() && collected.first().emoji.name);
    }

    function getResult(me) { //, clientChosen
      if (me === setBadChoice) {
        gameFinished = "Yes";
      }
      if (me === "1️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(0, 1, "▁");
        //let removedChoices = choices.splice(0, 1);
        //var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "1️⃣") {
            choices.splice(i, 1);
          }
        } //=> [1, 2, 3, 4, 6, 7, 8, 9, 0]
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "2️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(1, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "2️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "3️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(2, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "3️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "4️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(3, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "4️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "5️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(4, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "5️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }

      if (me === "6️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(5, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "6️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "7️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(6, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "7️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "8️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(7, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "8️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "9️⃣") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(8, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "9️⃣") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
      if (me === "🔟") {
        teethLeft = teethLeft - 1;
        teethDown++;
        coinCount = coinCount + teethDown;
        console.log(coinCount);
        teeth.splice(9, 1, "▁");
        for (var i = 0; i < choices.length; i++) {
          if (choices[i] === "🔟") {
            choices.splice(i, 1);
          }
        }
        if (teethLeft === 1) {gameFinished = "Yess";}
        return;
      }
    }
  }
}
//https://github.com/The-SourceCode/Discord.js-Bot-Development/blob/master/Ep_08/commands/fun/rps.js#L25

module.exports.help = {
  name: "dontgetbit"
}

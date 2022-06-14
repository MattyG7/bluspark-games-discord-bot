const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send(`${message.author.username}, please use the correct format: ~rps CHOICE or ~rps CHOICE SPARKCOINSAMOUNT.`);
  if(args[2]) return message.channel.send(`${message.author.username}, please use the correct format: ~rps CHOICE or ~rps CHOICE SPARKCOINSAMOUNT.`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      if (!args[1]) {
        if (args[0] === "⛰️" || args[0] === "Rock" || args[0] === "rock") {
          let replies = ["⛰️Rock", "📄Paper", "✂️Scissors"];
          let result = Math.floor((Math.random() * replies.length));
          message.channel.send('🤜 "Rock!"...');
          setTimeout(() => {
            message.channel.send('🤜 "Paper!"...');
            setTimeout(() => {
              message.channel.send('🤜 "Scissors!"...');
              setTimeout(() => {
                message.channel.bulkDelete(3).then(() => {
                  message.channel.send(`**You**: ⛰️Rock\n**Bot**: ${replies[result]}`);
                  if (result === 2) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`⛰️Rock beats ✂️Scissors! You win!`);
                    return message.channel.send(fbwlembed);
                  }
                  if (result === 0) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`It's a draw!`);
                    return message.channel.send(fbwlembed);
                  }
                  if (result === 1) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`📄Paper beats ⛰️Rock! You lose!`);
                    return message.channel.send(fbwlembed);
                  }
                });
              }, 500);
            }, 1000);
          }, 1000);
        }
        if (args[0] === "📄" || args[0] === "Paper" || args[0] === "paper") {
          let replies = ["⛰️Rock", "📄Paper", "✂️Scissors"];
          let result = Math.floor((Math.random() * replies.length));
          message.channel.send('🤜 "Rock!"...');
          setTimeout(() => {
            message.channel.send('🤜 "Paper!"...');
            setTimeout(() => {
              message.channel.send('🤜 "Scissors!"...');
              setTimeout(() => {
                message.channel.bulkDelete(3).then(() => {
                  message.channel.send(`**You**: 📄Paper\n**Bot**: ${replies[result]}`);
                  if (result === 0) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`📄Paper beats ⛰️Rock! You win!`);
                    return message.channel.send(fbwlembed);
                  }
                  if (result === 1) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`It's a draw!`);
                    return message.channel.send(fbwlembed);
                  }
                  if (result === 2) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`✂️Scissors beats 📄Paper! You lose!`);
                    return message.channel.send(fbwlembed);
                  }
                });
              }, 500);
            }, 1000);
          }, 1000);
        }
        if (args[0] === "✂️" || args[0] === "Scissors" || args[0] === "scissors") {
          let replies = ["⛰️Rock", "📄Paper", "✂️Scissors"];
          let result = Math.floor((Math.random() * replies.length));
          message.channel.send('🤜 "Rock!"...');
          setTimeout(() => {
            message.channel.send('🤜 "Paper!"...');
            setTimeout(() => {
              message.channel.send('🤜 "Scissors!"...');
              setTimeout(() => {
                message.channel.bulkDelete(3).then(() => {
                  message.channel.send(`**You**: ✂️Scissors\n**Bot**: ${replies[result]}`);
                  if (result === 1) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`✂️Scissors beats 📄Paper! You win!`);
                    return message.channel.send(fbwlembed);
                  }
                  if (result === 2) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`It's a draw!`);
                    return message.channel.send(fbwlembed);
                  }
                  if (result === 0) {
                    let fbwlembed = new Discord.MessageEmbed()
                    .setColor(`${data.col}`)
                    .setTitle(`Rock Paper Scissors (no prize) ⛰️📄✂️`)
                    .setDescription(`⛰️Rock beats ✂️Scissors! You lose!`);
                    return message.channel.send(fbwlembed);
                  }
                });
              }, 500);
            }, 1000);
          }, 1000);
        }
      } else {
        if(isNaN(args[1])) return message.channel.send(`${message.author.username}, please use a money amount.`);

        let rpsUser = message.author.id;
        let userSparkCoins = data.sparkcoins;
        let SparkCoinsBET = parseInt(args[1]);
        console.log("Successfully got the user's SparkCoin amount: " + userSparkCoins);

        if (userSparkCoins > SparkCoinsBET || userSparkCoins === SparkCoinsBET) {
          console.log("User CAN afford bet.");
          console.log("User is betting: " + SparkCoinsBET + " SparkCoins.");

          if (args[0] === "⛰️" || args[0] === "Rock" || args[0] === "rock") {
            let replies = ["⛰️Rock", "📄Paper", "✂️Scissors"];
            let result = Math.floor((Math.random() * replies.length));
            message.channel.send('🤜 "Rock!"...');
            setTimeout(() => {
              message.channel.send('🤜 "Paper!"...');
              setTimeout(() => {
                message.channel.send('🤜 "Scissors!"...');
                setTimeout(() => {
                  message.channel.bulkDelete(3).then(() => {
                    message.channel.send(`**You**: ⛰️Rock\n**Bot**: ${replies[result]}`);
                    if (result === 2) {
                      console.log(`User won ${SparkCoinsBET} SparkCoins.`);
                      let sparkcoinlogmembed = new Discord.MessageEmbed()
                      .setColor("#7c889c")
                      .setDescription(`**${message.author.username}** won ${SparkCoinsBET} SparkCoins!`)
                      .setFooter("RPS");
                      bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`⛰️Rock beats ✂️Scissors! You won ${args[1]} SparkCoins!`);
                      message.channel.send(fbwlembed);
                      let userSparkCoinsNEW = userSparkCoins + SparkCoinsBET;
                      mongoose.model("DiscordUserData").updateOne ({userID: rpsUser}, {
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
                    if (result === 0) {
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`It's a draw! You didn't win or lose any SparkCoins.`);
                      message.channel.send(fbwlembed);
                    }
                    if (result === 1) {
                      console.log(`User lost ${SparkCoinsBET} SparkCoins.`);
                      let sparkcoinlogmembed = new Discord.MessageEmbed()
                      .setColor("#7c889c")
                      .setDescription(`**${message.author.username}** lost ${SparkCoinsBET} SparkCoins.`)
                      .setFooter("RPS");
                      bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`📄Paper beats ⛰️Rock! You lost ${args[1]} SparkCoins!`);
                      message.channel.send(fbwlembed);
                      let userSparkCoinsNEW = userSparkCoins - SparkCoinsBET;
                      mongoose.model("DiscordUserData").updateOne ({userID: rpsUser}, {
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
                    return;
                  });
                }, 500);
              }, 1000);
            }, 1000);
          }
          if (args[0] === "📄" || args[0] === "Paper" || args[0] === "paper") {
            let replies = ["⛰️Rock", "📄Paper", "✂️Scissors"];
            let result = Math.floor((Math.random() * replies.length));
            message.channel.send('🤜 "Rock!"...');
            setTimeout(() => {
              message.channel.send('🤜 "Paper!"...');
              setTimeout(() => {
                message.channel.send('🤜 "Scissors!"...');
                setTimeout(() => {
                  message.channel.bulkDelete(3).then(() => {
                    message.channel.send(`**You**: 📄Paper\n**Bot**: ${replies[result]}`);
                    if (result === 0) {
                      console.log(`User won ${SparkCoinsBET} SparkCoins.`);
                      let sparkcoinlogmembed = new Discord.MessageEmbed()
                      .setColor("#7c889c")
                      .setDescription(`**${message.author.username}** won ${SparkCoinsBET} SparkCoins!`)
                      .setFooter("RPS");
                      bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`📄Paper beats ⛰️Rock! You won ${args[1]} SparkCoins!`);
                      message.channel.send(fbwlembed);
                      let userSparkCoinsNEW = userSparkCoins + SparkCoinsBET;
                      mongoose.model("DiscordUserData").updateOne ({userID: rpsUser}, {
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
                    if (result === 1) {
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`It's a draw! You didn't win or lose any SparkCoins.`);
                      message.channel.send(fbwlembed);
                    }
                    if (result === 2) {
                      console.log(`User lost ${SparkCoinsBET} SparkCoins.`);
                      let sparkcoinlogmembed = new Discord.MessageEmbed()
                      .setColor("#7c889c")
                      .setDescription(`**${message.author.username}** lost ${SparkCoinsBET} SparkCoins.`)
                      .setFooter("RPS");
                      bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`✂️Scissors beats 📄Paper! You lost ${args[1]} SparkCoins!`);
                      message.channel.send(fbwlembed);
                      let userSparkCoinsNEW = userSparkCoins - SparkCoinsBET;
                      mongoose.model("DiscordUserData").updateOne ({userID: rpsUser}, {
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
                    return;
                  });
                }, 500);
              }, 1000);
            }, 1000);
          }
          if (args[0] === "✂️" || args[0] === "Scissors" || args[0] === "scissors") {
            let replies = ["⛰️Rock", "📄Paper", "✂️Scissors"];
            let result = Math.floor((Math.random() * replies.length));
            message.channel.send('🤜 "Rock!"...');
            setTimeout(() => {
              message.channel.send('🤜 "Paper!"...');
              setTimeout(() => {
                message.channel.send('🤜 "Scissors!"...');
                setTimeout(() => {
                  message.channel.bulkDelete(3).then(() => {
                    message.channel.send(`**You**: ✂️Scissors\n**Bot**: ${replies[result]}`);
                    if (result === 1) {
                      console.log(`User won ${SparkCoinsBET} SparkCoins.`);
                      let sparkcoinlogmembed = new Discord.MessageEmbed()
                      .setColor("#7c889c")
                      .setDescription(`**${message.author.username}** won ${SparkCoinsBET} SparkCoins!`)
                      .setFooter("RPS");
                      bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`✂️Scissors beats 📄Paper! You won ${args[1]} SparkCoins!`);
                      message.channel.send(fbwlembed);
                      let userSparkCoinsNEW = userSparkCoins + SparkCoinsBET;
                      mongoose.model("DiscordUserData").updateOne ({userID: rpsUser}, {
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
                    if (result === 2) {
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`It's a draw! You didn't win or lose any SparkCoins.`);
                      message.channel.send(fbwlembed);
                    }
                    if (result === 0) {
                      console.log(`User lost ${SparkCoinsBET} SparkCoins.`);
                      let sparkcoinlogmembed = new Discord.MessageEmbed()
                      .setColor("#7c889c")
                      .setDescription(`**${message.author.username}** lost ${SparkCoinsBET} SparkCoins.`)
                      .setFooter("RPS");
                      bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
                      let fbwlembed = new Discord.MessageEmbed()
                      .setColor(`${data.col}`)
                      .setTitle(`Rock Paper Scissors ⛰️📄✂️`)
                      .setDescription(`⛰️Rock beats ✂️Scissors! You lost ${args[1]} SparkCoins!`);
                      message.channel.send(fbwlembed);
                      let userSparkCoinsNEW = userSparkCoins - SparkCoinsBET;
                      mongoose.model("DiscordUserData").updateOne ({userID: rpsUser}, {
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
                    return;
                  });
                }, 500);
              }, 1000);
            }, 1000);
          }
        } else {
          console.log("User CAN'T afford bet.");
          let ntenghembed = new Discord.MessageEmbed()
          .setColor(`${data.col}`)
          .setDescription(`❗ Not enough SparkCoins!`)
          .setFooter(`You have ${userSparkCoins}.`);
          return message.channel.send(ntenghembed);
        }
      }
    }
  });
}

module.exports.help = {
  name: "rps"
}

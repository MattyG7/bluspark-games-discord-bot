const Discord = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mLab database!");
  }
});

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();


var discordUserDataSchema = new mongoose.Schema ({
  userID: String,
  sparkcoins: Number,
  currentxp: Number,
  targetxp: Number,
  level: Number,
  dailydate: String,
  dailystreak: Number,
  col: String,
  web: String,
  yt: String,
  tw: String,
  lo: String,
  lastbowled: String,
  lastplayeddeal: String,
  lastplayedmemory: String,
  lastkicked: String,
  lastrolled: String
});
var DiscordUserData = mongoose.model("DiscordUserData", discordUserDataSchema);


fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("guildMemberAdd", member => {
  console.log(`Someone new has joined the server`);
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("your ~ commands", {type: "LISTENING"});
});


bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.author.bot) return;

  let prefix = "~";
  let author = "MasterBluspark#0119";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  //LOAD IN VARIABLES
  //let coins = 100;
  //let level = 0;
  //let xphave = 2;
  //let xptogo = 8;
  //let xpforlvl = 10;
  //-----------------

  //WORD COUNT FOR XP
  let wordCount = 1;
  args.forEach(element => {
    wordCount++;
  });
  console.log(`Word count for ${message.author.username}: ${wordCount}`);
  //console.log(`+ ${wordCount} exp`);
  console.log(`+ ${wordCount}xp`);
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let userColour = data.col;
      let userCurrentXP = data.currentxp;
      let userGoalXP = data.targetxp;
      let OverflowXP = 0;
      let userNowXP = userCurrentXP + wordCount;
      let userLevel = data.level;
      console.log(`${userCurrentXP}xp + ${wordCount}xp = ${userNowXP}xp`);
      if (userNowXP === userGoalXP || userNowXP > userGoalXP) {
        OverflowXP = userNowXP - userGoalXP;
        let userLevelNEW = userLevel + 1;
        let userIcon = message.author.displayAvatarURL;
        let lvlupembed = new Discord.RichEmbed()
        .setColor(`#${userColour}`)
        .setThumbnail(`${userIcon}`)
        .setTitle(`✨ Level Up!`)
        .setDescription(`You reached level ${userLevelNEW}!`);
        message.channel.send(lvlupembed);
        console.log(`Level Up! User grew from level ${userLevel} to ${userLevelNEW}.`);
        console.log(`Overflow XP is ${OverflowXP} and was added to user's current level XP count.`);
        let userGoalXPNEW_UNROUNDED = userGoalXP * 1.2;
        let userGoalXPNEW = Math.round(userGoalXPNEW_UNROUNDED);
        console.log(`XP needed to next level has gone up from ${userGoalXP} to ${userGoalXPNEW}.`);
        mongoose.model("DiscordUserData").updateOne ({userID: `${message.author.id}`}, {
          currentxp: `${OverflowXP}`,
          targetxp: `${userGoalXPNEW}`,
          level: `${userLevelNEW}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully set overflow XP as current XP, increased target XP by 1.2 and added 1 to the level!`);
            console.log(`- BEFORE: ${userCurrentXP}/${userGoalXP}. AFTER: ${OverflowXP}/${userGoalXPNEW}`);
            console.log(`- BEFORE: ${userLevel}. AFTER: ${userLevelNEW}`);
          }
        });
      } else {
        mongoose.model("DiscordUserData").updateOne ({userID: `${message.author.id}`}, {
          currentxp: `${userNowXP}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully added new XP to current XP!`);
            console.log(`- BEFORE: ${userCurrentXP}. AFTER: ${userNowXP}`);
          }
        });
      }
    }
  });

  if (message.content.startsWith(prefix)) {
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args, author, messageArray);
  }
  else {
    if (message.channel.name === "rules-and-info") {
      if (message.content.toLowerCase() === "i agree") {
        let MsgAuthorID = `${message.author.id}`;
        message.delete();
        console.log(`The new user has agreed to the server's rules and info.`);
        message.member.addRole('679460991150587936');
        message.member.removeRole ('681232507492106281');
        message.author.send(`⚡ Welcome to Bluspark Studio's Discord server! I hope you'll find this an enjoyable server to be a member of.\n\n- Master Bluspark`);
        DiscordUserData.create ({
          userID: MsgAuthorID,
          sparkcoins: 0,
          currentxp: 0,
          targetxp: 100,
          level: 1,
          dailydate: "no-date",
          dailystreak: 0,
          col: "not-set",
          web: "not-set",
          yt: "not-set",
          tw: "not-set",
          lo: "not-set",
          lastbowled: "no-date",
          lastplayeddeal: "no-date",
          lastplayedmemory: "no-date",
          lastkicked: "no-date",
          lastrolled: "no-date"
        }, function(error, data) {
          if (error) {
            console.log("ALERT! User couldn't be added to mLab database!");
            console.log(error);
          } else {
            console.log("SUCCESS! User added to mLab database!");
            console.log(data);
          }
        });
        //======================================================
        let result = "0";
        let welcome = `:arrow_forward:  Welcome.`;
        let repliesCHOICE = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
        let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
        if(resultCHOICE === 0) {
          let replies = ["has just joined the best server on Discord!", "joined us. Be nice.", "arrived with with our Pizza!", "has spawned in our server.", "is finally here. Don’t celebrate too hard!", "is approaching. Hide quick!", "has just joined us and they’re a bit shy. Be freindly.", "is here. Hide your SparkCoins!"];
          result = Math.floor((Math.random() * replies.length));
          welcome = `:arrow_forward:  **${message.author.username}** ${replies[result]}`;
        }
        if(resultCHOICE === 1) {
          let replies = ["has just joined the best server on Discord!", "joined us. Be nice.", "arrived with with our Pizza!", "has spawned in our server.", "is finally here. Don’t celebrate too hard!", "is approaching. Hide quick!", "has just joined us and they’re a bit shy. Be freindly.", "is here. Hide your SparkCoins!"];
          result = Math.floor((Math.random() * replies.length));
          welcome = `:arrow_forward:  **${message.author.username}** ${replies[result]}`;
        }
        if(resultCHOICE === 2) {
          let replies = ["just landed!", "smashed through the firewall into our server!"];
          result = Math.floor((Math.random() * replies.length));
          welcome = `:arrow_forward:  BOOM! **${message.author.username}** ${replies[result]}`;
        }
        if(resultCHOICE === 3) {
          welcome = `:arrow_forward:  Oh no, **${message.author.username}** is here.`;
        }
        if(resultCHOICE === 4) {
          welcome = `:arrow_forward:  Guess what? **${message.author.username}** has joined us. Be sure to make them feel welcome.`;
        }
        if(resultCHOICE === 5) {
          welcome = `:arrow_forward:  POOF! **${message.author.username}** has magically appeared.`;
        }
        if(resultCHOICE === 6) {
          welcome = `:arrow_forward:  A wild **${message.author.username}** appeared.`;
        }
        if(resultCHOICE === 7) {
          let replies = ["Oh great, look what the cat dragged in. ", "Look who I found, ", "Better late than never, ", "Everyone, quiet down. We have a new member. Their name is "];
          result = Math.floor((Math.random() * replies.length));
          welcome = `:arrow_forward:  ${replies[result]}**${message.author.username}**.`;
        }
        if(resultCHOICE === 8) {
          welcome = `:arrow_forward:  I was out for a walk and found **${message.author.username}**. Can we keep them?`;
        }
        if(resultCHOICE === 9) {
          welcome = `:arrow_forward:  Wake up everyone! **${message.author.username}** is here!`;
        }
        if(resultCHOICE === 10) {
          welcome = `:arrow_forward:  Swoooosh, **${message.author.username}** has just landed.`;
        }
        if(resultCHOICE === 11) {
          welcome = `:arrow_forward:  BANG! **${message.author.username}** fell from space and landed in our server. Don't worry, they're ok.`;
        }
        if(resultCHOICE === 12) {
          welcome = `:arrow_forward:  Big **${message.author.username}** showed up.`;
        }
        if(resultCHOICE === 13) {
          welcome = `:arrow_forward:  Welcome, **${message.author.username}**. Have a ba-I mean good time.`;
        }
        if(resultCHOICE === 14) {
          welcome = `:arrow_forward:  Strawberries are red, some M&Ms are blue, we have a member called **${message.author.username}** who is new.`;
        }
        if(resultCHOICE === 15) {
          welcome = `:arrow_forward:  Welcome to the worst Discord server in the world, **${message.author.username}**. Jk, it isn’t too bad here.`;
        }
        if(resultCHOICE === 16) {
          welcome = `:arrow_forward:  Welcome **${message.author.username}**. I hope you brought donuts for us all.`;
        }
        if(resultCHOICE === 17) {
          welcome = `:arrow_forward:  memberCount + 1; welcomeMessage = "Welcome, **${message.author.username}**;`;
        }
        if(resultCHOICE === 18) {
          let replies = ["has just joined the best server on Discord!", "joined us. Be nice.", "arrived with with our Pizza!", "has spawned in our server.", "is finally here. Don’t celebrate too hard!", "is approaching. Hide quick!", "has just joined us and they’re a bit shy. Be freindly.", "is here. Hide your SparkCoins!"];
          result = Math.floor((Math.random() * replies.length));
          welcome = `:arrow_forward:  **${message.author.username}** ${replies[result]}`;
        }
        //======================================================
        let wlcmembed = new Discord.RichEmbed()
        .setColor("#1c9472")
        .setDescription(welcome);
        bot.channels.get(`681245368025219257`).send(wlcmembed);
        //======================================================
      }
      else {
        message.delete();
        message.channel.send(`Please type **i agree**.`).then(sentMessage => { sentMessage.delete(2000); });
      }
    }

    if (message.content === "Thanks blu" || message.content === "Thank you blu" || message.content === "Thanks bot" || message.content === "Thank you bot") {
      return message.channel.send(`You're welcome.`);
    }
    if (message.content === "Not you" || message.content === "No not you") {
      return message.channel.send(`Oh, sorry! 😅`);
    }
    //let lastDigitOfNumber = message.content.slice(-1);
    //let lastDigitOfNumberNUMBER = parseInt(lastDigitOfNumber);
    //if (lastDigitOfNumberNUMBER === 0 || lastDigitOfNumberNUMBER === 5) {
      //return message.channel.send(`Yes`);
    //} else {
      //return message.channel.send(`No`);
    //}
    //if (args[0] === "abc") {
      //let num = parseInt(args[1]);
      //let lastDigitOfNumberNUMBER = num % 10;
      //return message.channel.send(lastDigitOfNumberNUMBER);
    //}
    return;
  }

});
bot.login(process.env.token);

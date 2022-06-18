const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const dealGameBUSY = new Set();
const dealGameMESSAGEID = new Set();
const dealGameMESSAGEIDbankeroffer = new Set();
const dealGameTYPE = new Set(); //low or high
const dealGameBoxSparkCoins = new Set(); //-125 to 250 OR -250 to 500
const dealGameBoxSparkCoinsUNCHANGED = new Set();
const dealGameBoxNumbers = new Set(); //1-22
const dealGameChosenBox = new Set();
const dealGameUser = new Set();
const dealGameUsername = new Set();
const dealGameSparkCoins = new Set();
const dealGameBankOffer = new Set();
const dealGameTempSet = new Set();
//https://www.dealornodeal.co.uk/deal-no-deal-rules/

module.exports.run = async (bot, message, args) => {
  if (args[1] && args[0] != "no" && args[1] != "deal") return message.channel.send(`${message.author.username}, please use the correct format: ~deal low or ~deal high.`);
  if (!args[0]) return message.channel.send(`${message.author.username}, please use the correct format: ~deal low or ~deal high.`);
  if (args[0] === "?") {
    return message.channel.send(`For most of the game, you need to type "~deal" and then a number from 1 to 21. To start with, you choose the box you want. Next, you'll have to pick a box, five times. The boxes will be opened and will remove a negative or positive SparkCoin value from what's left. The banker will then call and give you an offer. You can accept by typing "~deal deal" or reject by typing "~deal no deal". If you reject, you will go through up to another 4 rounds where you pick 3 boxes in each and then 1 round where you pick 2 boxes. There will also be an offer from The Banker at the end of each of those rounds. When there are 2 boxes left, you can choose to keep your box or swap ("~deal keep" or "deal swap").`);
  }

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

  var datetime = new Date();
  var datetimeToday = datetime.toISOString().slice(0,10);
  if (datetimeToday === usersData.lastplayeddeal) {
    //CANT PLAY TODAY
    return message.channel.send("You have already played this game today.");
    //^^^^^^^^^^^^^^
  } else {
    //CAN PLAY TODAY
    let gameUser = Array.from(dealGameUser);
    console.log(gameUser);
    //console.log(gameUser[0]);

    if (args[0] === "end") {
      if (dealGameUser.size === 0) {
        return message.channel.send(`There isn't a game of Deal in play.`);
      } else {
        //let gameUser = Array.from(dealGameUser); DECLARED ABOVE
        if (gameUser[0] === message.author.id) {
          dealGameBUSY.clear();
          dealGameMESSAGEID.clear();
          dealGameMESSAGEIDbankeroffer.clear();
          dealGameTYPE.clear();
          dealGameBoxSparkCoins.clear();
          dealGameBoxSparkCoinsUNCHANGED.clear();
          dealGameBoxNumbers.clear();
          dealGameChosenBox.clear();
          dealGameUser.clear();
          dealGameUsername.clear();
          dealGameSparkCoins.clear();
          dealGameBankOffer.clear();
          dealGameTempSet.clear();
          return message.channel.send(`Your game of Deal has ended.`);
        } else {
          return message.channel.send(`This isn't your game! Please wait until it has ended.`);
        }
      }
    }

    let ChosenBox = "";
    if (gameUser[0] === message.author.id) {
      ChosenBox = Array.from(dealGameChosenBox);
      console.log(ChosenBox);
      //console.log(ChosenBox[0]);
    }
    if (ChosenBox[0] === "waitingforfirstchoice") {
      if (gameUser[0] != message.author.id) {
        message.channel.bulkDelete(1);
        return message.channel.send(`This isn't your game! Please wait until it has ended.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
      if (isNaN(args[0])) {
        if (args[0] != "deal" && args[0] != "keep" && args[0] != "swap") {
          if (args[0] != "no" && args[1] != "deal") {
            message.channel.bulkDelete(1);
            return message.channel.send(`${message.author.username}, please use numbers: ~deal 1 ... ~deal 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
          }
        }
      }
      let choice = parseInt(args[0]);
      message.channel.bulkDelete(1);
      if (choice > 0 && choice < 22) {
        console.log(`User's box: ${choice}`);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        //let gameSparkCoinsTMP = [];
        //let gameBoxNumbersTMP = [];
        choice--;
        choice = gameBoxNumbers[choice];
        console.log(choice);
        console.log(gameSparkCoins);
        console.log(gameBoxNumbers);
        //return;
        for (i = 0; i < gameBoxNumbers.length; i++) {
          console.log(gameBoxNumbers[i] + "=" + choice);
          if (gameBoxNumbers[i] === choice) {
            dealGameChosenBox.clear();
            dealGameChosenBox.add(gameBoxNumbers[i]);
            let parsedGameSparkCoins = parseInt(gameSparkCoins[i]);
            dealGameChosenBox.add(parsedGameSparkCoins);
            console.log(gameBoxNumbers[i]);
            console.log(gameSparkCoins[i]);
            gameBoxNumbers[i] = "<:dealboxemptyplace:695360518394740758>";
            //gameSparkCoins[i] = "out";
            i = gameBoxNumbers.length;
          }
        }
        dealGameBoxSparkCoins.clear();
        dealGameBoxNumbers.clear();
        dealGameBoxSparkCoins.add(gameSparkCoins);
        dealGameBoxNumbers.add(gameBoxNumbers);
        //Unchanged SparkCoin amount and sorting of it
        let gameSparkCoins_U = Array.from(dealGameBoxSparkCoinsUNCHANGED);
        gameSparkCoins_U = gameSparkCoins_U[0];
        let gameSparkCoinsSTRING_BLUE = "";
        let gameSparkCoinsSTRING_RED = "";
        for (j = 0; j < gameSparkCoins_U.length; j++) {
          if (gameSparkCoins_U[j] > 0) {
            gameSparkCoinsSTRING_RED = `${gameSparkCoinsSTRING_RED}${gameSparkCoins_U[j]} **|** `;
          } else {
            gameSparkCoinsSTRING_BLUE = `${gameSparkCoinsSTRING_BLUE}${gameSparkCoins_U[j]} **|** `;
          }
        }
        gameSparkCoinsSTRING_RED = gameSparkCoinsSTRING_RED.slice(0, -7);
        gameSparkCoinsSTRING_BLUE = gameSparkCoinsSTRING_BLUE.slice(0, -7);
        //dealGameBoxSparkCoinsUNCHANGED.clear(); NO
        //dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoinsSTRING_RED); NO
        //dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoinsSTRING_BLUE); NO
        //console.log(gameBoxNumbers);
        //console.log(gameSparkCoins);
        let botMessage = Array.from(dealGameMESSAGEID);
        botMessage = botMessage[0];
        dealGameChosenBox.add("firstround");
        dealGameChosenBox.add(5);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${choice}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Pick 5 boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        return botMessage.edit(fbwlembed);
        //console.log(`Not LOW or HIGH...`);
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`${message.author.username}, please use a number between 1 and 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }

    if (args[0] === "low" || args[0] === "high") {
      if (dealGameUser.size === 0) {
        dealGameUser.add(message.author.id);
        dealGameUsername.add(message.author.username);
        if (args[0] === "low") {
          dealGameTYPE.add("LOW");
          let arrDealGameBoxSparkCoins = ["-125", "-100", "-75", "-50", "-25", "-10", "-5", "-1", "1", "5", "10", "25", "50", "75", "100", "125", "150", "175", "200", "225", "250"];
          let unchangedBoxSparkCoins = ["-125", "-100", "-75", "-50", "-25", "-10", "-5", "-1", "1", "5", "10", "25", "50", "75", "100", "125", "150", "175", "200", "225", "250"];
          dealGameBoxSparkCoinsUNCHANGED.add(unchangedBoxSparkCoins);
          //Shuffle
          let currentIndex = arrDealGameBoxSparkCoins.length, temporaryValue, randomIndex;
          while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arrDealGameBoxSparkCoins[currentIndex];
            arrDealGameBoxSparkCoins[currentIndex] = arrDealGameBoxSparkCoins[randomIndex];
            arrDealGameBoxSparkCoins[randomIndex] = temporaryValue;
          }
          console.log(arrDealGameBoxSparkCoins);
          let arrDealGameBoxNumbers = ["<:dealboxclosed1:695281194706927707>", "<:dealboxclosed2:695281227833540668>", "<:dealboxclosed3:695303634535055364>", "<:dealboxclosed4:695303685625872455>", "<:dealboxclosed5:695303716378640466>", "<:dealboxclosed6:695303802747879464>", "<:dealboxclosed7:695303810867920897>", "<:dealboxclosed8:695303821978632223>", "<:dealboxclosed9:695303831482925058>", "<:dealboxclosed10:695303840085573796>", "<:dealboxclosed11:695303848180449300>", "<:dealboxclosed12:695303857009459242>", "<:dealboxclosed13:695303864122998965>", "<:dealboxclosed14:695303871861489685>", "<:dealboxclosed15:695350119880589463>", "<:dealboxclosed16:695350320867442840>", "<:dealboxclosed17:695350337955037235>", "<:dealboxclosed18:695350355881492590>", "<:dealboxclosed19:695350380493537420>", "<:dealboxclosed20:695350393689079869>", "<:dealboxclosed21:695350411028070421>"];
          dealGameBoxSparkCoins.add(arrDealGameBoxSparkCoins);
          dealGameBoxNumbers.add(arrDealGameBoxNumbers);
          dealGameChosenBox.add("waitingforfirstchoice");
          let fbwlembed = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> <:dealboxemptyplace:695360518394740758>\n\n*BOXES*\n> <:dealboxclosed1:695281194706927707> <:dealboxclosed2:695281227833540668> <:dealboxclosed3:695303634535055364> <:dealboxclosed4:695303685625872455> <:dealboxclosed5:695303716378640466> <:dealboxclosed6:695303802747879464> <:dealboxclosed7:695303810867920897> <:dealboxclosed8:695303821978632223> <:dealboxclosed9:695303831482925058> <:dealboxclosed10:695303840085573796> <:dealboxclosed11:695303848180449300> <:dealboxclosed12:695303857009459242> <:dealboxclosed13:695303864122998965> <:dealboxclosed14:695303871861489685> <:dealboxclosed15:695350119880589463> <:dealboxclosed16:695350320867442840> <:dealboxclosed17:695350337955037235> <:dealboxclosed18:695350355881492590> <:dealboxclosed19:695350380493537420> <:dealboxclosed20:695350393689079869> <:dealboxclosed21:695350411028070421>\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: -125 **|** -100 **|** -75 **|** -50 **|** -25 **|** -10 **|** -5 **|** -1\n> :red_circle: 1 **|** 5 **|** 10 **|** 25 **|** 50 **|** 75 **|** 100 **|** 125 **|** 150 **|** 175 **|** 200 **|** 225 **|** 250\n\n--------------------\n:point_right: **Pick a box.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          let botMessage = await message.channel.send(fbwlembed);
          dealGameMESSAGEID.add(botMessage);
          return;
        }
        if (args[0] === "high") {
          dealGameTYPE.add("HIGH");
          let arrDealGameBoxSparkCoins = ["-250", "-200", "-150", "-100", "-50", "-25", "-10", "-5", "5", "10", "25", "50", "100", "150", "200", "250", "300", "350", "400", "450", "500"];
          let unchangedBoxSparkCoins = ["-250", "-200", "-150", "-100", "-50", "-25", "-10", "-5", "5", "10", "25", "50", "100", "150", "200", "250", "300", "350", "400", "450", "500"];
          dealGameBoxSparkCoinsUNCHANGED.add(unchangedBoxSparkCoins);
          //Shuffle
          let currentIndex = arrDealGameBoxSparkCoins.length, temporaryValue, randomIndex;
          while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arrDealGameBoxSparkCoins[currentIndex];
            arrDealGameBoxSparkCoins[currentIndex] = arrDealGameBoxSparkCoins[randomIndex];
            arrDealGameBoxSparkCoins[randomIndex] = temporaryValue;
          }
          console.log(arrDealGameBoxSparkCoins);
          let arrDealGameBoxNumbers = ["<:dealboxclosed1:695281194706927707>", "<:dealboxclosed2:695281227833540668>", "<:dealboxclosed3:695303634535055364>", "<:dealboxclosed4:695303685625872455>", "<:dealboxclosed5:695303716378640466>", "<:dealboxclosed6:695303802747879464>", "<:dealboxclosed7:695303810867920897>", "<:dealboxclosed8:695303821978632223>", "<:dealboxclosed9:695303831482925058>", "<:dealboxclosed10:695303840085573796>", "<:dealboxclosed11:695303848180449300>", "<:dealboxclosed12:695303857009459242>", "<:dealboxclosed13:695303864122998965>", "<:dealboxclosed14:695303871861489685>", "<:dealboxclosed15:695350119880589463>", "<:dealboxclosed16:695350320867442840>", "<:dealboxclosed17:695350337955037235>", "<:dealboxclosed18:695350355881492590>", "<:dealboxclosed19:695350380493537420>", "<:dealboxclosed20:695350393689079869>", "<:dealboxclosed21:695350411028070421>"];
          dealGameBoxSparkCoins.add(arrDealGameBoxSparkCoins);
          dealGameBoxNumbers.add(arrDealGameBoxNumbers);
          dealGameChosenBox.add("waitingforfirstchoice");
          let fbwlembed = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> <:dealboxemptyplace:695360518394740758>\n\n*BOXES*\n> <:dealboxclosed1:695281194706927707> <:dealboxclosed2:695281227833540668> <:dealboxclosed3:695303634535055364> <:dealboxclosed4:695303685625872455> <:dealboxclosed5:695303716378640466> <:dealboxclosed6:695303802747879464> <:dealboxclosed7:695303810867920897> <:dealboxclosed8:695303821978632223> <:dealboxclosed9:695303831482925058> <:dealboxclosed10:695303840085573796> <:dealboxclosed11:695303848180449300> <:dealboxclosed12:695303857009459242> <:dealboxclosed13:695303864122998965> <:dealboxclosed14:695303871861489685> <:dealboxclosed15:695350119880589463> <:dealboxclosed16:695350320867442840> <:dealboxclosed17:695350337955037235> <:dealboxclosed18:695350355881492590> <:dealboxclosed19:695350380493537420> <:dealboxclosed20:695350393689079869> <:dealboxclosed21:695350411028070421>\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: -250 **|** -200 **|** -150 **|** -100 **|** -50 **|** -25 **|** -10 **|** -5\n> :red_circle: 5 **|** 10 **|** 25 **|** 50 **|** 100 **|** 150 **|** 200 **|** 250 **|** 300 **|** 350 **|** 400 **|** 450 **|** 500\n\n--------------------\n:point_right: **Pick a box.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          let botMessage = await message.channel.send(fbwlembed);
          dealGameMESSAGEID.add(botMessage);
          return;
        }
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`Please wait until the current game of Deal ends.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }
    if (isNaN(args[0])) {
      if (args[0] != "deal" && args[0] != "keep" && args[0] != "swap") {
        if (args[0] != "no" && args[1] != "deal") {
          message.channel.bulkDelete(1);
          return message.channel.send(`${message.author.username}, please use numbers: ~deal 1 ... ~deal 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
      }
    }

    //let gameType = Array.from(dealGameTYPE);
    //console.log(gameType + " & " + dealGameTYPE);
    let botMessage = Array.from(dealGameMESSAGEID);
    botMessage = botMessage[0];
    if (gameUser[0] != message.author.id) {
      message.channel.bulkDelete(1);
      return message.channel.send(`This isn't your game! Please wait until it has ended.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
    }
    //==============================================
    // FIRST ROUND
    //==============================================
    //ChosenBox[0] = box number server emoji
    //ChosenBox[1] = box number's sparkcoin amount
    //ChosenBox[2] = game state
    //ChosenBox[3] = turns left of round
    if (ChosenBox[2] === "firstround") {
      let dealUser = message.author.id;
      let choice = parseInt(args[0]);
      message.channel.bulkDelete(1);
      if (choice > 0 && choice < 22) {
        console.log("First Round");
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        choice--;
        if (gameBoxNumbers[choice] === "<:dealboxemptyplace:695360518394740758>" || gameBoxNumbers[choice] === "<:dealboxopenred:695354325870051329>" || gameBoxNumbers[choice] === "<:dealboxopenblue:695354293653602444>") {
          return message.channel.send(`You have already chosen this box`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
        console.log(gameBoxNumbers[choice]);
        console.log(gameSparkCoins[choice]);
        let choiceSparkCoinAmount = gameSparkCoins[choice];
        if (gameSparkCoins[choice] > 0) {
          gameBoxNumbers[choice] = "<:dealboxopenred:695354325870051329>";
          gameSparkCoins[choice] = "out";
        } else {
          gameBoxNumbers[choice] = "<:dealboxopenblue:695354293653602444>";
          gameSparkCoins[choice] = "out";
        }
        console.log(gameBoxNumbers);
        dealGameBoxNumbers.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxNumbers.add(gameBoxNumbers);
        dealGameBoxSparkCoins.add(gameSparkCoins);
        //Unchanged SparkCoin amount and sorting of it
        let gameSparkCoins_U = Array.from(dealGameBoxSparkCoinsUNCHANGED);
        gameSparkCoins_U = gameSparkCoins_U[0];
        let gameSparkCoinsSTRING_BLUE = "";
        let gameSparkCoinsSTRING_RED = "";
        for (k = 0; k < gameSparkCoins_U.length; k++) {
          if (gameSparkCoins_U[k] === choiceSparkCoinAmount) {
            console.log(`Removed ${gameSparkCoins_U[k]}.`);
            gameSparkCoins_U.splice(k, 1);
            k = gameSparkCoins_U.length;
          }
        }
        let gameSparkCoins_UU = gameSparkCoins_U;
        let offer = 0;
        let offerTmp = 0;
        let positiveCount = 0;
        let negativeCount = 0;
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoins_UU);
        for (j = 0; j < gameSparkCoins_UU.length; j++) {
          if (gameSparkCoins_UU[j] > 0) {
            gameSparkCoinsSTRING_RED = `${gameSparkCoinsSTRING_RED}${gameSparkCoins_UU[j]} **|** `;
            offerTmp = parseInt(gameSparkCoins_UU[j]);
            offer = offer + offerTmp;
            positiveCount++;
          } else {
            gameSparkCoinsSTRING_BLUE = `${gameSparkCoinsSTRING_BLUE}${gameSparkCoins_UU[j]} **|** `;
            negativeCount++;
          }
        }
        gameSparkCoinsSTRING_RED = gameSparkCoinsSTRING_RED.slice(0, -7);
        gameSparkCoinsSTRING_BLUE = gameSparkCoinsSTRING_BLUE.slice(0, -7);
        let botMessage = Array.from(dealGameMESSAGEID);
        botMessage = botMessage[0];
        let roundTurn = ChosenBox[3] - 1;
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Pick ${roundTurn} boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        if (roundTurn === 0) {
          console.log(`Banker calls`);
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("secondround");
          dealGameChosenBox.add("bankerofferresponse");
          console.log(dealGameChosenBox);
          let offerNew = offer / positiveCount;
          offerNew = Math.round(offerNew);
          console.log(`${offer} / ${positiveCount} = ${offerNew}`);
          let decimal = 1;
          for (z = negativeCount; z > 0; z--) {
            decimal = decimal - 0.1;
          }
          let offerNewNew = offerNew * decimal;
          offerNewNew = Math.round(offerNewNew);
          console.log(`${offerNew} x ${decimal} = ${offerNewNew}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_RED}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_BLUE}`);
          dealGameTempSet.add(offerNewNew);
          console.log(dealGameTempSet);
          fbwlembed
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Accept or decline The Banker's offer.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          botMessage.edit(fbwlembed);
          let fbwlembedd = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          //.setTitle(`Banker 📞`)
          .setDescription(`***The Banker*** has called and is offering **${offerNewNew} Sparkcoins**.\n\n"*Deal*" or "*No Deal*"?`);
          let botMessageOFFER = await message.channel.send(fbwlembedd);
          dealGameMESSAGEIDbankeroffer.add(botMessageOFFER);
          return;
        } else {
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("firstround");
          dealGameChosenBox.add(roundTurn);
          console.log(dealGameChosenBox);
          return;
        }
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`${message.author.username}, please use a number between 1 and 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }
    //==============================================
    // BANKER OFFER (1st to 2nd)
    //==============================================
    if (ChosenBox[2] === "secondround" && ChosenBox[3] === "bankerofferresponse") {
      let word1 = args[0].toLowerCase();
      let word2 = "";
      if (args[1]) {
        word2 = args[1].toLowerCase();
      }
      if (word1 === "deal") {
        console.log("User said DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        botMessageOFFER.delete();
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** won ${tempSet[2]} SparkCoins.`)
        .setFooter("Deal");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n------------------------------------------------------------------------\n:point_right: **The Banker's offer was accpeted. You won ${tempSet[2]} SparkCoins!**\n------------------------------------------------------------------------`);
        botMessage.edit(fbwlembed);
        //RESET GAME
        dealGameBUSY.clear();
        dealGameMESSAGEID.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        dealGameTYPE.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxNumbers.clear();
        dealGameChosenBox.clear();
        dealGameUser.clear();
        dealGameUsername.clear();
        dealGameSparkCoins.clear();
        dealGameBankOffer.clear();
        dealGameTempSet.clear();
        //APPLY TO DB
        let userSparkCoins = usersData.sparkcoins;
        let userSparkCoinsNEW = userSparkCoins + tempSet[2];
        await mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
          sparkcoins: `${userSparkCoinsNEW}`,
          lastplayeddeal: `${datetimeToday}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
            console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
          }
        });
        return;
      }
      if (word1 === "no" && word2 === "deal") {
        console.log("User said NO DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        dealGameTempSet.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        botMessageOFFER.delete();
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n--------------------\n:point_right: **Pick 3 boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        dealGameChosenBox.clear();
        dealGameChosenBox.add(ChosenBox[0]);
        dealGameChosenBox.add(ChosenBox[1]);
        dealGameChosenBox.add("secondround");
        dealGameChosenBox.add(3);
        console.log(dealGameChosenBox);
        return;
      }
      if (word1 != "deal") {
        if (word1 != "no" && word2 != "deal") {
          message.channel.bulkDelete(1);
          return message.channel.send(`${message.author.username}, please say ~deal deal or ~deal no deal.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
      }
    }
    //==============================================
    // SECOND ROUND
    //==============================================
    //ChosenBox[0] = box number server emoji
    //ChosenBox[1] = box number's sparkcoin amount
    //ChosenBox[2] = game state
    //ChosenBox[3] = turns left of round
    if (ChosenBox[2] === "secondround") {
      let dealUser = message.author.id;
      let choice = parseInt(args[0]);
      message.channel.bulkDelete(1);
      if (choice > 0 && choice < 22) {
        console.log("Second Round");
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        choice--;
        if (gameBoxNumbers[choice] === "<:dealboxemptyplace:695360518394740758>" || gameBoxNumbers[choice] === "<:dealboxopenred:695354325870051329>" || gameBoxNumbers[choice] === "<:dealboxopenblue:695354293653602444>") {
          return message.channel.send(`You have already chosen this box`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
        console.log(gameBoxNumbers[choice]);
        console.log(gameSparkCoins[choice]);
        let choiceSparkCoinAmount = gameSparkCoins[choice];
        if (gameSparkCoins[choice] > 0) {
          gameBoxNumbers[choice] = "<:dealboxopenred:695354325870051329>";
          gameSparkCoins[choice] = "out";
        } else {
          gameBoxNumbers[choice] = "<:dealboxopenblue:695354293653602444>";
          gameSparkCoins[choice] = "out";
        }
        console.log(gameBoxNumbers);
        dealGameBoxNumbers.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxNumbers.add(gameBoxNumbers);
        dealGameBoxSparkCoins.add(gameSparkCoins);
        //Unchanged SparkCoin amount and sorting of it
        let gameSparkCoins_U = Array.from(dealGameBoxSparkCoinsUNCHANGED);
        gameSparkCoins_U = gameSparkCoins_U[0];
        let gameSparkCoinsSTRING_BLUE = "";
        let gameSparkCoinsSTRING_RED = "";
        for (k = 0; k < gameSparkCoins_U.length; k++) {
          if (gameSparkCoins_U[k] === choiceSparkCoinAmount) {
            console.log(`Removed ${gameSparkCoins_U[k]}.`);
            gameSparkCoins_U.splice(k, 1);
            k = gameSparkCoins_U.length;
          }
        }
        let gameSparkCoins_UU = gameSparkCoins_U;
        let offer = 0;
        let offerTmp = 0;
        let positiveCount = 0;
        let negativeCount = 0;
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoins_UU);
        for (j = 0; j < gameSparkCoins_UU.length; j++) {
          if (gameSparkCoins_UU[j] > 0) {
            gameSparkCoinsSTRING_RED = `${gameSparkCoinsSTRING_RED}${gameSparkCoins_UU[j]} **|** `;
            offerTmp = parseInt(gameSparkCoins_UU[j]);
            offer = offer + offerTmp;
            positiveCount++;
          } else {
            gameSparkCoinsSTRING_BLUE = `${gameSparkCoinsSTRING_BLUE}${gameSparkCoins_UU[j]} **|** `;
            negativeCount++;
          }
        }
        gameSparkCoinsSTRING_RED = gameSparkCoinsSTRING_RED.slice(0, -7);
        gameSparkCoinsSTRING_BLUE = gameSparkCoinsSTRING_BLUE.slice(0, -7);
        let botMessage = Array.from(dealGameMESSAGEID);
        botMessage = botMessage[0];
        let roundTurn = ChosenBox[3] - 1;
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Pick ${roundTurn} boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        if (roundTurn === 0) {
          console.log(`Banker calls`);
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("thirdround");
          dealGameChosenBox.add("bankerofferresponse");
          console.log(dealGameChosenBox);
          let offerNew = offer / positiveCount;
          offerNew = Math.round(offerNew);
          console.log(`${offer} / ${positiveCount} = ${offerNew}`);
          let decimal = 1;
          for (z = negativeCount; z > 0; z--) {
            decimal = decimal - 0.1;
          }
          let offerNewNew = offerNew * decimal;
          offerNewNew = Math.round(offerNewNew);
          console.log(`${offerNew} x ${decimal} = ${offerNewNew}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_RED}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_BLUE}`);
          dealGameTempSet.add(offerNewNew);
          console.log(dealGameTempSet);
          fbwlembed
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Accept or decline The Banker's offer.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          botMessage.edit(fbwlembed);
          let fbwlembedd = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          //.setTitle(`Banker 📞`)
          .setDescription(`***The Banker*** has called and is offering **${offerNewNew} Sparkcoins**.\n\n"*Deal*" or "*No Deal*"?`);
          let botMessageOFFER = await message.channel.send(fbwlembedd);
          dealGameMESSAGEIDbankeroffer.add(botMessageOFFER);
          return;
        } else {
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("secondround");
          dealGameChosenBox.add(roundTurn);
          console.log(dealGameChosenBox);
          return;
        }
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`${message.author.username}, please use a number between 1 and 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }
    //==============================================
    // BANKER OFFER (2nd to 3rd)
    //==============================================
    if (ChosenBox[2] === "thirdround" && ChosenBox[3] === "bankerofferresponse") {
      let word1 = args[0].toLowerCase();
      let word2 = "";
      if (args[1]) {
        word2 = args[1].toLowerCase();
      }
      if (word1 === "deal") {
        console.log("User said DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        botMessageOFFER.delete();
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** won ${tempSet[2]} SparkCoins.`)
        .setFooter("Deal");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n------------------------------------------------------------------------\n:point_right: **The Banker's offer was accpeted. You won ${tempSet[2]} SparkCoins!**\n------------------------------------------------------------------------`);
        botMessage.edit(fbwlembed);
        //RESET GAME
        dealGameBUSY.clear();
        dealGameMESSAGEID.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        dealGameTYPE.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxNumbers.clear();
        dealGameChosenBox.clear();
        dealGameUser.clear();
        dealGameUsername.clear();
        dealGameSparkCoins.clear();
        dealGameBankOffer.clear();
        dealGameTempSet.clear();
        //APPLY TO DB
        let userSparkCoins = usersData.sparkcoins;
        let userSparkCoinsNEW = userSparkCoins + tempSet[2];
        await mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
          sparkcoins: `${userSparkCoinsNEW}`,
          lastplayeddeal: `${datetimeToday}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
            console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
          }
        });
        return;
      }
      if (word1 === "no" && word2 === "deal") {
        console.log("User said NO DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        dealGameTempSet.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        botMessageOFFER.delete();
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n--------------------\n:point_right: **Pick 3 boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        dealGameChosenBox.clear();
        dealGameChosenBox.add(ChosenBox[0]);
        dealGameChosenBox.add(ChosenBox[1]);
        dealGameChosenBox.add("thirdround");
        dealGameChosenBox.add(3);
        console.log(dealGameChosenBox);
        return;
      }
      if (word1 != "deal") {
        if (word1 != "no" && word2 != "deal") {
          message.channel.bulkDelete(1);
          return message.channel.send(`${message.author.username}, please say ~deal deal or ~deal no deal.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
      }
    }
    //==============================================
    // THIRD ROUND
    //==============================================
    //ChosenBox[0] = box number server emoji
    //ChosenBox[1] = box number's sparkcoin amount
    //ChosenBox[2] = game state
    //ChosenBox[3] = turns left of round
    if (ChosenBox[2] === "thirdround") {
      let dealUser = message.author.id;
      let choice = parseInt(args[0]);
      message.channel.bulkDelete(1);
      if (choice > 0 && choice < 22) {
        console.log("Third Round");
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        choice--;
        if (gameBoxNumbers[choice] === "<:dealboxemptyplace:695360518394740758>" || gameBoxNumbers[choice] === "<:dealboxopenred:695354325870051329>" || gameBoxNumbers[choice] === "<:dealboxopenblue:695354293653602444>") {
          return message.channel.send(`You have already chosen this box`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
        console.log(gameBoxNumbers[choice]);
        console.log(gameSparkCoins[choice]);
        let choiceSparkCoinAmount = gameSparkCoins[choice];
        if (gameSparkCoins[choice] > 0) {
          gameBoxNumbers[choice] = "<:dealboxopenred:695354325870051329>";
          gameSparkCoins[choice] = "out";
        } else {
          gameBoxNumbers[choice] = "<:dealboxopenblue:695354293653602444>";
          gameSparkCoins[choice] = "out";
        }
        console.log(gameBoxNumbers);
        dealGameBoxNumbers.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxNumbers.add(gameBoxNumbers);
        dealGameBoxSparkCoins.add(gameSparkCoins);
        //Unchanged SparkCoin amount and sorting of it
        let gameSparkCoins_U = Array.from(dealGameBoxSparkCoinsUNCHANGED);
        gameSparkCoins_U = gameSparkCoins_U[0];
        let gameSparkCoinsSTRING_BLUE = "";
        let gameSparkCoinsSTRING_RED = "";
        for (k = 0; k < gameSparkCoins_U.length; k++) {
          if (gameSparkCoins_U[k] === choiceSparkCoinAmount) {
            console.log(`Removed ${gameSparkCoins_U[k]}.`);
            gameSparkCoins_U.splice(k, 1);
            k = gameSparkCoins_U.length;
          }
        }
        let gameSparkCoins_UU = gameSparkCoins_U;
        let offer = 0;
        let offerTmp = 0;
        let positiveCount = 0;
        let negativeCount = 0;
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoins_UU);
        for (j = 0; j < gameSparkCoins_UU.length; j++) {
          if (gameSparkCoins_UU[j] > 0) {
            gameSparkCoinsSTRING_RED = `${gameSparkCoinsSTRING_RED}${gameSparkCoins_UU[j]} **|** `;
            offerTmp = parseInt(gameSparkCoins_UU[j]);
            offer = offer + offerTmp;
            positiveCount++;
          } else {
            gameSparkCoinsSTRING_BLUE = `${gameSparkCoinsSTRING_BLUE}${gameSparkCoins_UU[j]} **|** `;
            negativeCount++;
          }
        }
        if (gameSparkCoinsSTRING_RED.length != 0) {
          gameSparkCoinsSTRING_RED = gameSparkCoinsSTRING_RED.slice(0, -7);
        }
        if (gameSparkCoinsSTRING_BLUE.length != 0) {
          gameSparkCoinsSTRING_BLUE = gameSparkCoinsSTRING_BLUE.slice(0, -7);
        }
        let botMessage = Array.from(dealGameMESSAGEID);
        botMessage = botMessage[0];
        let roundTurn = ChosenBox[3] - 1;
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Pick ${roundTurn} boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        if (roundTurn === 0) {
          console.log(`Banker calls`);
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("fourthround");
          dealGameChosenBox.add("bankerofferresponse");
          console.log(dealGameChosenBox);
          let offerNew = offer / positiveCount;
          offerNew = Math.round(offerNew);
          console.log(`${offer} / ${positiveCount} = ${offerNew}`);
          let decimal = 1;
          for (z = negativeCount; z > 0; z--) {
            decimal = decimal - 0.1;
          }
          let offerNewNew = offerNew * decimal;
          offerNewNew = Math.round(offerNewNew);
          console.log(`${offerNew} x ${decimal} = ${offerNewNew}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_RED}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_BLUE}`);
          dealGameTempSet.add(offerNewNew);
          console.log(dealGameTempSet);
          fbwlembed
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Accept or decline The Banker's offer.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          botMessage.edit(fbwlembed);
          let fbwlembedd = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          //.setTitle(`Banker 📞`)
          .setDescription(`***The Banker*** has called and is offering **${offerNewNew} Sparkcoins**.\n\n"*Deal*" or "*No Deal*"?`);
          let botMessageOFFER = await message.channel.send(fbwlembedd);
          dealGameMESSAGEIDbankeroffer.add(botMessageOFFER);
          return;
        } else {
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("thirdround");
          dealGameChosenBox.add(roundTurn);
          console.log(dealGameChosenBox);
          return;
        }
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`${message.author.username}, please use a number between 1 and 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }
    //==============================================
    // BANKER OFFER (3rd to 4th)
    //==============================================
    if (ChosenBox[2] === "fourthround" && ChosenBox[3] === "bankerofferresponse") {
      let word1 = args[0].toLowerCase();
      let word2 = "";
      if (args[1]) {
        word2 = args[1].toLowerCase();
      }
      if (word1 === "deal") {
        console.log("User said DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        botMessageOFFER.delete();
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** won ${tempSet[2]} SparkCoins.`)
        .setFooter("Deal");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n------------------------------------------------------------------------\n:point_right: **The Banker's offer was accpeted. You won ${tempSet[2]} SparkCoins!**\n------------------------------------------------------------------------`);
        botMessage.edit(fbwlembed);
        //RESET GAME
        dealGameBUSY.clear();
        dealGameMESSAGEID.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        dealGameTYPE.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxNumbers.clear();
        dealGameChosenBox.clear();
        dealGameUser.clear();
        dealGameUsername.clear();
        dealGameSparkCoins.clear();
        dealGameBankOffer.clear();
        dealGameTempSet.clear();
        //APPLY TO DB
        let userSparkCoins = usersData.sparkcoins;
        let userSparkCoinsNEW = userSparkCoins + tempSet[2];
        await mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
          sparkcoins: `${userSparkCoinsNEW}`,
          lastplayeddeal: `${datetimeToday}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
            console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
          }
        });
        return;
      }
      if (word1 === "no" && word2 === "deal") {
        console.log("User said NO DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        dealGameTempSet.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        botMessageOFFER.delete();
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n--------------------\n:point_right: **Pick 3 boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        dealGameChosenBox.clear();
        dealGameChosenBox.add(ChosenBox[0]);
        dealGameChosenBox.add(ChosenBox[1]);
        dealGameChosenBox.add("fourthround");
        dealGameChosenBox.add(3);
        console.log(dealGameChosenBox);
        return;
      }
      if (word1 != "deal") {
        if (word1 != "no" && word2 != "deal") {
          message.channel.bulkDelete(1);
          return message.channel.send(`${message.author.username}, please say ~deal deal or ~deal no deal.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
      }
    }
    //==============================================
    // FOURTH ROUND
    //==============================================
    //ChosenBox[0] = box number server emoji
    //ChosenBox[1] = box number's sparkcoin amount
    //ChosenBox[2] = game state
    //ChosenBox[3] = turns left of round
    if (ChosenBox[2] === "fourthround") {
      let dealUser = message.author.id;
      let choice = parseInt(args[0]);
      message.channel.bulkDelete(1);
      if (choice > 0 && choice < 22) {
        console.log("Fourth Round");
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        choice--;
        if (gameBoxNumbers[choice] === "<:dealboxemptyplace:695360518394740758>" || gameBoxNumbers[choice] === "<:dealboxopenred:695354325870051329>" || gameBoxNumbers[choice] === "<:dealboxopenblue:695354293653602444>") {
          return message.channel.send(`You have already chosen this box`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
        console.log(gameBoxNumbers[choice]);
        console.log(gameSparkCoins[choice]);
        let choiceSparkCoinAmount = gameSparkCoins[choice];
        if (gameSparkCoins[choice] > 0) {
          gameBoxNumbers[choice] = "<:dealboxopenred:695354325870051329>";
          gameSparkCoins[choice] = "out";
        } else {
          gameBoxNumbers[choice] = "<:dealboxopenblue:695354293653602444>";
          gameSparkCoins[choice] = "out";
        }
        console.log(gameBoxNumbers);
        dealGameBoxNumbers.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxNumbers.add(gameBoxNumbers);
        dealGameBoxSparkCoins.add(gameSparkCoins);
        //Unchanged SparkCoin amount and sorting of it
        let gameSparkCoins_U = Array.from(dealGameBoxSparkCoinsUNCHANGED);
        gameSparkCoins_U = gameSparkCoins_U[0];
        let gameSparkCoinsSTRING_BLUE = "";
        let gameSparkCoinsSTRING_RED = "";
        for (k = 0; k < gameSparkCoins_U.length; k++) {
          if (gameSparkCoins_U[k] === choiceSparkCoinAmount) {
            console.log(`Removed ${gameSparkCoins_U[k]}.`);
            gameSparkCoins_U.splice(k, 1);
            k = gameSparkCoins_U.length;
          }
        }
        let gameSparkCoins_UU = gameSparkCoins_U;
        let offer = 0;
        let offerTmp = 0;
        let positiveCount = 0;
        let negativeCount = 0;
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoins_UU);
        for (j = 0; j < gameSparkCoins_UU.length; j++) {
          if (gameSparkCoins_UU[j] > 0) {
            gameSparkCoinsSTRING_RED = `${gameSparkCoinsSTRING_RED}${gameSparkCoins_UU[j]} **|** `;
            offerTmp = parseInt(gameSparkCoins_UU[j]);
            offer = offer + offerTmp;
            positiveCount++;
          } else {
            gameSparkCoinsSTRING_BLUE = `${gameSparkCoinsSTRING_BLUE}${gameSparkCoins_UU[j]} **|** `;
            negativeCount++;
          }
        }
        if (gameSparkCoinsSTRING_RED.length != 0) {
          gameSparkCoinsSTRING_RED = gameSparkCoinsSTRING_RED.slice(0, -7);
        }
        if (gameSparkCoinsSTRING_BLUE.length != 0) {
          gameSparkCoinsSTRING_BLUE = gameSparkCoinsSTRING_BLUE.slice(0, -7);
        }
        let botMessage = Array.from(dealGameMESSAGEID);
        botMessage = botMessage[0];
        let roundTurn = ChosenBox[3] - 1;
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Pick ${roundTurn} boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        if (roundTurn === 0) {
          console.log(`Banker calls`);
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("fifthround");
          dealGameChosenBox.add("bankerofferresponse");
          console.log(dealGameChosenBox);
          let offerNew = offer / positiveCount;
          offerNew = Math.round(offerNew);
          console.log(`${offer} / ${positiveCount} = ${offerNew}`);
          let decimal = 1;
          for (z = negativeCount; z > 0; z--) {
            decimal = decimal - 0.1;
          }
          let offerNewNew = offerNew * decimal;
          offerNewNew = Math.round(offerNewNew);
          console.log(`${offerNew} x ${decimal} = ${offerNewNew}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_RED}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_BLUE}`);
          dealGameTempSet.add(offerNewNew);
          console.log(dealGameTempSet);
          fbwlembed
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Accept or decline The Banker's offer.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          botMessage.edit(fbwlembed);
          let fbwlembedd = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          //.setTitle(`Banker 📞`)
          .setDescription(`***The Banker*** has called and is offering **${offerNewNew} Sparkcoins**.\n\n"*Deal*" or "*No Deal*"?`);
          let botMessageOFFER = await message.channel.send(fbwlembedd);
          dealGameMESSAGEIDbankeroffer.add(botMessageOFFER);
          return;
        } else {
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("fourthround");
          dealGameChosenBox.add(roundTurn);
          console.log(dealGameChosenBox);
          return;
        }
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`${message.author.username}, please use a number between 1 and 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }
    //==============================================
    // BANKER OFFER (4th to 5th)
    //==============================================
    if (ChosenBox[2] === "fifthround" && ChosenBox[3] === "bankerofferresponse") {
      let word1 = args[0].toLowerCase();
      let word2 = "";
      if (args[1]) {
        word2 = args[1].toLowerCase();
      }
      if (word1 === "deal") {
        console.log("User said DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        botMessageOFFER.delete();
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** won ${tempSet[2]} SparkCoins.`)
        .setFooter("Deal");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n------------------------------------------------------------------------\n:point_right: **The Banker's offer was accpeted. You won ${tempSet[2]} SparkCoins!**\n------------------------------------------------------------------------`);
        botMessage.edit(fbwlembed);
        //RESET GAME
        dealGameBUSY.clear();
        dealGameMESSAGEID.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        dealGameTYPE.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxNumbers.clear();
        dealGameChosenBox.clear();
        dealGameUser.clear();
        dealGameUsername.clear();
        dealGameSparkCoins.clear();
        dealGameBankOffer.clear();
        dealGameTempSet.clear();
        //APPLY TO DB
        let userSparkCoins = usersData.sparkcoins;
        let userSparkCoinsNEW = userSparkCoins + tempSet[2];
        await mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
          sparkcoins: `${userSparkCoinsNEW}`,
          lastplayeddeal: `${datetimeToday}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
            console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
          }
        });
        return;
      }
      if (word1 === "no" && word2 === "deal") {
        console.log("User said NO DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        dealGameTempSet.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        botMessageOFFER.delete();
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n--------------------\n:point_right: **Pick 3 boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        dealGameChosenBox.clear();
        dealGameChosenBox.add(ChosenBox[0]);
        dealGameChosenBox.add(ChosenBox[1]);
        dealGameChosenBox.add("fifthround");
        dealGameChosenBox.add(3);
        console.log(dealGameChosenBox);
        return;
      }
      if (word1 != "deal") {
        if (word1 != "no" && word2 != "deal") {
          message.channel.bulkDelete(1);
          return message.channel.send(`${message.author.username}, please say ~deal deal or ~deal no deal.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
      }
    }
    //==============================================
    // FIFTH ROUND
    //==============================================
    //ChosenBox[0] = box number server emoji
    //ChosenBox[1] = box number's sparkcoin amount
    //ChosenBox[2] = game state
    //ChosenBox[3] = turns left of round
    if (ChosenBox[2] === "fifthround") {
      let dealUser = message.author.id;
      let choice = parseInt(args[0]);
      message.channel.bulkDelete(1);
      if (choice > 0 && choice < 22) {
        console.log("Fifth Round");
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        choice--;
        if (gameBoxNumbers[choice] === "<:dealboxemptyplace:695360518394740758>" || gameBoxNumbers[choice] === "<:dealboxopenred:695354325870051329>" || gameBoxNumbers[choice] === "<:dealboxopenblue:695354293653602444>") {
          return message.channel.send(`You have already chosen this box`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
        console.log(gameBoxNumbers[choice]);
        console.log(gameSparkCoins[choice]);
        let choiceSparkCoinAmount = gameSparkCoins[choice];
        if (gameSparkCoins[choice] > 0) {
          gameBoxNumbers[choice] = "<:dealboxopenred:695354325870051329>";
          gameSparkCoins[choice] = "out";
        } else {
          gameBoxNumbers[choice] = "<:dealboxopenblue:695354293653602444>";
          gameSparkCoins[choice] = "out";
        }
        console.log(gameBoxNumbers);
        dealGameBoxNumbers.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxNumbers.add(gameBoxNumbers);
        dealGameBoxSparkCoins.add(gameSparkCoins);
        //Unchanged SparkCoin amount and sorting of it
        let gameSparkCoins_U = Array.from(dealGameBoxSparkCoinsUNCHANGED);
        gameSparkCoins_U = gameSparkCoins_U[0];
        let gameSparkCoinsSTRING_BLUE = "";
        let gameSparkCoinsSTRING_RED = "";
        for (k = 0; k < gameSparkCoins_U.length; k++) {
          if (gameSparkCoins_U[k] === choiceSparkCoinAmount) {
            console.log(`Removed ${gameSparkCoins_U[k]}.`);
            gameSparkCoins_U.splice(k, 1);
            k = gameSparkCoins_U.length;
          }
        }
        let gameSparkCoins_UU = gameSparkCoins_U;
        let offer = 0;
        let offerTmp = 0;
        let positiveCount = 0;
        let negativeCount = 0;
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoins_UU);
        for (j = 0; j < gameSparkCoins_UU.length; j++) {
          if (gameSparkCoins_UU[j] > 0) {
            gameSparkCoinsSTRING_RED = `${gameSparkCoinsSTRING_RED}${gameSparkCoins_UU[j]} **|** `;
            offerTmp = parseInt(gameSparkCoins_UU[j]);
            offer = offer + offerTmp;
            positiveCount++;
          } else {
            gameSparkCoinsSTRING_BLUE = `${gameSparkCoinsSTRING_BLUE}${gameSparkCoins_UU[j]} **|** `;
            negativeCount++;
          }
        }
        if (gameSparkCoinsSTRING_RED.length != 0) {
          gameSparkCoinsSTRING_RED = gameSparkCoinsSTRING_RED.slice(0, -7);
        }
        if (gameSparkCoinsSTRING_BLUE.length != 0) {
          gameSparkCoinsSTRING_BLUE = gameSparkCoinsSTRING_BLUE.slice(0, -7);
        }
        let botMessage = Array.from(dealGameMESSAGEID);
        botMessage = botMessage[0];
        let roundTurn = ChosenBox[3] - 1;
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Pick ${roundTurn} boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        if (roundTurn === 0) {
          console.log(`Banker calls`);
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("sixthround");
          dealGameChosenBox.add("bankerofferresponse");
          console.log(dealGameChosenBox);
          let offerNew = offer / positiveCount;
          offerNew = Math.round(offerNew);
          console.log(`${offer} / ${positiveCount} = ${offerNew}`);
          let decimal = 1;
          for (z = negativeCount; z > 0; z--) {
            decimal = decimal - 0.1;
          }
          let offerNewNew = offerNew * decimal;
          offerNewNew = Math.round(offerNewNew);
          console.log(`${offerNew} x ${decimal} = ${offerNewNew}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_RED}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_BLUE}`);
          dealGameTempSet.add(offerNewNew);
          console.log(dealGameTempSet);
          fbwlembed
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Accept or decline The Banker's offer.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          botMessage.edit(fbwlembed);
          let fbwlembedd = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          //.setTitle(`Banker 📞`)
          .setDescription(`***The Banker*** has called and is offering **${offerNewNew} Sparkcoins**.\n\n"*Deal*" or "*No Deal*"?`);
          let botMessageOFFER = await message.channel.send(fbwlembedd);
          dealGameMESSAGEIDbankeroffer.add(botMessageOFFER);
          return;
        } else {
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("fifthround");
          dealGameChosenBox.add(roundTurn);
          console.log(dealGameChosenBox);
          return;
        }
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`${message.author.username}, please use a number between 1 and 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }
    //==============================================
    // BANKER OFFER (5th to 6th)
    //==============================================
    if (ChosenBox[2] === "sixthround" && ChosenBox[3] === "bankerofferresponse") {
      let word1 = args[0].toLowerCase();
      let word2 = "";
      if (args[1]) {
        word2 = args[1].toLowerCase();
      }
      if (word1 === "deal") {
        console.log("User said DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        botMessageOFFER.delete();
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** won ${tempSet[2]} SparkCoins.`)
        .setFooter("Deal");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n------------------------------------------------------------------------\n:point_right: **The Banker's offer was accpeted. You won ${tempSet[2]} SparkCoins!**\n------------------------------------------------------------------------`);
        botMessage.edit(fbwlembed);
        //RESET GAME
        dealGameBUSY.clear();
        dealGameMESSAGEID.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        dealGameTYPE.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxNumbers.clear();
        dealGameChosenBox.clear();
        dealGameUser.clear();
        dealGameUsername.clear();
        dealGameSparkCoins.clear();
        dealGameBankOffer.clear();
        dealGameTempSet.clear();
        //APPLY TO DB
        let userSparkCoins = usersData.sparkcoins;
        let userSparkCoinsNEW = userSparkCoins + tempSet[2];
        await mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
          sparkcoins: `${userSparkCoinsNEW}`,
          lastplayeddeal: `${datetimeToday}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
            console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
          }
        });
        return;
      }
      if (word1 === "no" && word2 === "deal") {
        console.log("User said NO DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        dealGameTempSet.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        botMessageOFFER.delete();
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n--------------------\n:point_right: **Pick 2 boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        dealGameChosenBox.clear();
        dealGameChosenBox.add(ChosenBox[0]);
        dealGameChosenBox.add(ChosenBox[1]);
        dealGameChosenBox.add("sixthround");
        dealGameChosenBox.add(2);
        console.log(dealGameChosenBox);
        return;
      }
      if (word1 != "deal") {
        if (word1 != "no" && word2 != "deal") {
          message.channel.bulkDelete(1);
          return message.channel.send(`${message.author.username}, please say ~deal deal or ~deal no deal.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
      }
    }
    //==============================================
    // SIXTH ROUND
    //==============================================
    //ChosenBox[0] = box number server emoji
    //ChosenBox[1] = box number's sparkcoin amount
    //ChosenBox[2] = game state
    //ChosenBox[3] = turns left of round
    if (ChosenBox[2] === "sixthround") {
      let dealUser = message.author.id;
      let choice = parseInt(args[0]);
      message.channel.bulkDelete(1);
      if (choice > 0 && choice < 22) {
        console.log("Sixth Round");
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        choice--;
        if (gameBoxNumbers[choice] === "<:dealboxemptyplace:695360518394740758>" || gameBoxNumbers[choice] === "<:dealboxopenred:695354325870051329>" || gameBoxNumbers[choice] === "<:dealboxopenblue:695354293653602444>") {
          return message.channel.send(`You have already chosen this box`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
        console.log(gameBoxNumbers[choice]);
        console.log(gameSparkCoins[choice]);
        let choiceSparkCoinAmount = gameSparkCoins[choice];
        if (gameSparkCoins[choice] > 0) {
          gameBoxNumbers[choice] = "<:dealboxopenred:695354325870051329>";
          gameSparkCoins[choice] = "out";
        } else {
          gameBoxNumbers[choice] = "<:dealboxopenblue:695354293653602444>";
          gameSparkCoins[choice] = "out";
        }
        console.log(gameBoxNumbers);
        dealGameBoxNumbers.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxNumbers.add(gameBoxNumbers);
        dealGameBoxSparkCoins.add(gameSparkCoins);
        //Unchanged SparkCoin amount and sorting of it
        let gameSparkCoins_U = Array.from(dealGameBoxSparkCoinsUNCHANGED);
        gameSparkCoins_U = gameSparkCoins_U[0];
        let gameSparkCoinsSTRING_BLUE = "";
        let gameSparkCoinsSTRING_RED = "";
        for (k = 0; k < gameSparkCoins_U.length; k++) {
          if (gameSparkCoins_U[k] === choiceSparkCoinAmount) {
            console.log(`Removed ${gameSparkCoins_U[k]}.`);
            gameSparkCoins_U.splice(k, 1);
            k = gameSparkCoins_U.length;
          }
        }
        let gameSparkCoins_UU = gameSparkCoins_U;
        let offer = 0;
        let offerTmp = 0;
        let positiveCount = 0;
        let negativeCount = 0;
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxSparkCoinsUNCHANGED.add(gameSparkCoins_UU);
        for (j = 0; j < gameSparkCoins_UU.length; j++) {
          if (gameSparkCoins_UU[j] > 0) {
            gameSparkCoinsSTRING_RED = `${gameSparkCoinsSTRING_RED}${gameSparkCoins_UU[j]} **|** `;
            offerTmp = parseInt(gameSparkCoins_UU[j]);
            offer = offer + offerTmp;
            positiveCount++;
          } else {
            gameSparkCoinsSTRING_BLUE = `${gameSparkCoinsSTRING_BLUE}${gameSparkCoins_UU[j]} **|** `;
            negativeCount++;
          }
        }
        if (gameSparkCoinsSTRING_RED.length != 0) {
          gameSparkCoinsSTRING_RED = gameSparkCoinsSTRING_RED.slice(0, -7);
        }
        if (gameSparkCoinsSTRING_BLUE.length != 0) {
          gameSparkCoinsSTRING_BLUE = gameSparkCoinsSTRING_BLUE.slice(0, -7);
        }
        let botMessage = Array.from(dealGameMESSAGEID);
        botMessage = botMessage[0];
        let roundTurn = ChosenBox[3] - 1;
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------\n:point_right: **Pick ${roundTurn} boxes.**\n--------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        if (roundTurn === 0) {
          console.log(`Banker calls`);
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("end");
          dealGameChosenBox.add("bankerofferresponse");
          console.log(dealGameChosenBox);
          let offerNew = offer / positiveCount;
          offerNew = Math.round(offerNew);
          console.log(`${offer} / ${positiveCount} = ${offerNew}`);
          let decimal = 1;
          for (z = negativeCount; z > 0; z--) {
            decimal = decimal - 0.1;
          }
          let offerNewNew = offerNew * decimal;
          offerNewNew = Math.round(offerNewNew);
          console.log(`${offerNew} x ${decimal} = ${offerNewNew}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_RED}`);
          dealGameTempSet.add(`${gameSparkCoinsSTRING_BLUE}`);
          dealGameTempSet.add(offerNewNew);
          console.log(dealGameTempSet);
          fbwlembed
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${gameSparkCoinsSTRING_BLUE}\n> :red_circle: ${gameSparkCoinsSTRING_RED}\n\n--------------------------------------\n:point_right: **Accept or decline The Banker's offer.**\n--------------------------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
          botMessage.edit(fbwlembed);
          let fbwlembedd = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          //.setTitle(`Banker 📞`)
          .setDescription(`***The Banker*** has called and is offering **${offerNewNew} Sparkcoins**.\n\n"*Deal*" or "*No Deal*"?`);
          let botMessageOFFER = await message.channel.send(fbwlembedd);
          dealGameMESSAGEIDbankeroffer.add(botMessageOFFER);
          return;
        } else {
          dealGameChosenBox.clear();
          dealGameChosenBox.add(ChosenBox[0]);
          dealGameChosenBox.add(ChosenBox[1]);
          dealGameChosenBox.add("sixthround");
          dealGameChosenBox.add(roundTurn);
          console.log(dealGameChosenBox);
          return;
        }
      } else {
        message.channel.bulkDelete(1);
        return message.channel.send(`${message.author.username}, please use a number between 1 and 21.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
    }
    //==============================================
    // BANKER OFFER (6th to end)
    //==============================================
    if (ChosenBox[2] === "end" && ChosenBox[3] === "bankerofferresponse") {
      let word1 = args[0].toLowerCase();
      let word2 = "";
      if (args[1]) {
        word2 = args[1].toLowerCase();
      }
      if (word1 === "deal") {
        console.log("User said DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        botMessageOFFER.delete();
        let sparkcoinlogmembed = new Discord.MessageEmbed()
        .setColor("#7c889c")
        .setDescription(`**${message.author.username}** won ${tempSet[2]} SparkCoins.`)
        .setFooter("Deal");
        bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n------------------------------------------------------------------------\n:point_right: **The Banker's offer was accpeted. You won ${tempSet[2]} SparkCoins!**\n------------------------------------------------------------------------`);
        botMessage.edit(fbwlembed);
        //RESET GAME
        dealGameBUSY.clear();
        dealGameMESSAGEID.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        dealGameTYPE.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxNumbers.clear();
        dealGameChosenBox.clear();
        dealGameUser.clear();
        dealGameUsername.clear();
        dealGameSparkCoins.clear();
        dealGameBankOffer.clear();
        dealGameTempSet.clear();
        //APPLY TO DB
        let userSparkCoins = usersData.sparkcoins;
        let userSparkCoinsNEW = userSparkCoins + tempSet[2];
        await mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
          sparkcoins: `${userSparkCoinsNEW}`,
          lastplayeddeal: `${datetimeToday}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
            console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
          }
        });
        return;
      }
      if (word1 === "no" && word2 === "deal") {
        console.log("User said NO DEAL!");
        message.channel.bulkDelete(1);
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        let fbwlembedd = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        //.setTitle(`Banker 📞`)
        .setDescription(`Would you like to **keep** your box or **swap** it for the one that's left?\n\n"*Keep*" or "*Swap*"?`);
        botMessageOFFER.edit(fbwlembedd);
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]}\n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n-----------------------------------\n:point_right: **Answer the final question.**\n-----------------------------------\n\n*Type "~deal ?" if you don't know how to play.*`);
        botMessage.edit(fbwlembed);
        dealGameChosenBox.clear();
        dealGameChosenBox.add(ChosenBox[0]);
        dealGameChosenBox.add(ChosenBox[1]);
        dealGameChosenBox.add("end");
        dealGameChosenBox.add("end");
        console.log(dealGameChosenBox);
        return;
      }
      if (word1 != "deal") {
        if (word1 != "no" && word2 != "deal") {
          message.channel.bulkDelete(1);
          return message.channel.send(`${message.author.username}, please say ~deal deal or ~deal no deal.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
        }
      }
    }
    //==============================================
    // End (keep or swap)
    //==============================================
    //ChosenBox[0] = box number server emoji
    //ChosenBox[1] = box number's sparkcoin amount
    //ChosenBox[2] = game state
    //ChosenBox[3] = turns left of round
    if (ChosenBox[2] === "end") {
      let dealUser = message.author.id;
      let choice = args[0];
      message.channel.bulkDelete(1);
      if (choice != "keep" && choice != "swap") {
        return message.channel.send(`${message.author.username}, please say ~deal keep or ~deal swap.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
      }
      //================
      // KEEP
      //================
      if (choice === "keep") {
        console.log("End (kept box)");
        //Declare all that is needed
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        //--------------------------
        let boxCol = "";
        let gameOutcome = "";
        if (ChosenBox[1] > 0) {
          boxCol = "<:dealboxopenred:695354325870051329>";
          gameOutcome = "win";
        } else {
          boxCol = "<:dealboxopenblue:695354293653602444>";
          gameOutcome = "lose";
        }
        botMessageOFFER.delete();
        if (gameOutcome === "win") {
          let sparkcoinlogmembed = new Discord.MessageEmbed()
          .setColor("#7c889c")
          .setDescription(`**${message.author.username}** won ${ChosenBox[1]} SparkCoins.`)
          .setFooter("Deal");
          bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
          let fbwlembed = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${boxCol} \n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n---------------------------------------------------------------\n:point_right: **You kept your box. You won ${ChosenBox[1]} SparkCoins!**\n---------------------------------------------------------------`);
          botMessage.edit(fbwlembed);
        }
        if (gameOutcome === "lose") {
          let sparkcoinlogmembed = new Discord.MessageEmbed()
          .setColor("#7c889c")
          .setDescription(`**${message.author.username}** lost ${ChosenBox[1]} SparkCoins.`)
          .setFooter("Deal");
          bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
          let fbwlembed = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          .setTitle(`Deal 📦`)
          .setDescription(`*YOUR BOX*\n> ${boxCol} \n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n---------------------------------------------------------------\n:point_right: **You kept your box. You lose ${ChosenBox[1]} SparkCoins.**\n---------------------------------------------------------------`);
          botMessage.edit(fbwlembed);
        }
        //Reset the game
        dealGameBUSY.clear();
        dealGameMESSAGEID.clear();
        dealGameMESSAGEIDbankeroffer.clear();
        dealGameTYPE.clear();
        dealGameBoxSparkCoins.clear();
        dealGameBoxSparkCoinsUNCHANGED.clear();
        dealGameBoxNumbers.clear();
        dealGameChosenBox.clear();
        dealGameUser.clear();
        dealGameUsername.clear();
        dealGameSparkCoins.clear();
        dealGameBankOffer.clear();
        dealGameTempSet.clear();
        //--------------
        //Apply to db
        let userSparkCoins = usersData.sparkcoins;
        let userSparkCoinsNEW = userSparkCoins + ChosenBox[1];
        await mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
          sparkcoins: `${userSparkCoinsNEW}`,
          lastplayeddeal: `${datetimeToday}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
            console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
            console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
          }
        });
        //-----------
        console.log("End of game.");
        return;
      }
      //================
      // SWAP
      //================
      if (choice === "swap") {
        console.log("End (swapped box)");
        //Declare all that is needed
        let gameSparkCoins = Array.from(dealGameBoxSparkCoins);
        gameSparkCoins = gameSparkCoins[0];
        let gameBoxNumbers = Array.from(dealGameBoxNumbers);
        gameBoxNumbers = gameBoxNumbers[0];
        let botMessageOFFER = Array.from(dealGameMESSAGEIDbankeroffer);
        botMessageOFFER = botMessageOFFER[0];
        let tempSet = Array.from(dealGameTempSet);
        //tempSet = gameSparkCoinsSTRING_RED
        //tempSet = gameSparkCoinsSTRING_BLUE
        //tempSet = offerNewNew
        //--------------------------
        for (l = 0; l < gameBoxNumbers.length; l++) {
          if (gameBoxNumbers[l] != "<:dealboxemptyplace:695360518394740758>" && gameBoxNumbers[l] != "<:dealboxopenred:695354325870051329>" && gameBoxNumbers[l] != "<:dealboxopenblue:695354293653602444>") {
            console.log("Swapped!");
            let tmpVar1 = gameBoxNumbers[l]; //emoji
            let tmpVar2 = gameSparkCoins[l]; //amount
            gameBoxNumbers[l] = ChosenBox[0]; //emoji
            gameSparkCoins[l] = ChosenBox[1]; //amount
            ChosenBox[0] = tmpVar1; //emoji
            ChosenBox[1] = parseInt(tmpVar2); //amount
            l = gameBoxNumbers.length;
          }
        }
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Deal 📦`)
        .setDescription(`*YOUR BOX*\n> ${ChosenBox[0]} \n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n-----------------------------------------------------------------\n:point_right: **You swapped your box. Now opening the box you swapped...**\n-----------------------------------------------------------------`);
        botMessage.edit(fbwlembed);
        //SMALL WAIT...
        await setTimeout(() => {
          let boxCol = "";
          let gameOutcome = "";
          if (ChosenBox[1] > 0) {
            boxCol = "<:dealboxopenred:695354325870051329>";
            gameOutcome = "win";
          } else {
            boxCol = "<:dealboxopenblue:695354293653602444>";
            gameOutcome = "lose";
          }
          botMessageOFFER.delete();
          if (gameOutcome === "win") {
            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${message.author.username}** won ${ChosenBox[1]} SparkCoins.`)
            .setFooter("Deal");
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let fbwlembed = new Discord.MessageEmbed()
            .setColor(`${usersData.col}`)
            .setTitle(`Deal 📦`)
            .setDescription(`*YOUR BOX*\n> ${boxCol} \n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n-----------------------------------------------------------------\n:point_right: **You swapped your box. You won ${ChosenBox[1]} SparkCoins!**\n-----------------------------------------------------------------`);
            botMessage.edit(fbwlembed);
          }
          if (gameOutcome === "lose") {
            let sparkcoinlogmembed = new Discord.MessageEmbed()
            .setColor("#7c889c")
            .setDescription(`**${message.author.username}** lost ${ChosenBox[1]} SparkCoins.`)
            .setFooter("Deal");
            bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
            let fbwlembed = new Discord.MessageEmbed()
            .setColor(`${usersData.col}`)
            .setTitle(`Deal 📦`)
            .setDescription(`*YOUR BOX*\n> ${boxCol} \n\n*BOXES*\n> ${gameBoxNumbers[0]} ${gameBoxNumbers[1]} ${gameBoxNumbers[2]} ${gameBoxNumbers[3]} ${gameBoxNumbers[4]} ${gameBoxNumbers[5]} ${gameBoxNumbers[6]} ${gameBoxNumbers[7]} ${gameBoxNumbers[8]} ${gameBoxNumbers[9]} ${gameBoxNumbers[10]} ${gameBoxNumbers[11]} ${gameBoxNumbers[12]} ${gameBoxNumbers[13]} ${gameBoxNumbers[14]} ${gameBoxNumbers[15]} ${gameBoxNumbers[16]} ${gameBoxNumbers[17]} ${gameBoxNumbers[18]} ${gameBoxNumbers[19]} ${gameBoxNumbers[20]}\n\n*SPARKCOIN VALUES LEFT*\n> :blue_circle: ${tempSet[1]}\n> :red_circle: ${tempSet[0]}\n\n-----------------------------------------------------------------\n:point_right: **You swapped your box. You lose ${ChosenBox[1]} SparkCoins.**\n-----------------------------------------------------------------`);
            botMessage.edit(fbwlembed);
          }
          //Reset the game
          dealGameBUSY.clear();
          dealGameMESSAGEID.clear();
          dealGameMESSAGEIDbankeroffer.clear();
          dealGameTYPE.clear();
          dealGameBoxSparkCoins.clear();
          dealGameBoxSparkCoinsUNCHANGED.clear();
          dealGameBoxNumbers.clear();
          dealGameChosenBox.clear();
          dealGameUser.clear();
          dealGameUsername.clear();
          dealGameSparkCoins.clear();
          dealGameBankOffer.clear();
          dealGameTempSet.clear();
          //--------------
          //Apply to db
          let userSparkCoins = usersData.sparkcoins;
          let userSparkCoinsNEW = userSparkCoins + ChosenBox[1];
          mongoose.model("DiscordUserData").updateMany ({userID: gameUser}, {
            sparkcoins: `${userSparkCoinsNEW}`,
            lastplayeddeal: `${datetimeToday}`
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log(`Successfully updated user's SparkCoins amount and last played deal date!`);
              console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
              console.log(`- BEFORE: ${usersData.lastplayeddeal}. AFTER: ${datetimeToday}`);
            }
          });
          //-----------
          console.log("End of game.");
          return;
        }, 4000);
      }
    }
    return;
    //^^^^^^^^^^^^^^
  }
}

module.exports.help = {
  name: "deal"
}

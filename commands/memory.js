const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const memoryGameBUSY = new Set();
const memoryGameMESSAGEID = new Set();
const memoryGameLastCommand = new Set();
const memoryGamePairCommands = new Set();
const memoryGamePairCommandsTEMP = new Set();
const memoryGameROW1 = new Set();
const memoryGameROW2 = new Set();
const memoryGameROW3 = new Set();
const memoryGameROW1C = new Set();
const memoryGameROW2C = new Set();
const memoryGameROW3C = new Set();
const memoryGameROW1C_back = new Set();
const memoryGameROW2C_back = new Set();
const memoryGameROW3C_back = new Set();
const memoryGameUser = new Set();
const memoryGameUsername = new Set();
const memoryGameSparkCoins = new Set();
const memoryGameLives = new Set();
const memoryGamePairs = new Set();
const memoryGameChoices = new Set();
const memoryGameChoice1 = new Set();
const memoryGameChoice2 = new Set();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//https://www.youtube.com/watch?v=mWaG9Ugi2bg

module.exports.run = async (bot, message, args) => {
  if(args[2]) return message.channel.send(`${message.author.username}, please use the correct format: ~memory.`);
  if (args[0] === "?") {
    memoryGameBUSY.clear();
    memoryGameBUSY.add("NO");
    return message.channel.send(`Type "~memory" and then any letter combination from A1 to C6 to choose which square you'd like to reveal. You can choose two per turn. If the two revealed emojis match, they will stay and not change back to a square.\n\n*Example command: ~memory B2*`);
  }

  let memUser = message.author.id;
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
  if (datetimeToday === usersData.lastplayedmemory) {
    return message.channel.send("You have already played this game today.");
  } else {
    let ARRmemoryGameBUSY = Array.from(memoryGameBUSY);
  	ARRmemoryGameBUSY = ARRmemoryGameBUSY[0];
      console.log(ARRmemoryGameBUSY);
    if (ARRmemoryGameBUSY === "YES") {
      console.log("Game is busy, user needs to wait!");
      message.delete();
      return message.channel.send(`Please wait.`).then(msg => {setTimeout(() => msg.delete(), 2000)});
    } else {
      memoryGameBUSY.clear();
      memoryGameBUSY.add("YES");
    }

    if (args[0] === "end") {
  		message.delete();
  		if (memoryGameUser.size === 0) {
  			console.log("No game in play!");
        memoryGameBUSY.clear();
        memoryGameBUSY.add("NO");
        return message.channel.send(`There is currently no game in play.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
  		}
  		let ARRmemoryGameUser = Array.from(memoryGameUser);
  		ARRmemoryGameUser = ARRmemoryGameUser[0];
  		//console.log(ARRmemoryGameUser);
  		//console.log(memUser);
  		if (ARRmemoryGameUser != memUser) {
        console.log("Can't end another user's game!");
        memoryGameBUSY.clear();
        memoryGameBUSY.add("NO");
        return message.channel.send(`You can't end someone else's game! Please wait until it finishes.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
  		}
  		let aRRmemoryGameMESSAGEID = Array.from(memoryGameMESSAGEID);
      aRRmemoryGameMESSAGEID = aRRmemoryGameMESSAGEID[0];
      let ARRr1 = Array.from(memoryGameROW1);
      ARRr1 = ARRr1[0];
      let ARRr2 = Array.from(memoryGameROW2);
      ARRr2 = ARRr2[0];
      let ARRr3 = Array.from(memoryGameROW3);
      ARRr3 = ARRr3[0];
  		let ARRr1C = Array.from(memoryGameROW1C);
      ARRr1C = ARRr1C[0];
      let ARRr2C = Array.from(memoryGameROW2C);
      ARRr2C = ARRr2C[0];
      let ARRr3C = Array.from(memoryGameROW3C);
      ARRr3C = ARRr3C[0];
      let ARRAYmemoryGameLives = Array.from(memoryGameLives);
      ARRAYmemoryGameLives = ARRAYmemoryGameLives[0];
      let ARRAYmemoryGamePairs = Array.from(memoryGamePairs);
      ARRAYmemoryGamePairs = ARRAYmemoryGamePairs[0];
  		let fbwlembed = new Discord.MessageEmbed()
  		.setColor(`${usersData.col}`)
  		.setTitle(`Memory 🧠`)
  		.setDescription(`Game ended.\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${ARRr1[0]} ${ARRr1[1]} ${ARRr1[2]} ${ARRr1[3]}\n${ARRr2[0]} ${ARRr2[1]} ${ARRr2[2]} ${ARRr2[3]}\n${ARRr3[0]} ${ARRr3[1]} ${ARRr3[2]} ${ARRr3[3]}\n\n**Your game of Memory has ended.**`);
  		aRRmemoryGameMESSAGEID.edit(fbwlembed);
      memoryGameMESSAGEID.clear();
      memoryGameLastCommand.clear();
      memoryGamePairCommands.clear();
      memoryGamePairCommandsTEMP.clear();
      memoryGameROW1.clear();
      memoryGameROW2.clear();
      memoryGameROW3.clear();
      memoryGameROW1C.clear();
      memoryGameROW2C.clear();
      memoryGameROW3C.clear();
      memoryGameROW1C_back.clear();
      memoryGameROW2C_back.clear();
      memoryGameROW3C_back.clear();
      memoryGameUser.clear();
      memoryGameSparkCoins.clear();
      memoryGameLives.clear();
      memoryGamePairs.clear();
      memoryGameChoices.clear();
      memoryGameChoice1.clear();
      memoryGameChoice2.clear();
      memoryGameBUSY.clear();
      memoryGameBUSY.add("NO");
  		return console.log("Game ended. Sets have been reset.");
      //return message.channel.send(`Your game of Memory has ended.`);
    }

  	let ARRmemoryGameUser = Array.from(memoryGameUser);
  	ARRmemoryGameUser = ARRmemoryGameUser[0];
    if (!args[0]) {
      if (memoryGameUser.size === 0) {
        console.log(`New game started!`);
        memoryGameUser.add(memUser);
        memoryGameUsername.add(message.author.username);
        memoryGameSparkCoins.add(0);
        memoryGameLives.add(3);
        memoryGamePairs.add(0);
        memoryGameChoices.add(2);
        console.log(`User, Lives, Pairs and Choices set!`);
        console.log(memoryGameUser);
        console.log(memoryGameLives);
        console.log(memoryGamePairs);
        console.log(memoryGameChoices);

        let result1 = 0;
        let result2 = 0;
        let result3 = 0;
        let result4 = 0;
        let result5 = 0;
        let result6 = 0;
        let replies = "";
        let repliesCHOICE = ["0", "1", "2", "3", "4", "5"];
        let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
        if(resultCHOICE === 0) {
          replies = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "☺"];
          repliesTMP = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "☺"];
          result1 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result1]) {
              result1 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result2 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result2]) {
              result2 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result3 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result3]) {
              result3 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result4 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result4]) {
              result4 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result5 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result5]) {
              result5 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result6 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result6]) {
              result6 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
        }
        if(resultCHOICE === 1) {
          replies = ["🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴"];
          repliesTMP = ["🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴"];
          result1 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result1]) {
              result1 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result2 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result2]) {
              result2 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result3 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result3]) {
              result3 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result4 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result4]) {
              result4 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result5 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result5]) {
              result5 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result6 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result6]) {
              result6 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
        }
        if(resultCHOICE === 2) {
          replies = ["😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹", "🙁", "😖", "😞", "😟", "😤", "😢"];
          repliesTMP = ["😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹", "🙁", "😖", "😞", "😟", "😤", "😢"];
          result1 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result1]) {
              result1 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result2 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result2]) {
              result2 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result3 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result3]) {
              result3 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result4 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result4]) {
              result4 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result5 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result5]) {
              result5 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result6 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result6]) {
              result6 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
        }
        if(resultCHOICE === 3) {
          replies = ["😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "🥴", "😠", "😡", "🤬", "😷"];
          repliesTMP = ["😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "🥴", "😠", "😡", "🤬", "😷"];
          result1 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result1]) {
              result1 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result2 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result2]) {
              result2 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result3 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result3]) {
              result3 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result4 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result4]) {
              result4 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result5 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result5]) {
              result5 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result6 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result6]) {
              result6 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
        }
        if(resultCHOICE === 4) {
          replies = ["🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥺", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿", "💀", "👾"];
          repliesTMP = ["🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥺", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿", "💀", "👾"];
          result1 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result1]) {
              result1 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result2 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result2]) {
              result2 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result3 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result3]) {
              result3 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result4 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result4]) {
              result4 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result5 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result5]) {
              result5 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result6 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result6]) {
              result6 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
        }
        if(resultCHOICE === 5) {
          replies = ["🤖", "💩", "🐢", "🐬", "🐥", "🐤", "🐣", "🐌", "🐛", "🐝", "🕷"];
          repliesTMP = ["🤖", "💩", "🐢", "🐬", "🐥", "🐤", "🐣", "🐌", "🐛", "🐝", "🕷"];
          result1 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result1]) {
              result1 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result2 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result2]) {
              result2 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result3 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result3]) {
              result3 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result4 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result4]) {
              result4 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result5 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result5]) {
              result5 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
          result6 = Math.floor((Math.random() * repliesTMP.length));
          for (var i = 0; i < repliesTMP.length; i++) {
            if (repliesTMP[i] === repliesTMP[result6]) {
              result6 = repliesTMP.splice(i, 1);
              i = repliesTMP.length;
            }
          }
        }

        let r1 = [];
        let r2 = [];
        let r3 = [];
        let r1S = [`◻️`, `◻️`, `◻️`, `◻️`];
        let r2S = [`◻️`, `◻️`, `◻️`, `◻️`];
        let r3S = [`◻️`, `◻️`, `◻️`, `◻️`];
        let repliesCHOICEE = ["0", "1", "2", "3"];
        let resultCHOICEE = Math.floor((Math.random() * repliesCHOICEE.length));
        if(resultCHOICEE === 0) {
          r1 = [`${result6}`, `${result1}`, `${result3}`, `${result4}`];
          r2 = [`${result5}`, `${result2}`, `${result2}`, `${result5}`];
          r3 = [`${result1}`, `${result6}`, `${result3}`, `${result4}`];
        }
        if(resultCHOICEE === 1) {
          r1 = [`${result4}`, `${result5}`, `${result2}`, `${result3}`];
          r2 = [`${result1}`, `${result4}`, `${result6}`, `${result5}`];
          r3 = [`${result2}`, `${result3}`, `${result1}`, `${result6}`];
        }
        if(resultCHOICEE === 2) {
          r1 = [`${result4}`, `${result6}`, `${result1}`, `${result5}`];
          r2 = [`${result2}`, `${result3}`, `${result4}`, `${result2}`];
          r3 = [`${result6}`, `${result3}`, `${result5}`, `${result1}`];
        }
        if(resultCHOICEE === 3) {
          r1 = [`${result6}`, `${result4}`, `${result3}`, `${result1}`];
          r2 = [`${result2}`, `${result4}`, `${result6}`, `${result5}`];
          r3 = [`${result3}`, `${result2}`, `${result5}`, `${result1}`];
        }
        memoryGameROW1.add(r1);
        memoryGameROW2.add(r2);
        memoryGameROW3.add(r3);
        console.log(`Rows of emojis set!`);
        console.log(memoryGameROW1);
        console.log(memoryGameROW2);
        console.log(memoryGameROW3);
  			memoryGameROW1C.add(r1S);
        memoryGameROW2C.add(r2S);
        memoryGameROW3C.add(r3S);
        console.log(`Rows of squares set!`);
        console.log(memoryGameROW1C);
        console.log(memoryGameROW2C);
        console.log(memoryGameROW3C);

        let lives = 3;
        let pairs = 0;
        let fbwlembed = new Discord.MessageEmbed()
        .setColor(`${usersData.col}`)
        .setTitle(`Memory 🧠`)
        .setDescription(`Game started!\nMemorise the locations. Hiding all in **10** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
        let botMessage = await message.channel.send(fbwlembed);
        console.log("Countdown begun...");
        setTimeout(() => {
          fbwlembed
            .setDescription(`Game started!\nMemorise the locations. Hiding all in **9** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
          botMessage.edit(fbwlembed);
          setTimeout(() => {
            fbwlembed
              .setDescription(`Game started!\nMemorise the locations. Hiding all in **8** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
            botMessage.edit(fbwlembed);
            setTimeout(() => {
              fbwlembed
                .setDescription(`Game started!\nMemorise the locations. Hiding all in **7** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
              botMessage.edit(fbwlembed);
              setTimeout(() => {
                fbwlembed
                  .setDescription(`Game started!\nMemorise the locations. Hiding all in **6** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
                botMessage.edit(fbwlembed);
                setTimeout(() => {
                  fbwlembed
                    .setDescription(`Game started!\nMemorise the locations. Hiding all in **5** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
                  botMessage.edit(fbwlembed);
                  setTimeout(() => {
                    fbwlembed
                      .setDescription(`Game started!\nMemorise the locations. Hiding all in **4** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
                    botMessage.edit(fbwlembed);
                    setTimeout(() => {
                      fbwlembed
                        .setDescription(`Game started!\nMemorise the locations. Hiding all in **3** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
                      botMessage.edit(fbwlembed);
                      setTimeout(() => {
                        fbwlembed
                          .setDescription(`Game started!\nMemorise the locations. Hiding all in **2** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
                        botMessage.edit(fbwlembed);
                        setTimeout(() => {
                          fbwlembed
                            .setDescription(`Game started!\nMemorise the locations. Hiding all in **1** second.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
                          botMessage.edit(fbwlembed);
                          setTimeout(() => {
                            fbwlembed
                              .setDescription(`Game started!\n*Pairs:* ${pairs} **|** *Lives:* ${lives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Type "~memory ?" if you don't know how to play.*`);
                            botMessage.edit(fbwlembed);
                            //console.log(`Message ID: ${botMessage.id}`);
                            memoryGameMESSAGEID.add(botMessage);
                            console.log("Now waiting for user's guesses...");
                            memoryGameBUSY.clear();
                            memoryGameBUSY.add("NO");
  													return;
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      } else {
  			message.delete();
  			if (ARRmemoryGameUser != memUser) {
        	console.log("Another user's game already exists!");
          memoryGameBUSY.clear();
          memoryGameBUSY.add("NO");
          return message.channel.send(`A game has already started. Please wait until it finishes.`).then(msg => {setTimeout(() => msg.delete(), 4000)});
  			} else {
  				console.log("Game already exists!");
          memoryGameBUSY.clear();
          memoryGameBUSY.add("NO");
          return message.channel.send(`You have already started a game. *Type "~memory end" to end your game early.*`).then(msg => {setTimeout(() => msg.delete(), 4000)});
  			}
      }
    } else {
  		let choice = args[0];
      message.delete();
  		if (ARRmemoryGameUser != memUser) {
        console.log("Another user's game already exists!");
        memoryGameBUSY.clear();
        memoryGameBUSY.add("NO");
        return message.channel.send("This isn't your game!").then(msg => {setTimeout(() => msg.delete(), 2000)});
  		}
  		let choiceLC = choice.toLowerCase();
  		if (choiceLC != "a1" && choiceLC != "a2" && choiceLC != "a3" && choiceLC != "a4" && choiceLC != "b1" && choiceLC != "b2" && choiceLC != "b3" && choiceLC != "b4" && choiceLC != "c1" && choiceLC != "c2" && choiceLC != "c3" && choiceLC != "c4") {
        memoryGameBUSY.clear();
        memoryGameBUSY.add("NO");
        return message.channel.send("Not a valid space! It goes from A1 to A4, B1 to B4 and C1 to C4.").then(msg => {setTimeout(() => msg.delete(), 4000)});
  		}
      let ARRAYmemoryGameChoices = Array.from(memoryGameChoices);
  		if (ARRAYmemoryGameChoices[0] === 1) {
  			let ARRmemoryGameLastCommand = Array.from(memoryGameLastCommand);
      	ARRmemoryGameLastCommand = ARRmemoryGameLastCommand[0].toLowerCase();
  			let choiceLC = choice.toLowerCase();
  			if (ARRmemoryGameLastCommand === choiceLC) {
          memoryGameBUSY.clear();
          memoryGameBUSY.add("NO");
  				return message.channel.send("You have already chosen this square.").then(msg => {setTimeout(() => msg.delete(), 2000)});
  			}
  		}

      let ARRpairCommands = Array.from(memoryGamePairCommands);
      //ARRpairCommands = ARRpairCommands[0];
      if (ARRpairCommands != null) {
        console.log(`Checking 'memoryGamePairCommands' set:`);
        console.log(ARRpairCommands.length);
        console.log(ARRpairCommands);
        let pairCommand = "";
        for (i = 0; i < ARRpairCommands.length; i++) {
          //pairCommand = ARRpairCommands[i].toLowerCase();
          if (ARRpairCommands[i].toLowerCase() === choiceLC) {
            memoryGameBUSY.clear();
            memoryGameBUSY.add("NO");
            return message.channel.send("You have already chosen this square.").then(msg => {setTimeout(() => msg.delete(), 2000)});
          }
        }
      }

      let ARRpairCommandsTEMP = Array.from(memoryGamePairCommandsTEMP);
      ARRpairCommandsTEMP = ARRpairCommandsTEMP[0];

      let aRRmemoryGameMESSAGEID = Array.from(memoryGameMESSAGEID);
      aRRmemoryGameMESSAGEID = aRRmemoryGameMESSAGEID[0];
      let ARRr1 = Array.from(memoryGameROW1);
      ARRr1 = ARRr1[0];
      let ARRr2 = Array.from(memoryGameROW2);
      ARRr2 = ARRr2[0];
      let ARRr3 = Array.from(memoryGameROW3);
      ARRr3 = ARRr3[0];
  		let ARRr1C = Array.from(memoryGameROW1C);
      ARRr1C = ARRr1C[0];
      let ARRr2C = Array.from(memoryGameROW2C);
      ARRr2C = ARRr2C[0];
      let ARRr3C = Array.from(memoryGameROW3C);
      ARRr3C = ARRr3C[0];
      let ARRAYmemoryGameLives = Array.from(memoryGameLives);
      ARRAYmemoryGameLives = ARRAYmemoryGameLives[0];
      let ARRAYmemoryGamePairs = Array.from(memoryGamePairs);
      ARRAYmemoryGamePairs = ARRAYmemoryGamePairs[0];

      let r1 = [`${ARRr1[0]}`, `${ARRr1[1]}`, `${ARRr1[2]}`, `${ARRr1[3]}`];
      let r2 = [`${ARRr2[0]}`, `${ARRr2[1]}`, `${ARRr2[2]}`, `${ARRr2[3]}`];
      let r3 = [`${ARRr3[0]}`, `${ARRr3[1]}`, `${ARRr3[2]}`, `${ARRr3[3]}`];
      let r1S = [`${ARRr1C[0]}`, `${ARRr1C[1]}`, `${ARRr1C[2]}`, `${ARRr1C[3]}`];
      let r2S = [`${ARRr2C[0]}`, `${ARRr2C[1]}`, `${ARRr2C[2]}`, `${ARRr2C[3]}`];
      let r3S = [`${ARRr3C[0]}`, `${ARRr3C[1]}`, `${ARRr3C[2]}`, `${ARRr3C[3]}`];

      //1 CHOICE LEFT
      //let ARRAYmemoryGameChoices = Array.from(memoryGameChoices); DECLARED FURTHER UP
      if (ARRAYmemoryGameChoices[0] === 2) {
        memoryGamePairCommandsTEMP.add(choice);
  			memoryGameLastCommand.clear();
  			memoryGameLastCommand.add(choice);
        console.log(`Choices left: 1`);
        if (choice === "A1" || choice === "a1") {
          r1S = [`${r1[0]}`, `${r1S[1]}`, `${r1S[2]}`, `${r1S[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r1[0]}`);
          console.log(`Choice: A1`);
        }
        if (choice === "A2" || choice === "a2") {
          r1S = [`${r1S[0]}`, `${r1[1]}`, `${r1S[2]}`, `${r1S[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r1[1]}`);
          console.log(`Choice: A2`);
        }
        if (choice === "A3" || choice === "a3") {
          r1S = [`${r1S[0]}`, `${r1S[1]}`, `${r1[2]}`, `${r1S[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r1[2]}`);
          console.log(`Choice: A3`);
        }
        if (choice === "A4" || choice === "a4") {
          r1S = [`${r1S[0]}`, `${r1S[1]}`, `${r1S[2]}`, `${r1[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r1[3]}`);
          console.log(`Choice: A4`);
        }
        if (choice === "B1" || choice === "b1") {
          r2S = [`${r2[0]}`, `${r2S[1]}`, `${r2S[2]}`, `${r2S[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r2[0]}`);
          console.log(`Choice: B1`);
        }
        if (choice === "B2" || choice === "b2") {
          r2S = [`${r2S[0]}`, `${r2[1]}`, `${r2S[2]}`, `${r2S[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r2[1]}`);
          console.log(`Choice: B2`);
        }
        if (choice === "B3" || choice === "b3") {
          r2S = [`${r2S[0]}`, `${r2S[1]}`, `${r2[2]}`, `${r2S[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r2[2]}`);
          console.log(`Choice: B3`);
        }
        if (choice === "B4" || choice === "b4") {
          r2S = [`${r2S[0]}`, `${r2S[1]}`, `${r2S[2]}`, `${r2[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r2[3]}`);
          console.log(`Choice: B4`);
        }
        if (choice === "C1" || choice === "c1") {
          r3S = [`${r3[0]}`, `${r3S[1]}`, `${r3S[2]}`, `${r3S[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r3[0]}`);
          console.log(`Choice: C1`);
        }
        if (choice === "C2" || choice === "c2") {
          r3S = [`${r3S[0]}`, `${r3[1]}`, `${r3S[2]}`, `${r3S[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r3[1]}`);
          console.log(`Choice: C2`);
        }
        if (choice === "C3" || choice === "c3") {
          r3S = [`${r3S[0]}`, `${r3S[1]}`, `${r3[2]}`, `${r3S[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3[2]} ${r3S[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r3[2]}`);
          console.log(`Choice: C3`);
        }
        if (choice === "C4" || choice === "c4") {
          r3S = [`${r3S[0]}`, `${r3S[1]}`, `${r3S[2]}`, `${r3[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
  				.setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3[3]}\n\n*Pick one more.*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(2);
          memoryGameChoices.add(1);
          memoryGameChoice1.add(`${r3[3]}`);
          console.log(`Choice: C4`);
        }
        memoryGameBUSY.clear();
        memoryGameBUSY.add("NO");
        return;
      }
      //--------------
      //0 CHOICES LEFT
      if (ARRAYmemoryGameChoices[0] === 1) {
        memoryGamePairCommandsTEMP.add(choice);
        console.log(`Choices left: 0`);
        if (choice === "A1" || choice === "a1") {
          r1S = [`${r1[0]}`, `${r1S[1]}`, `${r1S[2]}`, `${r1S[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r1[0]}`);
          console.log(`Choice: A1`);
        }
  			if (choice === "A2" || choice === "a2") {
          r1S = [`${r1S[0]}`, `${r1[1]}`, `${r1S[2]}`, `${r1S[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r1[1]}`);
          console.log(`Choice: A2`);
        }
  			if (choice === "A3" || choice === "a3") {
          r1S = [`${r1S[0]}`, `${r1S[1]}`, `${r1[2]}`, `${r1S[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r1[2]}`);
          console.log(`Choice: A3`);
        }
  			if (choice === "A4" || choice === "a4") {
          r1S = [`${r1S[0]}`, `${r1S[1]}`, `${r1S[2]}`, `${r1[3]}`];
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          console.log(`Covered row 1 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r1[3]}`);
          console.log(`Choice: A4`);
        }
  			if (choice === "B1" || choice === "b1") {
          r2S = [`${r2[0]}`, `${r2S[1]}`, `${r2S[2]}`, `${r2S[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r2[0]}`);
          console.log(`Choice: B1`);
        }
  			if (choice === "B2" || choice === "b2") {
          r2S = [`${r2S[0]}`, `${r2[1]}`, `${r2S[2]}`, `${r2S[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r2[1]}`);
          console.log(`Choice: B2`);
        }
  			if (choice === "B3" || choice === "b3") {
          r2S = [`${r2S[0]}`, `${r2S[1]}`, `${r2[2]}`, `${r2S[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r2[2]}`);
          console.log(`Choice: B3`);
        }
  			if (choice === "B4" || choice === "b4") {
          r2S = [`${r2S[0]}`, `${r2S[1]}`, `${r2S[2]}`, `${r2[3]}`];
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          console.log(`Covered row 2 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r2[3]}`);
          console.log(`Choice: B4`);
        }
  			if (choice === "C1" || choice === "c1") {
          r3S = [`${r3[0]}`, `${r3S[1]}`, `${r3S[2]}`, `${r3S[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r3[0]}`);
          console.log(`Choice: C1`);
        }
  			if (choice === "C2" || choice === "c2") {
          r3S = [`${r3S[0]}`, `${r3[1]}`, `${r3S[2]}`, `${r3S[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r3[1]}`);
          console.log(`Choice: C2`);
        }
  			if (choice === "C3" || choice === "c3") {
          r3S = [`${r3S[0]}`, `${r3S[1]}`, `${r3[2]}`, `${r3S[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r3[2]}`);
          console.log(`Choice: C3`);
        }
  			if (choice === "C4" || choice === "c4") {
          r3S = [`${r3S[0]}`, `${r3S[1]}`, `${r3S[2]}`, `${r3[3]}`];
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered row 3 ammended.`);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice2.add(`${r3[3]}`);
          console.log(`Choice: C4`);
        }

  			let ARRmemoryGameChoice1 = Array.from(memoryGameChoice1);
        ARRmemoryGameChoice1 = ARRmemoryGameChoice1[0];
  			let ARRmemoryGameChoice2 = Array.from(memoryGameChoice2);
  			ARRmemoryGameChoice2 = ARRmemoryGameChoice2[0];
        let ARRmemoryGameSparkCoins = Array.from(memoryGameSparkCoins);
        //ARRmemoryGameSparkCoins = ARRmemoryGameSparkCoins[0];
  			if (ARRmemoryGameChoice1 === ARRmemoryGameChoice2) {
          console.log(`A match! :)`);
          console.log(`Before: ${ARRmemoryGameSparkCoins}`);
          ARRmemoryGameSparkCoins = parseInt(ARRmemoryGameSparkCoins) + 10;
          console.log(`After: ${ARRmemoryGameSparkCoins}`);
          memoryGameSparkCoins.clear();
          memoryGameSparkCoins.add(ARRmemoryGameSparkCoins);
          ARRAYmemoryGamePairs++;
          memoryGamePairs.clear();
          memoryGamePairs.add(ARRAYmemoryGamePairs);
          memoryGameROW1C_back.clear();
          memoryGameROW1C_back.add(r1S);
          memoryGameROW2C_back.clear();
          memoryGameROW2C_back.add(r2S);
          memoryGameROW3C_back.clear();
          memoryGameROW3C_back.add(r3S);
    			let ARRmemoryGamePairCommandsTEMP = Array.from(memoryGamePairCommandsTEMP);
          memoryGamePairCommands.add(`${ARRmemoryGamePairCommandsTEMP[0]}`);
          memoryGamePairCommands.add(`${ARRmemoryGamePairCommandsTEMP[1]}`);
          memoryGamePairCommandsTEMP.clear();
          let fbwlembed = new Discord.MessageEmbed()
  				.setColor(`${usersData.col}`)
          .setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*A match!*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice1.clear();
          memoryGameChoice2.clear();
          if (ARRAYmemoryGamePairs === 6) {
            return setTimeout(() => {
              //User won!
              console.log("Game Finished. User won. Sets have been reset.");
              let ARRmemoryGameSparkCoinsNEW = 60 * ARRAYmemoryGameLives;
              let userSparkCoins = usersData.sparkcoins;
              let userSparkCoinsNEW = userSparkCoins + ARRmemoryGameSparkCoinsNEW;
              let ARRmemoryGameUsername = Array.from(memoryGameUsername);
              let sparkcoinlogmembed = new Discord.MessageEmbed()
              .setColor("#7c889c")
              .setDescription(`**${ARRmemoryGameUsername[0]}** won ${ARRmemoryGameSparkCoinsNEW} SparkCoins.`)
              .setFooter("Memory");
              bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
              let fbwlembed = new Discord.MessageEmbed()
              .setColor(`${usersData.col}`)
              .setTitle(`Memory 🧠`)
              .setDescription(`Game Finished!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n**You memorised all emoji locations! You won ${ARRmemoryGameSparkCoinsNEW} SparkCoins!**`);
              aRRmemoryGameMESSAGEID.edit(fbwlembed);
              memoryGameMESSAGEID.clear();
              memoryGameLastCommand.clear();
              memoryGamePairCommands.clear();
              memoryGamePairCommandsTEMP.clear();
              memoryGameROW1.clear();
              memoryGameROW2.clear();
              memoryGameROW3.clear();
              memoryGameROW1C.clear();
              memoryGameROW2C.clear();
              memoryGameROW3C.clear();
              memoryGameROW1C_back.clear();
              memoryGameROW2C_back.clear();
              memoryGameROW3C_back.clear();
              memoryGameUser.clear();
              memoryGameSparkCoins.clear();
              memoryGameLives.clear();
              memoryGamePairs.clear();
              memoryGameChoices.clear();
              memoryGameChoice1.clear();
              memoryGameChoice2.clear();
              memoryGameBUSY.clear();
              memoryGameBUSY.add("NO");
              mongoose.model("DiscordUserData").updateMany ({userID: memUser}, {
                sparkcoins: `${userSparkCoinsNEW}`,
                lastplayedmemory: `${datetimeToday}`
              }, function(error, data) {
                if (error) {
                  console.log("Failed to save the data :(");
                  console.log(error);
                } else {
                  console.log(`Successfully updated user's sparkcoins and last played memory date!`);
                  console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
                  console.log(`- BEFORE: ${usersData.lastplayedmemory}. AFTER: ${datetimeToday}`);
                }
              });
              //---------
            }, 3000);
          } else {
            return setTimeout(() => {
              let fbwlembed = new Discord.MessageEmbed()
              .setColor(`${usersData.col}`)
              .setTitle(`Memory 🧠`)
              .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick two.*`);
              aRRmemoryGameMESSAGEID.edit(fbwlembed);
              memoryGameBUSY.clear();
              memoryGameBUSY.add("NO");
            }, 3000);
          }
  			} else {
  				console.log(`Not a match... :(`);
  				ARRAYmemoryGameLives = ARRAYmemoryGameLives - 1;
          memoryGameLives.clear();
          memoryGameLives.add(ARRAYmemoryGameLives);
          console.log(`Lives ammended.`);
          let fbwlembed = new Discord.MessageEmbed()
          .setColor(`${usersData.col}`)
          .setTitle(`Memory 🧠`)
          .setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Not a match...*`);
          aRRmemoryGameMESSAGEID.edit(fbwlembed);
          memoryGameChoices.delete(1);
          memoryGameChoices.add(2);
          memoryGameChoice1.clear();
          memoryGameChoice2.clear();

          ARRr1C = Array.from(memoryGameROW1C_back);
          ARRr2C = Array.from(memoryGameROW2C_back);
          ARRr3C = Array.from(memoryGameROW3C_back);
          if (ARRr1C.length === 0) {
            console.log("Empty backup sets.");
            r1S = [`◻️`, `◻️`, `◻️`, `◻️`];
    				r2S = [`◻️`, `◻️`, `◻️`, `◻️`];
    				r3S = [`◻️`, `◻️`, `◻️`, `◻️`];
          } else {
            console.log("Non-empty backup sets.");
            ARRr1C = ARRr1C[0];
            ARRr2C = ARRr2C[0];
            ARRr3C = ARRr3C[0];
            r1S = [`${ARRr1C[0]}`, `${ARRr1C[1]}`, `${ARRr1C[2]}`, `${ARRr1C[3]}`];
            r2S = [`${ARRr2C[0]}`, `${ARRr2C[1]}`, `${ARRr2C[2]}`, `${ARRr2C[3]}`];
            r3S = [`${ARRr3C[0]}`, `${ARRr3C[1]}`, `${ARRr3C[2]}`, `${ARRr3C[3]}`];
          }
          memoryGameROW1C.clear();
          memoryGameROW1C.add(r1S);
          memoryGameROW2C.clear();
          memoryGameROW2C.add(r2S);
          memoryGameROW3C.clear();
          memoryGameROW3C.add(r3S);
          console.log(`Covered rows ammended.`);
  				return setTimeout(() => {
  					if (ARRAYmemoryGameLives === 0) {
  						//GAME OVER
  						console.log("Game Over. Sets have been reset.");
  						memoryGameBUSY.clear();
  						memoryGameBUSY.add("NO");
              if (ARRmemoryGameSparkCoins != 0) {
                let userSparkCoins = usersData.sparkcoins;
                let userSparkCoinsNEW = userSparkCoins + parseInt(ARRmemoryGameSparkCoins);
                let ARRmemoryGameUsername = Array.from(memoryGameUsername);
                let sparkcoinlogmembed = new Discord.MessageEmbed()
                .setColor("#7c889c")
                .setDescription(`**${ARRmemoryGameUsername[0]}** won ${ARRmemoryGameSparkCoins} SparkCoins.`)
                .setFooter("Memory");
                bot.channels.cache.get(`681249230232223767`).send(sparkcoinlogmembed);
                let fbwlembed = new Discord.MessageEmbed()
          			.setColor(`${usersData.col}`)
          			.setTitle(`Memory 🧠`)
    						.setDescription(`Game Over!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* 0\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n**Too many incorrect guesses! You won ${ARRmemoryGameSparkCoins} SparkCoins!**`);
                aRRmemoryGameMESSAGEID.edit(fbwlembed);
                mongoose.model("DiscordUserData").updateMany ({userID: memUser}, {
                  sparkcoins: `${userSparkCoinsNEW}`,
                  lastplayedmemory: `${datetimeToday}`
                }, function(error, data) {
                  if (error) {
                    console.log("Failed to save the data :(");
                    console.log(error);
                  } else {
                    console.log(`Successfully updated user's sparkcoins and last played memory date!`);
                    console.log(`- BEFORE: ${userSparkCoins}. AFTER: ${userSparkCoinsNEW}`);
                    console.log(`- BEFORE: ${usersData.lastplayedmemory}. AFTER: ${datetimeToday}`);
                  }
                });
              } else {
                let fbwlembed = new Discord.MessageEmbed()
          			.setColor(`${usersData.col}`)
          			.setTitle(`Memory 🧠`)
    						.setDescription(`Game Over!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* 0\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n**Too many incorrect guesses! You haven't won any SparkCoins today!**`);
                aRRmemoryGameMESSAGEID.edit(fbwlembed);
                mongoose.model("DiscordUserData").updateOne ({userID: memUser}, {
                  lastplayedmemory: `${datetimeToday}`
                }, function(error, data) {
                  if (error) {
                    console.log("Failed to save the data :(");
                    console.log(error);
                  } else {
                    console.log(`Successfully updated user's last played memory date!`);
                    console.log(`- BEFORE: ${usersData.lastplayedmemory}. AFTER: ${datetimeToday}`);
                  }
                });
              }
  						memoryGameMESSAGEID.clear();
              memoryGameLastCommand.clear();
              memoryGamePairCommands.clear();
              memoryGamePairCommandsTEMP.clear();
  						memoryGameROW1.clear();
  						memoryGameROW2.clear();
  						memoryGameROW3.clear();
  						memoryGameROW1C.clear();
  						memoryGameROW2C.clear();
  						memoryGameROW3C.clear();
              memoryGameROW1C_back.clear();
              memoryGameROW2C_back.clear();
              memoryGameROW3C_back.clear();
  						memoryGameUser.clear();
              memoryGameSparkCoins.clear();
  						memoryGameLives.clear();
  						memoryGamePairs.clear();
  						memoryGameChoices.clear();
  						memoryGameChoice1.clear();
  						memoryGameChoice2.clear();
              memoryGameBUSY.clear();
              memoryGameBUSY.add("NO");
  						//---------
  					} else {
              memoryGameChoice1.clear();
              memoryGameChoice2.clear();
              memoryGamePairCommandsTEMP.clear();
  						let fbwlembed = new Discord.MessageEmbed()
  						.setColor(`${usersData.col}`)
  						.setTitle(`Memory 🧠`)
  						.setDescription(`Game in play!\n*Pairs:* ${ARRAYmemoryGamePairs} **|** *Lives:* ${ARRAYmemoryGameLives}\n\n${r1S[0]} ${r1S[1]} ${r1S[2]} ${r1S[3]}\n${r2S[0]} ${r2S[1]} ${r2S[2]} ${r2S[3]}\n${r3S[0]} ${r3S[1]} ${r3S[2]} ${r3S[3]}\n\n*Pick two.*`);
  						aRRmemoryGameMESSAGEID.edit(fbwlembed);
              memoryGameBUSY.clear();
              memoryGameBUSY.add("NO");
  					}
  				}, 3000);
  			}
      }
    }
  }
}

module.exports.help = {
  name: "memory"
}

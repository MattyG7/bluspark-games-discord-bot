const Discord = require("discord.js");
const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

module.exports.run = async (bot, message, args) => {
  if(args[2]) return message.channel.send(`${message.author.username}, please use the correct format: ~memory or ~memory SPARKCOINAMOUNT.`);

  let memUser = message.author.id;
  let usersData = await mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      if (data.col === "not-set") {
        userColour = "202225";
      } else {
        userColour = data.col;
      }
      console.log("Got user's colour Successfully!");
      console.log(`> ${userColour}`);
      return userColour;
    }
  });
  console.log(`> Still ${usersData.col}`);

  if (!args[0]) {
    //EMOJIS
    let result1 = 0;
    let result2 = 0;
    let result3 = 0;
    let result4 = 0;
    let result5 = 0;
    let result6 = 0;
    let result7 = 0;
    let result8 = 0;
    let replies = "";
    let repliesCHOICE = ["0", "1", "2", "3", "4", "5"];
    let resultCHOICE = Math.floor((Math.random() * repliesCHOICE.length));
    if(resultCHOICE === 0) {
      replies = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "☺"];
      result1 = Math.floor((Math.random() * replies.length));
      result2 = Math.floor((Math.random() * replies.length));
      result3 = Math.floor((Math.random() * replies.length));
      result4 = Math.floor((Math.random() * replies.length));
      result5 = Math.floor((Math.random() * replies.length));
      result6 = Math.floor((Math.random() * replies.length));
      result7 = Math.floor((Math.random() * replies.length));
      result8 = Math.floor((Math.random() * replies.length));
    }
    if(resultCHOICE === 1) {
      replies = ["🙂", "🤗", "🤩", "🤔", "🤨", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴"];
      result1 = Math.floor((Math.random() * replies.length));
      result2 = Math.floor((Math.random() * replies.length));
      result3 = Math.floor((Math.random() * replies.length));
      result4 = Math.floor((Math.random() * replies.length));
      result5 = Math.floor((Math.random() * replies.length));
      result6 = Math.floor((Math.random() * replies.length));
      result7 = Math.floor((Math.random() * replies.length));
      result8 = Math.floor((Math.random() * replies.length));
    }
    if(resultCHOICE === 2) {
      replies = ["😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹", "🙁", "😖", "😞", "😟", "😤", "😢"];
      result1 = Math.floor((Math.random() * replies.length));
      result2 = Math.floor((Math.random() * replies.length));
      result3 = Math.floor((Math.random() * replies.length));
      result4 = Math.floor((Math.random() * replies.length));
      result5 = Math.floor((Math.random() * replies.length));
      result6 = Math.floor((Math.random() * replies.length));
      result7 = Math.floor((Math.random() * replies.length));
      result8 = Math.floor((Math.random() * replies.length));
    }
    if(resultCHOICE === 3) {
      replies = ["😭", "😦", "😧", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳", "🤪", "😵", "🥴", "😠", "😡", "🤬", "😷"];
      result1 = Math.floor((Math.random() * replies.length));
      result2 = Math.floor((Math.random() * replies.length));
      result3 = Math.floor((Math.random() * replies.length));
      result4 = Math.floor((Math.random() * replies.length));
      result5 = Math.floor((Math.random() * replies.length));
      result6 = Math.floor((Math.random() * replies.length));
      result7 = Math.floor((Math.random() * replies.length));
      result8 = Math.floor((Math.random() * replies.length));
    }
    if(resultCHOICE === 4) {
      replies = ["🤒", "🤕", "🤢", "🤮", "🤧", "😇", "🥳", "🥺", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈", "👿", "💀", "👾"];
      result1 = Math.floor((Math.random() * replies.length));
      result2 = Math.floor((Math.random() * replies.length));
      result3 = Math.floor((Math.random() * replies.length));
      result4 = Math.floor((Math.random() * replies.length));
      result5 = Math.floor((Math.random() * replies.length));
      result6 = Math.floor((Math.random() * replies.length));
      result7 = Math.floor((Math.random() * replies.length));
      result8 = Math.floor((Math.random() * replies.length));
    }
    if(resultCHOICE === 5) {
      replies = ["🤖", "💩", "🐢", "🐬", "🐥", "🐤", "🐣", "🐌", "🐛", "🐝", "🕷"];
      result1 = Math.floor((Math.random() * replies.length));
      result2 = Math.floor((Math.random() * replies.length));
      result3 = Math.floor((Math.random() * replies.length));
      result4 = Math.floor((Math.random() * replies.length));
      result5 = Math.floor((Math.random() * replies.length));
      result6 = Math.floor((Math.random() * replies.length));
      result7 = Math.floor((Math.random() * replies.length));
      result8 = Math.floor((Math.random() * replies.length));
    }

    let row1 = "";
    let row2 = "";
    let row3 = "";
    let row4 = "";
    let r1 = [];
    let r2 = [];
    let r3 = [];
    let r4 = [];
    let repliesCHOICEE = ["0", "1", "2", "3"];
    let resultCHOICEE = Math.floor((Math.random() * repliesCHOICEE.length));
    if(resultCHOICEE === 0) {
      row1 = `${replies[result1]} ${replies[result2]} ${replies[result3]} ${replies[result4]}`;
      row2 = `${replies[result5]} ${replies[result6]} ${replies[result7]} ${replies[result8]}`;
      row3 = `${replies[result1]} ${replies[result2]} ${replies[result3]} ${replies[result4]}`;
      row4 = `${replies[result5]} ${replies[result6]} ${replies[result7]} ${replies[result8]}`;
      r1 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r2 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
      r3 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r4 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
    }
    if(resultCHOICEE === 1) {
      row1 = `${replies[result4]} ${replies[result1]} ${replies[result2]} ${replies[result3]}`;
      row2 = `${replies[result8]} ${replies[result5]} ${replies[result6]} ${replies[result7]}`;
      row3 = `${replies[result2]} ${replies[result3]} ${replies[result4]} ${replies[result1]}`;
      row4 = `${replies[result6]} ${replies[result7]} ${replies[result8]} ${replies[result5]}`;
      r1 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r2 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
      r3 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r4 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
    }
    if(resultCHOICEE === 2) {
      row1 = `${replies[result3]} ${replies[result4]} ${replies[result1]} ${replies[result2]}`;
      row2 = `${replies[result8]} ${replies[result5]} ${replies[result6]} ${replies[result7]}`;
      row3 = `${replies[result2]} ${replies[result3]} ${replies[result4]} ${replies[result1]}`;
      row4 = `${replies[result7]} ${replies[result8]} ${replies[result5]} ${replies[result6]}`;
      r1 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r2 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
      r3 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r4 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
    }
    if(resultCHOICEE === 3) {
      row1 = `${replies[result2]} ${replies[result4]} ${replies[result3]} ${replies[result1]}`;
      row2 = `${replies[result6]} ${replies[result5]} ${replies[result8]} ${replies[result7]}`;
      row3 = `${replies[result3]} ${replies[result2]} ${replies[result4]} ${replies[result1]}`;
      row4 = `${replies[result6]} ${replies[result8]} ${replies[result7]} ${replies[result5]}`;
      r1 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r2 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
      r3 = [`${replies[result1]}`, `${replies[result2]}`, `${replies[result3]}`, `${replies[result4]}`];
      r4 = [`${replies[result5]}`, `${replies[result6]}`, `${replies[result7]}`, `${replies[result8]}`];
    }
    let help = "❓";
    //let badChoice = Math.floor((Math.random() * choices.length));
    //let setBadChoice = choices[badChoice];
    //console.log(badChoice);
    let lives = 3;
    let pairs = 0;
    let gameFinished = "No";
    let fbwlembed = new Discord.RichEmbed()
    .setColor(`#${usersData.col}`) //2b573e
    .setTitle(`Memory! (no prize) 🧠`)
    .setDescription(`Game started!\nMemorise the locations. Hiding all in **10** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
    const m = await message.channel.send(fbwlembed);
    setTimeout(() => {
      fbwlembed
        .setDescription(`Game started!\nMemorise the locations. Hiding all in **9** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
      m.edit(fbwlembed);
      setTimeout(() => {
        fbwlembed
          .setDescription(`Game started!\nMemorise the locations. Hiding all in **8** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
        m.edit(fbwlembed);
        setTimeout(() => {
          fbwlembed
            .setDescription(`Game started!\nMemorise the locations. Hiding all in **7** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
          m.edit(fbwlembed);
          setTimeout(() => {
            fbwlembed
              .setDescription(`Game started!\nMemorise the locations. Hiding all in **6** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
            m.edit(fbwlembed);
            setTimeout(() => {
              fbwlembed
                .setDescription(`Game started!\nMemorise the locations. Hiding all in **5** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
              m.edit(fbwlembed);
              setTimeout(() => {
                fbwlembed
                  .setDescription(`Game started!\nMemorise the locations. Hiding all in **4** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
                m.edit(fbwlembed);
                setTimeout(() => {
                  fbwlembed
                    .setDescription(`Game started!\nMemorise the locations. Hiding all in **3** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
                  m.edit(fbwlembed);
                  setTimeout(() => {
                    fbwlembed
                      .setDescription(`Game started!\nMemorise the locations. Hiding all in **2** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
                    m.edit(fbwlembed);
                    setTimeout(() => {
                      fbwlembed
                        .setDescription(`Game started!\nMemorise the locations. Hiding all in **1** seconds.\n\n${r1[0]}${r1[1]}${r1[2]}${r1[3]}\n${r2[0]}${r2[1]}${r2[2]}${r2[3]}\n${r3[0]}${r3[1]}${r3[2]}${r3[3]}\n${r4[0]}${r4[1]}${r4[2]}${r4[3]}\n\n*Press the "?" reaction if you don't know what to type.*`);
                      m.edit(fbwlembed);
                      setTimeout(() => {
                        fbwlembed
                          .setDescription(`Game started!\n*Pairs:* ${pairs} **|** *Lives:* ${lives}\n\n◼ ◼ ◼ ◼\n◼ ◼ ◼ ◼\n◼ ◼ ◼ ◼\n◼ ◼ ◼ ◼\n\n*Press the "?" reaction if you don't know what to type.*`);
                          //🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦
                        m.edit(fbwlembed);
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

    console.log("Running");
    while (gameFinished === "No") {
      console.log("Still running");
      //Reactions being added
      const reacts = await promptMessage(m, message.author, 60, help);

      //Check the reacion
      const showHelp = await getResult(reacts); //, teeth

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
      const filter = (reaction, user) => validReactions.includes(reaction.emoji.name) && user.id === memUser;
      // And of course, await the reactions
      return message
        .awaitReactions(filter, { max: 1, time: time})
        .then(collected => collected.first() && collected.first().emoji.name);
    }

    function getResult(me) {
      m.clearReactions();
      fbwlembed
        .setDescription(`***Game Help***\nType any letter combination from A1 to D6 to choose. You can choose two per turn. If the two you choose match, they will stay and not change back to a square.\n\n🟦 🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦 🟦\n\n*The game will resume in 10 seconds.*`);
      m.edit(fbwlembed);
      m.react(help);
      setTimeout(() => {
        fbwlembed
          .setDescription(`Game started!\n*Pairs:* ${pairs} **|** *Lives:* ${lives}\n\n🟦 🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦 🟦\n🟦 🟦 🟦 🟦 🟦 🟦\n\n*Press the "?" reaction if you don't know what to type.*`);
        m.edit(fbwlembed);
      }, 10000);
      //if (teethLeft === 1) {gameFinished = "Yess";}
      return;
    }
  } else {
    let SparkCoinsBET = parseInt(args[0]);
  }
}

module.exports.help = {
  name: "memory"
}

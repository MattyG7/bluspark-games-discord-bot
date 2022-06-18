const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let setupUser = `${message.author.id}`;
  mongoose.model("DiscordUserData").findOne ({
    userID: `${setupUser}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      col = data.col;
      web = data.web;
      yt = data.yt;
      tw = data.tw;
      lo = data.lo;
      if(!args[0]) {
        let setupicon = message.author.displayAvatarURL();
        let setupembed = new Discord.MessageEmbed()
        .setAuthor(`**Profile Setup**`, setupicon)
        .setColor(`${col}`)
        .addField("**Profile Colour (use hex codes only and don't include the #)**", `~setup col **6charhexcolour**`)
        .addField("**Website (remove 'https://' and 'www.' from the url)**", `~setup web **websiteurl**`)
        .addField("**YouTube Channel (remove 'https://' and 'www.' from the url)**", `~setup yt **youtubechannelurl**`)
        .addField("**Twitter (don't include the @)**", `~setup tw **twitterusername**`)
        .addField("**Location (country)**", `~setup lo **country**`);
        return message.channel.send(setupembed);
      }
      if(args[0] === "col") {
        if(!args[1]) return message.channel.send("Please specify a 6 character hex colour code. Confused? Search 'colour picker' on Google.");
        mongoose.model("DiscordUserData").updateOne ({userID: setupUser}, {
          col: `#${args[1]}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's profile colour!`);
            console.log(`- BEFORE: ${col}. AFTER: #${args[1]}`);
            let setupcolembed = new Discord.MessageEmbed()
            .setColor(`#${args[1]}`)
            .setDescription(`✅ ${message.author.username}'s new profile colour has successfully been set!`);
            return message.channel.send(setupcolembed);
          }
        });
      }
      if(args[0] === "web") {
        if(!args[1]) return message.channel.send("Please specify a website url but remember to remove the 'https://' and 'www.'.");
        mongoose.model("DiscordUserData").updateOne ({userID: setupUser}, {
          web: `${args[1]}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's website url!`);
            console.log(`- BEFORE: ${web}. AFTER: ${args[1]}`);
            let setupcolembed = new Discord.MessageEmbed()
            .setColor(`${col}`)
            .setDescription(`✅ ${message.author.username}'s website has successfully been set on their profile!`);
            return message.channel.send(setupcolembed);
          }
        });
      }
      if(args[0] === "yt") {
        if(!args[1]) return message.channel.send("Please specify your YouTube Channel URL but remember to remove the 'https://' and 'www.'.");
        mongoose.model("DiscordUserData").updateOne ({userID: setupUser}, {
          yt: `${args[1]}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's YouTube Channel URL!`);
            console.log(`- BEFORE: ${yt}. AFTER: ${args[1]}`);
            let setupcolembed = new Discord.MessageEmbed()
            .setColor(`${col}`)
            .setDescription(`✅ ${message.author.username}'s YouTube channel has successfully been set on their profile!`);
            return message.channel.send(setupcolembed);
          }
        });
      }
      if(args[0] === "tw") {
        if(!args[1]) return message.channel.send("Please specify a Twitter @ name but remember not to include the @. We do some magic to attach the @ to your Twitter name when it displays on your profile.");
        mongoose.model("DiscordUserData").updateOne ({userID: setupUser}, {
          tw: `${args[1]}`
        }, function(error, data) {
          if (error) {
            console.log("Failed to save the data :(");
            console.log(error);
          } else {
            console.log(`Successfully updated user's Twitter username!`);
            console.log(`- BEFORE: ${tw}. AFTER: ${args[1]}`);
            let setupcolembed = new Discord.MessageEmbed()
            .setColor(`${col}`)
            .setDescription(`✅ ${message.author.username}'s Twitter username has successfully been set on their profile!`);
            return message.channel.send(setupcolembed);
          }
        });
      }
      if(args[0] === "lo") {
        if(!args[1]) {
          let replies = ["Limbo", "Time Vortex", "The Void", "The Sun", "Discord's server room", "Aether"];
          let repliess = ["The Spacetime Rift opened up and decided what your location shall be...", "LoCAtIon hAs BeEN seT..."];
          let result = Math.floor((Math.random() * replies.length));
          let resultt = Math.floor((Math.random() * repliess.length));
          mongoose.model("DiscordUserData").updateOne ({userID: setupUser}, {
            lo: `${replies[result]}`
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log(`Successfully updated user's LoCaTiOn!`);
              console.log(`- BEFORE: ${lo}. AFTER: ${replies[result]}`);
              return message.channel.send(`${repliess[resultt]}`);
            }
          });
        } else {
          mongoose.model("DiscordUserData").updateOne ({userID: setupUser}, {
            lo: `${args[1]}`
          }, function(error, data) {
            if (error) {
              console.log("Failed to save the data :(");
              console.log(error);
            } else {
              console.log(`Successfully updated user's location!`);
              console.log(`- BEFORE: ${lo}. AFTER: ${args[1]}`);
              let setupcolembed = new Discord.MessageEmbed()
              .setColor(`${col}`)
              .setDescription(`✅ ${message.author.username}'s location has successfully been set on their profile!`);
              return message.channel.send(setupcolembed);
            }
          });
        }
      }
    }
  });
}

module.exports.help = {
  name: "setup"
}

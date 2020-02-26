const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let col = "e516b5";
  let web = "empty";
  let yt = "empty";
  let tw = "empty";
  let lo = "empty";


  if(!args[0]) {
    let _col = "*[6charhexcolour]*";
    let _web = "*[websiteurl]*";
    let _yt = "*[youtubechannelurl]*";
    let _tw = "*[twitterusername]*";
    let _lo = "*[country]*";
    let setupicon = message.author.displayAvatarURL;
    let setupembed = new Discord.RichEmbed()
    .setAuthor(`Profile Setup`, setupicon)
    .setColor(`#${col}`)
    .addField("Profile Colour (use hex codes only and don't include the #)", `~setup col ${_col}`)
    .addField("Website (remove 'https://www.' from the url)", `~setup web ${_web}`)
    .addField("YouTube Channel (remove 'https://www.' from the url)", `~setup yt ${_yt}`)
    .addField("Twitter (don't include the @)", `~setup tw ${_tw}`)
    .addField("Location (country)", `~setup lo ${_lo}`);
    return message.channel.send(setupembed);
  }
  if(args[0] === "col") {
    if(!args[1]) return message.channel.send("Please specify a 6 character hex colour code. Confused? Search 'hex colour picker' on Google.");
    col = args[1];
    let setupcolembed = new Discord.RichEmbed()
    .setColor(`#${col}`)
    .setDescription(`✅ ${message.author.username}'s new profile colour has successfully been set!`);
    return message.channel.send(setupcolembed);
  }
  if(args[0] === "web") {
    if(!args[1]) return message.channel.send("Please specify a website url but remember to remove the 'https://www.'.");
    web = args[1];
    let setupcolembed = new Discord.RichEmbed()
    .setColor(`#${col}`)
    .setDescription(`✅ ${message.author.username}'s website has successfully been set on their profile!`);
    return message.channel.send(setupcolembed);
  }
  if(args[0] === "yt") {
    if(!args[1]) return message.channel.send("Please specify your youtube channel url but remember to remove the 'https://www.'.");
    yt = args[1];
    let setupcolembed = new Discord.RichEmbed()
    .setColor(`#${col}`)
    .setDescription(`✅ ${message.author.username}'s YouTube channel has successfully been set on their profile!`);
    return message.channel.send(setupcolembed);
  }
  if(args[0] === "tw") {
    if(!args[1]) return message.channel.send("Please specify a twitter @ name but remember not to include the @. We do some magic to attach the @ to your twitter name oursleves.");
    tw = args[1];
    let setupcolembed = new Discord.RichEmbed()
    .setColor(`#${col}`)
    .setDescription(`✅ ${message.author.username}'s Twitter username has successfully been set on their profile!`);
    return message.channel.send(setupcolembed);
  }
  if(args[0] === "lo") {
    if(!args[1]) {
      let replies = ["Limbo", "The Void"];
      let repliess = ["The hellish Rift opened and here you are among us...", "LoCAtIon hAs BeEN seT"];
      let result = Math.floor((Math.random() * replies.length));
      //lo = "The Void";
      lo = `${replies[result]}`;
      //return message.channel.send("LoCAtIon hAs BeEN seT");
      return message.channel.send(`${repliess[result]}`);
    }
    lo = args[1];
    let setupcolembed = new Discord.RichEmbed()
    .setColor(`#${col}`)
    .setDescription(`✅ ${message.author.username}'s location has successfully been set on their profile!`);
    return message.channel.send(setupcolembed);
  }
  let words = args.slice(0).join(" ");



}

module.exports.help = {
  name: "setup"
}

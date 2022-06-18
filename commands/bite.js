const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`Be sure to mention someone you'd like to bite. 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} just bit themself. Ouch!***`);

  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = ["0", "1", "2", "3", "4", "5", "6"];
      let result = Math.floor((Math.random() * replies.length));

      if(result === 0) {
        let bticon = message.author.displayAvatarURL();
        let btembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Bite 😁", bticon)
        .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
        .setImage (`https://blusparkstudio.com/discord/bite_1.gif`);
        return message.channel.send(btembed);
      }
      if(result === 1) {
        let bticon = message.author.displayAvatarURL();
        let btembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Bite 😁", bticon)
        .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
        .setImage (`https://blusparkstudio.com/discord/bite_2.gif`);
        return message.channel.send(btembed);
      }
      if(result === 2) {
        let bticon = message.author.displayAvatarURL();
        let btembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Bite 😁", bticon)
        .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
        .setImage (`https://blusparkstudio.com/discord/bite_3.gif`);
        return message.channel.send(btembed);
      }
      if(result === 3) {
        let bticon = message.author.displayAvatarURL();
        let btembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Bite 😁", bticon)
        .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
        .setImage (`https://blusparkstudio.com/discord/bite_4.gif`);
        return message.channel.send(btembed);
      }
      if(result === 4) {
        let bticon = message.author.displayAvatarURL();
        let btembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Bite 😁", bticon)
        .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
        .setImage (`https://blusparkstudio.com/discord/bite_5.gif`);
        return message.channel.send(btembed);
      }
      if(result === 5) {
        let bticon = message.author.displayAvatarURL();
        let btembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Bite 😁", bticon)
        .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
        .setImage (`https://blusparkstudio.com/discord/bite_6.gif`);
        return message.channel.send(btembed);
      }
      if(result === 6) {
        let bticon = message.author.displayAvatarURL();
        let btembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setAuthor("Bite 😁", bticon)
        .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
        .setImage (`https://blusparkstudio.com/discord/bite_7.gif`);
        return message.channel.send(btembed);
      }
    }
  });
}

module.exports.help = {
  name: "bite"
}

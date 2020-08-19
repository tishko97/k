const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";
 
client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
    "Kurd Brightness",
    "Im Not Bad",
    "Rony Up",
    "Iam Waiting For Time"
  ];
 
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});
 
client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});
 
client.on("message", message => {
  var command = message.content;
  if (message.author.bot) return;
 
  switch (command) {
    case "avatar":
      message.channel.send(`${message.author.avatarURL}`);
      break;
 
    case "avatar":
      message.channel.send("");
  }
});
 
client.login("NjY0ODgzMTg3MzQ4MTQ0MTQx.Xytg8Q.7j0Wl5ae2TC2HFS4jYjEyCl5VSI");

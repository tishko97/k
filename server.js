const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send(' Bot Is Alive')
})
function keepAlive(){
    server.listen(3000, ()=>{console.log("Server is Ready!")});
}

var http = require('http');

http.createServer(function (req, res) {
  res.write("   I'm alive");
  res.end();
}).listen(8080);


const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://welcome-basbojaw.glitch.me/`);
}, 280000);
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on("ready", () => {
  console.log(`----------------`);
  console.log(`lupine`);
  console.log(`----------------`);
  console.log(`ON ${client.guilds.size} Servers '     Script By : lupine `);
  console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`HJ UP`, "http://twitch.tv/Rad-Bot"); ///تعديل مهم غير كلمة هيلب وبرميوم للوتشينق اللي بدك اياه مثل اسم سيرفرك
  client.user.setStatus("online");
});

client.login("NzQxMDIxODUxNTk3MTQ0MTM1.XyxgYA.8_UzgmgSGUvA7iNAPZfqz38OI6A");////lera tokene bot dani
const moment = require('moment');

client.on("guildMemberAdd", member => {
  let welcomer = member.guild.channels.find(
  channel => channel.id ==  "742683659202723900"/////// id chanali welcom lera dani.ok dlm
  );
  if (!welcomer) return;
  if (welcomer) {
    moment.locale('en-ly');
    var h = member.user;
    let norelden = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(h.avatarURL)
      .setAuthor(h.username, h.avatarURL)
      .setTitle('welcome')
      .setDescription('🔸بەخێریبێی بۆ سێرڤەرەکەم بەهیوای کاتێکی خۆش🔸')
      .addField(" **__بەخێربێیت بۆ سێرڤەری__**", `**${member.guild.name}**`)
      .addField(" تۆ کەسی ژمارە :-", member.guild.memberCount + "ی")
      .setImage("https://media.discordapp.net/attachments/673233508545855518/718592518803161125/UTfeNPSeqH.gif")////lera rasmek ba dle xot dani
     
    welcomer.send({ embed: norelden });


  }
});
client.on("guildMemberRemove", member => {
  //FOG
  var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`ئەی ئەی خۆ لێفتی کرد:sweat_smile:
مەگەر نەیەیتە وە خۆم ئەزانم چی ولێ ئەکەم:sweat_smile:` )
    .setDescription(``)
    .setColor("RANDOM")
    .setImage(
      "https://media.giphy.com/media/LnRmXE9bpqUZeDDjJm/giphy.gif"
    )
    .setTimestamp()

  var channel = member.guild.channels.find("name", "left");
  if (!channel) return;
  channel.send({ embed: embed }); //FOG
})

client.once('ready', (o) => {
  console.log('Sunt gata!');
  client.user.setActivity('KO-_-KO')
  });

client.on('message', message => {
//ARBELE
if(message.content.includes("discord.gg")){
if(!message.member.hasPermission('ADMINISTRATOR')){
message.delete(); 
message.reply("‎!تكایه‌ ڕیكلام مه‌كه‌")
}
//ARBELE
}
//ARBELE
});

                      `کۆدی دژە ئێڤری وەن دەتوانن لەپڕۆجێکتەکانتان داینێن بەهیوای سوود`
       client.on('message', message => {
 
if(message.content.includes("@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("ئێڤری وەن لێمەدە بابی بابم")
}
 
}
 
});
 
 
client.on('message', message => {
 
if(message.content.includes("@everyone@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("شتی وا هەیە ئێڤری وەن لێدەی ")
}
 
}
 
});                          

client.on("ready", () => {
  
  let statuses = [`KOKO UP`,`HJ UP❤`,`GUITARIST❤`]
 
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/CAMPERpaywand"
    });
  }, 2000);
});

client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "slaw":
message.channel.send("baxer beit jargm ❤")


case "":

break;

default:

break;
}
})

client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "reklam agornawa":
message.channel.send("bale jargm bo OWNER bnera ❤")


case "":

break;

default:
  
break;
}
})

client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "koko kwa":
message.channel.send("xariki awazi tazaya ❤")


case "":

break;

default:
  
break;
}
})
client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "سڵاو":
message.channel.send("❤بەخێربێیت جەرگم")


case "":

break;

default:
  
break;
}
})
client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "ریکلام ئەکەن":
message.channel.send("bale jargm bo OWNER bnera ❤")


case "":

break;

default:
  
break;
}
})
client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "servar hack akam":
message.channel.send("dakase babi babm")


case "":

break;

default:
  
break;
}
})
client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "choni":
message.channel.send("bashi dlm ❤")


case "":

break;

default:
  
break;
}
})
client.on("message", message => {
  
var command = message.content
if(message.author.bot) return;

switch (command) {

case "bashi":
message.channel.send("bashi atu ❤")


case "":

break;

default:
  
break;
}
})
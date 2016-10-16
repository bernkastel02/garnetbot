/*
This is a test bot for Discord.HTC
*/

//[VARIABLES]
const DHTC = require('discord.htc')
var bot = new DHTC('token private')
var prefix = 'g~'
var ver = "1.2"
//[/VARIABLES]

var games = ["'I'm not cleaning up this mess.'",
  "'I thought violence would be the answer.'",
  "'We don't need to be careful. We just need to be huge.'" ,
  "'I can't say no to that face.'",
  "'No dinner for 1,000 years.'",
  "'All comedy is derived from fear.'"]

bot.on('botReady', () => {
  console.log('Ready!')
  changeGames();
})

bot.on('createdMessage', (message) => {
  var suff = message.content.split(' ')[0].substring(1); //since i need this it exists. don't complain alright?
	var suffix = message.content.substring(suff.length+2)
  var m = message.content
  var channelID = message.channel_id;

  if (m.startsWith(`${prefix}hello`)) {
    bot.uploadFile(channelID, "hi!", "./hello.png")
  }
  if (m.startsWith(`${prefix}invitelink`)) {
    bot.makeMessage(channelID, 'Thanks for asking!\nhttps://discordapp.com/oauth2/authorize?client_id=237317700043538433&scope=bot')
  }
  if (m.startsWith(`${prefix}git`)) {
    bot.makeMessage(channelID, "It's dangerous to go alone, take this! \nhttps://github.com/dead-js/garnetbot")
  }
  if (m.startsWith(`${prefix}help`)) {
    bot.makeMessage(channelID, ':gem: gαяηєт вσт :gem: \nhello - hello there! \ninvitelink - sends the invitelink \nlib - displays information on the lib used [`https://github.com/dead-js/garnetbot/pull/1/files`]')
  }
  if (m.startsWith(`${prefix}ping`)) {
    var realGame = games[Math.floor(Math.random() * games.length)];
    bot.makeMessage(channelID, "Pong, hey there. `" + realGame + "`")
  }
  if (m.startsWith(`${prefix}lib`)) {
    bot.makeMessage(channelID, "I am built on the test lib **Discord.HTC** created by nekonez#6986! Join the server here! https://discord.gg/fD3vFcX")
  }
  if (m.startsWith(`${prefix}info`)) {
    bot.makeMessage(channelID, ":gem: gαяηєт вσт :gem: \nVersion: "+ ver + " \nPrefix: g~ \nCreated by Charia#6059 \nSo far nekonez#6986 and jack ✗#5403 have contributed to this amazing bot. Sarcasm is such a great thing.")
  }
  if (m.startsWith(`${prefix}say`)) {
    var suff = m.split(' ')[0].substring(1);
    var suffix = m.substring(suff.length+2)
    bot.makeMessage(channelID, ":gem: gαяηєт вσт :gem: \n " + suffix)
  }
})

bot.connect()

function changeGames(){
  //#lazymofocka
  var realGame = games[Math.floor(Math.random() * games.length)];
	bot.changeGame(realGame, null)
	setTimeout(changeGames, 10000)
}

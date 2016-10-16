/*
This is a test bot for Discord.HTC
*/
/*
This is a test bot for Discord.HTC
*/
const DHTC = require('discord.htc')
var bot = new DHTC('rly')
var prefix = 'g~'

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
  var m = message.content
  var channelID = message.channel_id;
  if (m.startsWith(`${prefix}hello`)) {
    bot.uploadFile(channelID, "hi!", "./hello.png")
  }
  if (m.startsWith(`${prefix}invitelink`)) {
    bot.makeMessage(channelID, 'Thanks for asking!\nhttps://discordapp.com/oauth2/authorize?client_id=237317700043538433&scope=bot')
  }
  if (m.startsWith(`${prefix}help`)) {
    bot.makeMessage(channelID, ':gem: Garnet Bot :gem: \n`Prefix - g~`` \nhello - hello there! \ninvitelink - sends the invitelink \nlib - displays information on the lib used [`https://github.com/dead-js/garnetbot/pull/1/files`]')
  }
  if (m.startsWith(`${prefix}ping`)) {
    var realGame = games[Math.floor(Math.random() * games.length)];
    bot.makeMessage(channelID, "Pong, hey there. `" + realGame + "`")
  }
  if (m.startsWith(`${prefix}lib`)) {
    bot.makeMessage(channelID, "I am built on the test lib **Discord.HTC** created by nekonez#6986! Join the server here! https://discord.gg/fD3vFcX")
  }
  if (m.startsWith(`${prefix}info`)){
    bot.makeMessage(channelID, ":gem: Garnet Bot :gem: \nCreated by Charia#6059/dead.js \nSo far nekonez#6986 and jack ✗#5403 have contributed to this amazing bot. Sarcasm is such a great thing.")
  }
})

bot.connect()

function changeGames(){
  //#lazymofocka
  var realGame = games[Math.floor(Math.random() * games.length)];
	bot.changeGame(realGame, null)
	setTimeout(changeGames, 10000)
}

/*
This is a test bot for Discord.HTC
*/
const DHTC = require('discord.htc')
var bot = new DHTC('token goes here bitch')
var prefix = 'g~'

var games = ["'I'm not cleaning up this mess.'", "'I thought violence would be the answer.'", "'We don't need to be careful. We just need to be huge.'" ,"'I can't say no to that face.'"]

bot.on('botReady', () => {
  console.log('Ready!')
  changeGames();
})

bot.on('createdMessage', (message) => {

  var msg = message.content
  var channelID = message.channel_id
	
  if (msg.startsWith(`${prefix}hello`)) {
    bot.makeMessage(channelID, 'hi there!')
  }
  if (msg.startsWith(`${prefix}invitelink`)) {
    bot.makeMessage(channelID, 'Thanks for asking!\nhttps://discordapp.com/oauth2/authorize?client_id=237317700043538433&scope=bot')
  }
  if (msg.startsWith(`${prefix}help`)) {
    bot.makeMessage(channelID, ':gem: Garnet Bot :gem: \nPrefix - g~ \nhello - hello there! \ninvitelink - sends the invitelink')
  }
  if (msg.startsWith(`${prefix}ping`)) {
    var realGame = games[Math.floor(Math.random() * games.length)];
    bot.makeMessage(channelID, "Pong, hey there. `" + realGame + "`")
  }
 if (msg.startsWith(`${prefix}status`)) {
   bot.makeMessage(channelID, "I'm alive!")
 }
})

bot.connect()

function changeGames(){
  //#lazymofocka
  var realGame = games[Math.floor(Math.random() * games.length)];
	bot.changeGame(realGame, 1000)
	setTimeout(changeGames, 10000)
}

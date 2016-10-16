/*
This is a test bot for Discord.HTC
*/
const DHTC = require('discord.htc')
var bot = new DHTC('my token retard')
var prefix = 'g~'

var games = ["'I'm not cleaning up this mess.'", "'I thought violence would be the answer.'", "'We don't need to be careful. We just need to be huge.'" ,"'I can't say no to that face.'"]

bot.on('botReady', () => {
  console.log('Ready!')
  changeGames();
})

bot.on('createdMessage', (message) => {
  if (message.content.startsWith(`${prefix}hello`)) {
    bot.makeMessage(message.channel_id, 'hi there!')
  }
  if (message.content.startsWith(`${prefix}invitelink`)) {
    bot.makeMessage(message.channel_id, 'Thanks for asking!\nhttps://discordapp.com/oauth2/authorize?client_id=237317700043538433&scope=bot')
  }
  if (message.content.startsWith(`${prefix}help`)) {
    bot.makeMessage(message.channel_id, ':gem: Garnet Bot :gem: \nPrefix - g~ \nhello - hello there! \ninvitelink - sends the invitelink')
  }
  if (message.content.startsWith(`${prefix}ping`)) {
    var realGame = games[Math.floor(Math.random() * games.length)];
    bot.makeMessage(message.channel_id, "Pong, hey there. `" + realGame + "`")
  }
  if (message.content.startsWith(`${prefix}status`)) {
    bot.makeMessage(message.channel_id, "I'm alive!")
  }
})

bot.connect()

function changeGames(){
  //#lazymofocka
  var realGame = games[Math.floor(Math.random() * games.length)];
	bot.changeGame(realGame, 1000)
	setTimeout(changeGames, 10000)
}

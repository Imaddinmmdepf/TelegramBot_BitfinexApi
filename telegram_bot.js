var TelegramBot = require('node-telegram-bot-api')
var BFX = require('bitfinex-api-node')
cached_ticker = {
	"BTCUSD":null,
	"LTCUSD":null,
	"LTCBTC":null,
	"ETHUSD":null,
	"ETHBTC":null,
	"IOTUSD":null
}
function formatTicker(ticker){
	/*stringify to conver the string object to JSON object*/
	/*null ---> all object's properties are include in the JSON */
	/*two spaces for improving the style and desing*/
	ticker = JSON.stringify(ticker,null,2)
	return ticker
}
 var bfx = new BFX().ws

/*We need to get messages that user sends us*/
bfx.on('open',function(){
	bfx.subscribeTicker("BTCUSD")
	bfx.subscribeTicker("LTCUSD")
	bfx.subscribeTicker("LTCBTC")
	bfx.subscribeTicker("ETHUSD")
	bfx.subscribeTicker("ETHBTC")	
	bfx.subscribeTicker("IOTUSD")	
})
console.log("subscribed...")
/*We need to get messages that user sends us*/
bfx.on('ticker',function(pair,ticker){
	cached_ticker[pair] = formatTicker(ticker)
	console.log(ticker)

})

/*Array of button rows, each represented by an Array of KeyboardButton objects*/
keyboard = [
	//The ticker is a high level overview of the state of the market
	//KeyboardButton type = String Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed
	['/BTCUSD'],
	['/LTCUSD'],
	['/LTCBTC'],
	['/ETHUSD'],
	['/ETHBTC'],
	['/IOTUSD']
]
/*reply_markup --> Additional interface options. A JSON-serialized object for an inline keyboard, 
custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.*/
reply_markup = {
//	Array of button rows, each represented by an Array of KeyboardButton objects
	'keyboard': keyboard,
//requests clients to hide the keyboard vertically for optimal fit.
//By default = false
	'resize_keyborad': true
}


//Telegram related code
/*tocker provided by @BotFather*/
const TOKEN = 'YOUR TOKEN IS PROVIDED BY @BOTFATHER, IN TELEGRAM'
/*Create the new bot*/
var bot = new TelegramBot(TOKEN,{polling:true})
	/*A simple method for testing your bot's auth token. Requires no parameters. 
	Returns basic information. about the bot*/
bot.getMe().then(a => console.log(a))
	/*Register a RegExp to test against an incomming text message.*/
	/*the first parameter is a Regular expression which is used to find a text acorder to pattern*/
	/*The second one is a  	Callback will be called with 2 parameters, 
	the msg and the result of executing regexp.exec on message text.*/
bot.onText(/\/ticker/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,"Porfa Cara pan selecciona un par",{
		"reply_markup":reply_markup
	}).then(a=>console.log(a))
	})
bot.onText(/\/BTCUSD/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,cached_ticker["BTCUSD"])
	})
bot.onText(/\/LTCUSD/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,cached_ticker["LTCUSD"])
	})
bot.onText(/\/LTCBTC/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,cached_ticker["LTCBTC"])
	})
bot.onText(/\/ETHBTC/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,cached_ticker["ETHBTC"])
	})
bot.onText(/\/ETHUSD/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,cached_ticker["ETHUSD"])
	})
bot.onText(/\/IOTUSD/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,cached_ticker["IOTUSD"])
	})


bot.onText(/\/Hola/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,"Así me gusta! Esto es España!! Te has ganado 1 btc!! que es bromaaaa jaajaj xD")
	})

bot.onText(/\/Hi/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,"Que pasa so tonto, habla Español que estás en España. Escibe Hola en lugar de Hi")
	})

bot.onText(/\/A reveure!/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,"Que te den Catalán")
})
bot.onText(/\/A reveure/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,"Que te den Catalán")
})
bot.onText(/\/Adios/,function(msg,match){
	var chatId = msg.chat.id
	bot.sendMessage(chatId,"Dona un par de ETH a Imaddin, somos pobres.")
})
bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "This spectacular bot just have one single command.\n/Hola - Saluda al bot.\n/Hi - No lo hagas hazme caso.\n/A reveure! - El bot es Franquista\n/Adios - Di adios al bot\n/help - Comandos");
});

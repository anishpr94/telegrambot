var telegramBot = require('node-telegram-bot-api');
var cricapi = require("cricapi");

var token = '534165512:AAF0mTRYdQElbM4nrOhLB_362y1l-ziBYQ0';
var cric = 'dDP0FCw2M2PapTEg7Jee5YpRvhu1';

cricapi.setAPIKey(cric);
var api = new telegramBot(token, {
    polling: true
});
api.onText(/\/help/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "Ask me a joke");
});
// api.onText(/\/w+/, function (msg, match) {
//     var fromId = msg.from.id;
//     api.sendMessage(fromId, "Hello Gentle people, This is anish! see my profile  https://www.facebook.com/AnishPR");
// });
api.onText(/ipl/, function (msg, match) {
    var fromId = msg.from.id;
    console.log(msg);
    api.sendMessage(fromId, 'send frequency');
api.onText(/^\d+$/, function (msg, match) {
    var fromId = msg.from.id;
    console.log(msg.text);
    api.sendMessage(fromId, msg.text);
});
});
api.onText(/\/whoami/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "The creator of this buahaha");
});
api.onText(/hello/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "hello this is anish autoreply");
});
api.onText(/i love you/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "you too");
});
api.onText(/joke/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ir3WkxAuSU9GFIi2ZUp4wcyfrfrnJvy3XWiBkVf5hPa9zMuqNQ");
});

a = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiiC6SVT9KoerzmygOPVPj11C3-wKGRbNhDBFlBvzBtwgWRc-6A',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Ir3WkxAuSU9GFIi2ZUp4wcyfrfrnJvy3XWiBkVf5hPa9zMuqNQ', ]

api.onText(/what do you do/, function (msg, match) {
    var fromId = msg.from.id;
    api.sendMessage(fromId, "i work at oracle");
});

api.onText(/iplscore/, function (msg, match) {
    var fromId = msg.from.id;
    cricapi.cricketScore("1136611", function(error, databundle){ let message = JSON.parse(databundle); 
        api.sendMessage(fromId, message['score'])});
        setInterval(function(){
            cricapi.cricketScore("1136611", function(error, databundle){ let message = JSON.parse(databundle); 
                api.sendMessage(fromId, message['score'])});
        }, 120* 1000)   
});

cricapi.cricketScore("1136611", function(error, databundle){let message = JSON.parse(databundle); console.log(message['score'])});   
console.log("MadansFirstTelegramBot has started. Start conversations in your Telegram.");
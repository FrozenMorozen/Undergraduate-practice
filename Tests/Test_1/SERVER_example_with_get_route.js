const express        = require('express');
const app            = express();
const port = 58444;

function makeCounterOfTryRequest() {
  var currentCountOfTryRequest = 1;
  return function() {
    return currentCountOfTryRequest++;
  };
}
var counterOfTryRequest = makeCounterOfTryRequest();

app.listen(port, () => {
    console.log('SERVER LISTENING ON ' + port);
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
    });
app.get('/PUdata', function(req, res) {
	console.log('Запрос №'+counterOfTryRequest()+'  '+req.method+' принят');
	res.send({
		"tuk":"pyk",
		"tusk":"psyk"
	});
	/*function(){
    $.getJSON('power_state_data1.json', function(data) {
            for(var i=0;i<data.power_state_data1.length;i++){
                if (power_state_data1.tyk) {res.send('hello world');};
            }
    });
}*/
/*var $=JQuery;
$.getJSON('example.json', function(data) {
	 var items = [];
	 $.each(data, function(key, val) {
	   items.push('<li id="' + key + '">' + val + '</li>');
	 });
	 $('<ul/>', {

	   'class': 'my-new-list',

	   html: items.join('')

	 }).appendTo('body');

	})*/
    console.log('Ответ '+res.val+' отправлен');
    console.log('SERVER LISTENING ON ' + port);
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
    console.log('                    . . .');
});
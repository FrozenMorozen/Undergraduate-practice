const express        = require('express');
const app            = express();
const port = 58444;

const bodyParser     = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

/*app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});*/

function makeCounterOfTryRequest() {
  var currentCountOfTryRequest = 1;
  return function() {
    return currentCountOfTryRequest++;
  };
}
var counterOfTryRequest = makeCounterOfTryRequest();

app.listen(port, () => { console.log('SERVER LISTENING ON ' + port);
    setInterval(function() {
  console.log('                .');
}, 5000);
    });

app.options('',function(req,res,next) {
    console.log('Запрос №'+counterOfTryRequest()+'  '+req.method+' принят');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
    res.send();
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
    console.log('Ответ №'+ counterCountOfTryRequest+' отправлен');
    console.log('SERVER LISTENING ON ' + port);
});
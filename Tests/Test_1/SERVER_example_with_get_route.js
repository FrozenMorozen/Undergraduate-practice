const express        = require('express');
const app            = express();
const port = 58444;

const bodyParser     = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//-----https://learn.javascript.ru/screencast/nodejs

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-type, Accept, Authorization');
    res.header('Content-Security-Policy','default-src *');
    next();
});

function makeCounterOfTryRequest() {
  var currentCountOfTryRequest = 1;
  return function() {
    return currentCountOfTryRequest++;
  };
}
var counterOfTryRequest = makeCounterOfTryRequest();


app.listen(port, () => {
  console.log('START SERVER LISTENING ON ' + port);
  var y=-1;
  var flag=false;
    setInterval(function() {
      console.log(''); console.log('');
      console.log(new Date()+'      WE ARE LIVE ON '+port);
      console.log(''); console.log('');
}, 60000);

    });


app.get('/PUdata/:id', function(req, res) {
  const id = req.params.id;

    console.log('Запрос №'+counterOfTryRequest()+' данных '+id+' блока принят');
    console.log(' '+JSON.stringify(req.params));
    res.send(
      { 
        "power": 123,
        "network_frequency": 35,
        "axial_shift": 1.01,
        "drum_level": 14,
        "pressure_in_the_drum": 124,
        "block_stop": true
      }
      );
    console.log('Ответ №'+ counterOfTryRequest()+'  '+ res.head+' отправлен');
    console.log('');
});

app.get('/power_state_data1', function(req, res) {

    console.log('Запрос №'+counterOfTryRequest()+'  '+req.method+' принят');
    console.log(' '+JSON.stringify(req.body));
    res.send(' ыыы');


    console.log('Ответ №'+ counterOfTryRequest()+'  '+ res.head+' отправлен');
  });

app.get('/auth', function(req,res){
      console.log('Запрос №'+counterOfTryRequest()+'  '+req.method+' принят');
    console.log(' '+JSON.stringify(req.body));


    //--пример запроса на стороне сайта с колбэком
    /*var $=require('JQuery');
    var test;
    $.ajax({
        url: "authorization.json",
        dataType: "JSON",
        async: true,
        success: function(msg){
            test = msg;
            console.log('Содержимое файла: '+test);
        }
    });*/
/*JQuery.getJSON('authorization.json', function(data){
  var test;
  test=data;
  res.text=test;
  console.log(test);
});*/

/*loadURL = function(url) {
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    oRequest.setRequestHeader("User-Agent", navigator.userAgent);
    oRequest.send(null);
    console.log(oRequest.responseText);
    return oRequest.responseText;
};*/

var json;
    app.get('authorization.json', function(data){
      json=data;
      res.text=json;
      console.log(json);
        }); 


var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['json'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));

    console.log('Ответ №'+ counterOfTryRequest()+'  '+ res.head+' отправлен');
});
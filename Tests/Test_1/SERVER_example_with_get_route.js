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

//----пример данных для отправки клиенту
var response={ 
        "power": [123, 152, 1178],
        "network_frequency": [35, 37, 75],
        "axial_shift": [1.01, 2.04, 3.08],
        "drum_level": [14, 16, 19],
        "pressure_in_the_drum": [124, 148, 111],
        "block_stop": true
      };

app.get('/PUdata/:id', function(req, res) {
  var id = req.params.id;

    console.log('Запрос №'+counterOfTryRequest()+' данных '+ id +' блока принят');
    console.log(' '+JSON.stringify(req.header('Referer')));
    res.send(response);
    console.log('Ответ №'+ JSON.stringify(response,"",10) +' отправлен');
    console.log('');
});


app.get('/auth', function(req,res){
      console.log('Запрос №'+counterOfTryRequest()+'  '+req.method+' принят');
    console.log(' '+JSON.stringify(req.header('Referer')));

    res.download(__dirname +'/authorization.json',function(err){
      if (err) {
        console.log('Ошибка загрузки файла'+ err);
      } else {
        console.log('Файл успешно отправлен----------------------------');
      }
    });

    console.log('Ответ №'+ res.head+' отправлен');
});


var jsonParser = bodyParser.json();
app.post("/auth", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);

    var fs = require("fs");
      fs.readFile("authorization.json", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; // если возникла ошибка
                console.log(data);  // выводим считанные данные
});
    console.log(req.body);
    res.json(`${req.body.username} - ${req.body.password}`);
});
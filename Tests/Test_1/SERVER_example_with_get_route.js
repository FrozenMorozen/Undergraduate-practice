const express        = require('express');
const app            = express();
const port = 58444;

const bodyParser     = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

//-----https://learn.javascript.ru/screencast/nodejs

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
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

var line='|||||||||||||||||||||||||||||||||||';
app.listen(port, () => {
  console.log(line);
  console.log(line.slice(0,-33)+'START SERVER LISTENING ON ' + port +line.slice(0,-33));
  console.log(line);
  var dot='.';
  var y=-1;
  var flag=false;
    setInterval(function() {
      if (flag) {
        dot=dot.slice(0,-1);
        y=y+1;
        console.log(dot+line.slice(0,y));
        if (dot.length==1) { 
          flag=false;
          console.log(line.slice(0,-28)+'WE ARE LIVE ON ' + port+line.slice(0,-28)+'|');
        };
      } else {
        console.log(dot+line.slice(0,y));
        dot=dot+'.';
        y=y-1;
        if (dot.length==16) { 
          flag=true;
          console.log(dot+line.slice(0,y));
        };
      };
    
    
}, 2000);

    });

app.get('/PUdata', function(req, res) {

    console.log('Запрос №'+counterOfTryRequest()+'  '+req.method+' принят');
    console.log(' '+JSON.stringify(req.body));
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
    console.log('Ответ №'+ counterOfTryRequest()+'  '+ res.head+' отправлен');
    console.log(line.slice(0,-28)+'WE ARE LIVE ON ' + port+line.slice(0,-28)+'|');
});

app.get('/power_state_data1', function(req, res) {

    console.log('Запрос №'+counterOfTryRequest()+'  '+req.method+' принят');
    console.log(' '+JSON.stringify(req.body));
    res.send(' ыыы');


    console.log('Ответ №'+ counterOfTryRequest()+'  '+ res.head+' отправлен');
    console.log(line.slice(0,-28)+'WE ARE LIVE ON ' + port+line.slice(0,-28)+'|');
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
JQuery.getJSON('authorization.json', function(data){
  var test;
  test=data;
  res.text=test;
  console.log(test);
});

    app.get('authorization.json', function(data){
        var test=JSON.parse(data.text);
        res.send(test);
    });

    console.log('Ответ №'+ counterOfTryRequest()+'  '+ res.head+' отправлен');
    console.log(line.slice(0,-28)+'WE ARE LIVE ON ' + port+line.slice(0,-28)+'|');
});
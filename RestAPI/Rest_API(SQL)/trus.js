var port = process.env.PORT || 8000;
var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var bodyParser = require('body-parser');
var path = require('path');
var crypto = require('crypto');
var reduce = require('reduce-component');
var Connection = require('tedious').Connection; 
console.log('start');
app.use(bodyParser.json());
app.listen(port, function () {
console.log('Listening on port ', port);
});

var config = {  
        userName: 'program',  
        password: '123456',  
        server: 'localhost',  
        options: {database: 'DGKX\\MOROZOV_DB'}  
   };
 console.log('--------------------------');
var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES; 
 console.log('--------------------------');
var connection = new Connection(config); 
 console.log('--------------------------');
  connection.on('connect', function(err){
     if(err){
    console.log(err);    
    }else{
var request = new Request("SELECT * FROM Autorization_data", function(err, rowCount, rows) {
 console.log('--------------------------');
});
request.on("row", function(columns) {
   console.log('--------------------------');  
     console.log(columns[0].value);
})
        connection.execSql(request);
    }
})
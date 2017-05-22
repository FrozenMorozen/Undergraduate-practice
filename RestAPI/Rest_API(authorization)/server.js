const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 58444;
app.use(bodyParser.urlencoded({extended: true}));
MongoClient.connect('mongodb://admin:1234@ds123311.mlab.com:23311/exampledb',(err,database) => {
	if (err) return console.log(err) 
    require('./app/routes')(app, database);
    app.listen(port, () => {
    console.log('Server listening on ' + port);
    });
});
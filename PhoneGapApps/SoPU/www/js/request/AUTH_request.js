var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:58444/notes',
  headers: 
   { 'postman-token': 'f7948290-0e85-01c1-26c8-4a4eacd0aeeb',
     'cache-control': 'no-cache',
     'content-type': 'application/x-www-form-urlencoded' },
  form: { title: 'тык', body: 'пык' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

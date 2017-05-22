var qs = require("querystring");
var http = require("http");

var options = {
  "method": "GET",
  "hostname": "localhost",
  "port": "58444",
  "path": "/notes/59191d9f3ceaec0b2486c107",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "postman-token": "ac134247-6ef1-276d-4e20-02c835238832"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ title: 'vibrationEx', body: '12555', _id: '1' }));
req.end();
var http = require("http");

var options = {
  "method": "GET",
  "hostname": "localhost",
  "port": "58444",
  "path": "/notes",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "f20319e6-eb96-40b3-736a-9cfa07d6a492"
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

req.end();

//  /C:/Users/Администратор/Desktop/Практика/projects/RestAPI/Rest_API(authorization)/app/database/authorization_data.json
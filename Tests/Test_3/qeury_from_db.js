var express = require("express");
var sql = require("mssql");
 
var app = express();
var connectionString = "Driver={SQL Server Native Client 11.0};Server={.};Database={Caspar};Trusted_Connection={Yes};";

 
app.get("/", function(req, res) {
     sql.open(connectionString, function(err, conn) {
         if(err) {
             console.log(err);
             res.send(500, "Cannot open connection.");
         }
         else {
             conn.queryRaw("SELECT * FROM Autorization_data", function(err, results) {
                 if(err) {
                     console.log(err);
                     res.send(500, "Cannot retrieve records.");
                 }
                 else {
                     res.json(results);
                 }
             });
         }
     });
 });
 
app.listen(10000);
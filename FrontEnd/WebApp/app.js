var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();
var client = redis.createClient('6379', process.env.REDIS || 'redis');


app
//Root URL
.get('/', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  client.hgetall("counters", function (err, obj) {
    //initialise counters if they don't already exist
    obj = obj || {};
    //increment counter for remote IP
    if (obj[ip]) obj[ip]++;
    else obj[ip] = 1;
    client.HMSET("counters", obj);
  });

  //increment total count by 1 and return count
  client.incr('counter', function(err, count) {
    if(err) return next(err);
    res.send(""+count)
  });
})

//Get current counts by IP
.get("/counters", function(req,res,next){
  client.hgetall("counters", function (err, counters) {
    res.send(JSON.stringify(counters));
  })
})

//Health check for Proxy
.get("/health",function(req,res,next){
  res.send("OK")
});


http.createServer(app).listen(process.env.PORT || 80, function() {
  console.log('Listening on port ' + (process.env.PORT || 80));
});

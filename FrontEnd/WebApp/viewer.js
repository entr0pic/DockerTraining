var http = require('http');

var options = {
  host: "proxy",
  path: '/'
};

console.log("Started viewer for: " + options.host + options.path)

callback = function(response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    console.log(str);
  });
}

if (process.env.ENABLED!="0") {
  setInterval(function(){
    var requestCount = Math.round(Math.random()*10);
    for (var i=0; i<requestCount; i++) {
      http.request(options, callback).end();
    }
  },200);
}

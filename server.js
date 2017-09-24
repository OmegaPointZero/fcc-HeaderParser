// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get("/", function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var lang = req.headers['accept-language'].split(',')[0];
  var os = req.headers['user-agent'].split(/[()]+/)[1];
  var headers = req.headers;
  res.writeHead(200, {'Content-Type':'application/JSON'})
  res.write(JSON.stringify({
    ipaddress: ip,
    language: lang,
    software: os
  }))
  res.end();
});




var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

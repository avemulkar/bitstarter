var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    
    var responseFile = fs.readFileSync(index.html)
    response.send(responseFile);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

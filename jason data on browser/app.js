var http = require('http');
var fs = require ('fs');

var port = 8080;
var server =  http.createServer((req, res)=>{
     console.log(`Request was sent to ${req.url}`);
     res.writeHead(200,{'Content-type': 'application/json'});
     var myobj = {
          "name" : "Ahmed",
          "age": 25,
          "designation": "junior developer", 
          "experience": "5 years",
          "address": {
              "house_number": "K-334",
              "street":"Jackson",
              "city": "Karachi",
              "country":"Pakistan"
          }
     };
     res.end(JSON.stringify(myobj));
});

server.listen(port,()=>{
console.log(`Port is running at ${port}`);
});

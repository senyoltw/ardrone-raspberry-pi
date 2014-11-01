var arDrone = require('ar-drone');
var client  = arDrone.createClient();
var http = require("http");
var stream  = require("dronestream");

var server = http.createServer(function(req, res) {
  require("fs").createReadStream(__dirname + "/index.html").pipe(res);
});

stream.listen(server);
server.listen(3000);

console.log("access! localhost:3000");
console.log("try! takeoff() land() stop() front(0.1) back(0.1) left(0.1) right(0.1) clockwise(0.3) counterClockwise(0.3) up(0.1) down(0.1) animate('flipRight', 10) ");

console.log("You have control. : drone> ");

client.createRepl();

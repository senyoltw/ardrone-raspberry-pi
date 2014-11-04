//!!You need run root or sudo!!

var arDrone = require('ar-drone');
var client  = arDrone.createClient();

var http = require("http");
var stream  = require("dronestream");

var usonic = require('r-pi-usonic');
var sensor = usonic.sensor(24, 23);

var server = http.createServer(function(req, res) {
  require("fs").createReadStream(__dirname + "/index.html").pipe(res);
});

stream.listen(server);
server.listen(3000);

client.stop();
client.calibrate(0);
client.disableEmergency();

client.takeoff();
console.log('Start! AR Drone control!');

var control = function(){
	var distance = sensor();
	var distance_far;

	if (distance < 120) distance_far = false;
	else distance_far = true;

	console.log('Distance: ' + distance + ' cm');

	if (distance_far) {
		console.log('far! go ahead');
		client.front(0.03);
	}
	else {
		console.log('near! spin');
		client.clockwise(0.3);
	}
	setTimeout(function () {
		client.stop();
		control();
	}, 100);
};

setTimeout(function () {
  control();
}, 2000);

client.after(60000, function() {
    this.stop();
    this.land();
});

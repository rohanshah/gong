var express = require('express');
var app = express();

var arduino = require('duino');
var board = new arduino.Board({debug:true});
var led = new arduino.Led({
	board: board,
	pin: 13
});

app.post('/gong/', function(req, res){
	res.status(200).end('Rang The Gong');
	led.gong();
});

app.listen(3000);
console.log('Listenting at port 3000');


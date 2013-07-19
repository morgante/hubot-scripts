// Description:
//    Hubot can be super random
//
// Dependencies:
//   underscore
//
// Configuration:
//   None
//
// Commands:
//   hubot yow - returns a random outburst
//
// Author:
//   Morgante Pell

var _ = require('underscore');

function YOW(robot) {
	self = this;
	
	robot.respond(/yow$/i, function(msg) {
		
		msg.send(self.get());
	    
	});
	
}

module.exports = function( robot ) {
	new YOW( robot );
}

YOW.prototype.get = function() {
	yows = [
	      "Actually, what I'd like is a little toy spaceship!!",
	      'All of life is a blur of Republicans and meat!',
	      'Am I accompanied by a PARENT or GUARDIAN?',
	      'Am I elected yet?',
	      'Am I in GRADUATE SCHOOL yet?',
	      'Am I SHOPLIFTING?',
	      'An air of FRENCH FRIES permeates my nostrils!!',
	      'An Italian is COMBING his hair in suburban DES MOINES!',
	      'And furthermore, my bowling average is unimpeachable!!!',
	      'Are we live or on tape?',
	      'Are we on STRIKE yet?',
	      'Are we THERE yet?',
	      'Are we THERE yet?  My MIND is a SUBMARINE!!',
	      'Are you mentally here at Pizza Hut??',
	      'As President I have to go vacuum my coin collection!',
				'Your kid may be an honors student, but you\'re still an idiot.'];
	
	return yows[_.random(yows.length)];
}


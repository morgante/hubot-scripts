// Description:
//    Hubot protects his favorites
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//
//
// Author:
//   Morgante Pell <http://morgante.net>

var _ = require('underscore');

var favorites = [
    'morgante',
    'zencephalon'
]

module.exports = function(robot) {
    
    // var cleverbot = new Cleverbot;
    
	robot.hear(/(\S+[^-:\s])[: ]*--(\s|$)/, function(msg) {
        
        var who = msg.match[1].toLowerCase();
        
	    if( _.indexOf( favorites, who ) != -1 )
	    {
	        msg.send( 'Nobody messes with my friends! ' + who + '++' );
	    }
	    	    
	});

}
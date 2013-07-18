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

function giveKarma( who, karma, robot ) {
		
	if( karma < 0 )
	{
		msg = who + '--';
		karma++;
	}
	else
	{
		msg = who + '++'
		karma--
	}
	
	robot.send( { user: { name: 'manyabot' } }, msg );
	
	if( karma != 0 )
	{
		setTimeout( giveKarma, 10000, who, karma, robot );
	}
	
}

module.exports = function(robot) {
    
    // var cleverbot = new Cleverbot;
    
	robot.hear(/(\S+[^-:\s])[: ]*--(\s|$)/, function(msg) {
        
      var who = msg.match[1].toLowerCase();
        
	    if( _.indexOf( favorites, who ) != -1 )
	    {
	        msg.send( 'Nobody messes with my friends! ' + who + '++' );
	    }
	    	    
	});
	
	robot.respond(/give (\S+[^-:\s])[: ]* (\d+) karma(\s|$)/, function(msg) {
				
		giveKarma( msg.match[1], msg.match[2], robot );
	    	    
	});
	
	robot.respond(/take (\d+) karma from (\S+[^-:\s])[: ]*(\s|$)/, function(msg) {
				
		giveKarma( msg.match[2], -msg.match[1], robot );
	    	    
	});

}
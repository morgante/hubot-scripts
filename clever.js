// Description:
//    Hubot can pretend to be clever!
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot * - returns whether is it christmas or not
//
// Author:
//   Johnny G. Halife

var _ = require('underscore');
var Cleverbot = require('cleverbot-node')

module.exports = function(robot) {
    
    var cleverbot = new Cleverbot;

    // var CBots = [new Cleverbot,new Cleverbot]
    //   , i = 0
    //   , name = ['Bob Loblaw', 'Stan Sitwell']
    //   , callback = function callback(resp){
    //     CBots[i].write(resp['message'],callback);
    //     console.log(name[i = ( ( i + 1 ) %2)],' : ',  resp['message'])
    //   };
    // 
    // callback({message:'Just a small town girl'})
    
	robot.respond(/(.+)/i, function(msg) {
	    
        // console.log( msg, robot );
                
        var handles = 0;
	    
	    _.each( robot.listeners, function( listener ) {
	        if( listener.matcher( msg.message ) )
	        {
	            handles++;
	        }
	    });
	    	    
	    if( handles < 2 )
	    {
	        
	        cleverbot.write( msg.match[1], function( cleverness ) {
	            console.log( cleverness );
	            msg.reply( cleverness.message );
	        });
	        
	    }
	    
	});
}
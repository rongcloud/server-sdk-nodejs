var apis = require( './apis' );
var rongrequest = require( './rongrequest' );

exports.publish = function( fromUserId, toUserId, objectName, content, format, callback ) {
	rongrequest.request( apis['message']['publish'], {
		fromUserId : fromUserId,
		toUserId   : toUserId,
		objectName : objectName,
		content    : content
	}, format, function( err, resultText ) {
		return callback( err, resultText );
	} );
}

exports.broadcast = function( fromUserId, objectName, content, format, callback ) {
	rongrequest.request( apis['message']['broadcast'], {
		fromUserId : fromUserId,
		objectName : objectName,
		content    : content
	}, format, function( err, resultText ) {
		return callback( err, resultText );
	} );
}
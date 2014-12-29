var apis = require( './apis' );
var rongrequest = require( './rongrequest' );

exports.getToken = function( userId, name, portraitUri, format, callback ) {
	rongrequest.request( apis['user']['getToken'], {
		userId 		: userId,
		name   		: name,
		portraitUri : portraitUri
	}, format, function( err, result ) {
		return callback( err, result );
	} );
}

exports.refresh = function( userId, name, portraitUri, format, callback ) {
	rongrequest.request( apis['user']['refresh'], {
		userId 		: userId,
		name   		: name,
		portraitUri : portraitUri
	}, format, function( err, result ) {
		return callback( err, result );
	} );
}

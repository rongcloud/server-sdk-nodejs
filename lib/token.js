var apis = require( './apis' );
var rongrequest = require( './rongrequest' );

exports.get = function( userId, name, portraitUri, format, callback ) {
	rongrequest.request( apis['token']['get'], {
		userId 		: userId,
		name   		: name,
		portraitUri : portraitUri
	}, format, function( err, result ) {
		return callback( err, result );
	} );
}

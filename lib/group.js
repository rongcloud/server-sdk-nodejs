var apis = require( './apis' );
var rongrequest = require( './rongrequest' );

exports.sync = function( userId, groupIdNamePairs, format, callback ) {
	var params = { userId : userId };
	for( var k in groupIdNamePairs ) {
		params[ 'group[' + k + ']' ] = groupIdNamePairs[k];
	}
	rongrequest.request( apis['group']['sync'], params, format, function( err, resultText ) {
		return callback( err, resultText );
	} );
}
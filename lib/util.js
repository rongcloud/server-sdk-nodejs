exports.promisify = require('bluebird').promisify;
var crypto = require('crypto');

function validateId( id ) {
	if( Number.isInteger( id ) )
		id = id.toString()
	return ( id.indexOf( ' ' ) == -1 && id.indexOf( '\t' ) == -1 && id.indexOf( '\n' ) == -1 && id.indexOf( '\r' ) == -1 && id.indexOf( '\r\n' ) == -1  );
}

exports.validateIDs = function( IDs ) {
	var valid = true;
	for( var i=0; i<IDs.length; ++i ) {
		if( ! validateId( IDs[i] ) ) {
			valid = false;
			break;
		}
	}
	return valid;
}

exports.validateId = validateId;
exports.sha1 = function(input){
    var shasum = crypto.createHash('sha1');
    shasum.update(input);
	return shasum.digest('hex');
}

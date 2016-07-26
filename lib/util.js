var crypto = require('crypto');
var formatFactory = {json:'json',xml:'xml'};

Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value;
};

function validateId( id ) {
	if( Number.isInteger( id ) )
		id = id.toString()
	return ( id.indexOf( ' ' ) == -1 && id.indexOf( '\t' ) == -1 && id.indexOf( '\n' ) == -1 && id.indexOf( '\r' ) == -1 && id.indexOf( '\r\n' ) == -1  );
}


exports.validateFormat = function(format){
  return format in formatFactory;
}

exports.check = function(opts,vals,position){
    for (var i = 0,len = opts.length; i < len; i++) {
        if (opts[i] != typeof vals[i]) {
            throw new Error("The index of " + i + " parameter was wrong type " + opts[i] +" [" + typeof vals[i] + "],position -> " + position);
        }
    }
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

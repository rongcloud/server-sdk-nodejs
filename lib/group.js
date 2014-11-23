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

function createGroup( userIDs, groupId, groupName, format, callback ) {
	var params = { groupId : groupId, groupName : groupName };
	console.log( typeof userIDs );
	if( typeof userIDs == 'object' && userIDs.length ) {
		rongrequest.requestWithSameFields( apis['group']['create'], params, [ { field : 'userId', values : userIDs } ], format, callback );
	} 
	else if( typeof userIDs == 'string' || typeof userIDs == 'number' ) {
		params.userId = userIDs;
		rongrequest.request( apis['group']['create'], params, format, callback );
	}
	else {
		throw new Error( "Invalid userId! The userId should be either a string, a number, or an non-empty array!" );
	}
}

exports.create = createGroup;
exports.join   = createGroup;
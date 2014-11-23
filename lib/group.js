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

exports.create = function( userIDs, groupId, groupName, format, callback ) {
	var params = { groupId : groupId, groupName : groupName };

	if( typeof userIDs == 'object' && userIDs.length ) {
		rongrequest.requestWithSameFields( apis['group']['create'], params, [ { field : 'userId', values : userIDs } ], format, callback );
	} 
	else if( typeof userIDs == 'string' ) {
		params.userId = userIDs;
		rongrequest.request( apis['group']['create'], params, format, callback );
	}
	else {
		
	}
}
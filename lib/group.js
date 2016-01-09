var apis 		= require( './apis' );
var rongrequest = require( './rongrequest' );
var util 		= require( './util' );
var rcResult 	= require( '../const' ).result;
var promisify   = util.promisify;

exports.sync = promisify(function( userId, groupIdNamePairs, format, callback ) {
	var params = { userId : userId };
	var validGroupId = true;
	for( var k in groupIdNamePairs ) {
		if( !util.validateId( k ) ) {
			validGroupId = false;
			break;
		}
		params[ 'group[' + k + ']' ] = groupIdNamePairs[k];
	}

	if( validGroupId ) {
		rongrequest.request( apis['group']['sync'], params, format, function( err, resultText ) {
			return callback( err, resultText );
		} );
	}
	else {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}
});

exports.quit = promisify(function( userIDs, groupId, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( 'Invalid group id', null );
	}

	var params = { groupId : groupId };
	if( typeof userIDs == 'object' && userIDs.length ) {
		rongrequest.requestWithSameFields( apis['group']['quit'], params, [ { field : 'userId', values : userIDs } ], format, callback );
	}
	else if( typeof userIDs == 'string' || typeof userIDs == 'number' ) {
		params.userId = userIDs;
		rongrequest.request( apis['group']['quit'], params, format, callback );
	}
	else {
		return callback( "Invalid userId! The userId should be either a string, a number, or an non-empty array!" );
	}
});

exports.dismiss = promisify(function( userId, groupId, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}

	rongrequest.request( apis['group']['dismiss'], {
		userId  : userId,
		groupId : groupId
	}, format, function( err, resultText ) {
		return callback( err, resultText );
	} );
});


exports.refresh = promisify(function( groupId, groupName, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}

  rongrequest.request( apis['group']['refresh'], {
    groupId   : groupId,
    groupName : groupName
  }, format, function( err, resultText ) {
    return callback( err, resultText );
  } );

});

function createGroup( userIDs, groupId, groupName, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}

	var params = { groupId : groupId, groupName : groupName };
	if( typeof userIDs == 'object' && userIDs.length ) {
		rongrequest.requestWithSameFields( apis['group']['create'], params, [ { field : 'userId', values : userIDs } ], format, callback );
	}
	else if( typeof userIDs == 'string' || typeof userIDs == 'number' ) {
		params.userId = userIDs;
		rongrequest.request( apis['group']['create'], params, format, callback );
	}
	else {
		return callback( "Invalid userId! The userId should be either a string, a number, or an non-empty array!" );
	}
}


var createGroupPromisified = promisify(createGroup);
exports.create = createGroupPromisified;
exports.join   = createGroupPromisified;


exports.user = {};
exports.user.query = promisify(function( groupId, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}

	var params = { groupId : groupId };
	rongrequest.request( apis['group']['user']['query'], params, format, function( err, result ) {
		return callback( err, result );
	} );
});


exports.user.gag = {};
exports.user.gag.add = promisify(function( userId, groupId, minute, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}

	var params = { userId : userId, groupId : groupId, minute : minute };
	rongrequest.request( apis['group']['user']['gag']['add'], params, format, function( err, result ) {
		return callback( err, result );
	} );
});

exports.user.gag.rollback = promisify(function( userId, groupId, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}

	var params = { userId : userId, groupId : groupId };
	rongrequest.request( apis['group']['user']['gag']['rollback'], params, format, function( err, result ) {
		return callback( err, result );
	} );
});

exports.user.gag.list = promisify(function( groupId, format, callback ) {
	if( !util.validateId( groupId ) ) {
		return callback( { code : rcResult.INVALID_GROUPID, message : rcResult.INVALID_GROUPID_MSG }, null );
	}

	var params = { groupId : groupId };
	rongrequest.request( apis['group']['user']['gag']['list'], params, format, function( err, result ) {
		return callback( err, result );
	} );
});

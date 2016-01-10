var apis = require( './apis' );
var rongrequest = require( './rongrequest' );
var promisify   = require( './util' ).promisify;

exports.getToken = promisify(function( userId, name, portraitUri, format, callback ) {
	rongrequest.request( apis['user']['getToken'], {
		userId 		: userId,
		name   		: name,
		portraitUri : portraitUri
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});

exports.refresh = promisify(function( userId, name, portraitUri, format, callback ) {
	rongrequest.request( apis['user']['refresh'], {
		userId 		: userId,
		name   		: name,
		portraitUri : portraitUri
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});


exports.checkOnline = promisify(function( userId, format, callback ) {
	rongrequest.request( apis['user']['checkOnline'], {
		userId 		: userId
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});


exports.block = promisify(function( userId, numMinutes, format, callback ) {
	numMinutes = parseInt( numMinutes );

	if( numMinutes <= 0 ) { // Don't need to call the API.
		return callback( null, '{"code":200}' );
	}

	if( numMinutes > 43200 ) {
		numMinutes = 43200;
	}

	rongrequest.request( apis['user']['block'], {
		userId 		: userId,
		minute    : numMinutes
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});



exports.unblock = promisify(function( userId, format, callback ) {
	rongrequest.request( apis['user']['unblock'], {
		userId 		: userId
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});

exports.block.query = promisify(function( format, callback ) {
	rongrequest.request( apis['user']['queryBlocked'], {}, format, function( err, result ) {
		return callback( err, result );
	} );
});

exports.blacklist = {};

exports.blacklist.add = promisify(function( userId, blackUserId, format, callback ) {
	rongrequest.request( apis['user']['addToBlackList'], {
		userId 		  : userId,
		blackUserId : blackUserId
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});

exports.blacklist.remove = promisify(function( userId, blackUserId, format, callback ) {
	rongrequest.request( apis['user']['removeFromBlacklist'], {
		userId 		  : userId,
		blackUserId : blackUserId
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});

exports.blacklist.query = promisify(function( userId, format, callback ) {
	rongrequest.request( apis['user']['queryBlacklist'], {
		userId : userId
	}, format, function( err, result ) {
		return callback( err, result );
	} );
});

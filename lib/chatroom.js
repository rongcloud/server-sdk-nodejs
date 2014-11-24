var apis 		= require( './apis' );
var util 		= require( './util' );
var rongrequest = require( './rongrequest' );

exports.create = function( chatRoomIDNamePairs, format, callback ) {
	var params = {};
	for( var i=0; i<chatRoomIDNamePairs.length; ++i ) {
		var key = 'chatroom[' + chatRoomIDNamePairs[i].id + ']';
		params[ key ] = chatRoomIDNamePairs[i].name;
	}

	rongrequest.request( apis['chatroom']['create'], params, format, callback );
}

exports.destroy = function( chatRoomIDs, format, callback ) {
	rongrequest.requestWithSameFields( apis['chatroom']['destroy'], {}, [{field:'chatroomId', values:chatRoomIDs}], format, callback );
}

exports.query = function( chatRoomIDs, format, callback ) {
	// Check the IDs.
	var valid = util.validateIDs( chatRoomIDs );
	if( valid ) {
		callback( 'Invalid symbols in chat room id', null );
	}
	else {
		rongrequest.requestWithSameFields( apis['chatroom']['query'], {}, [{field:'chatroomId', values:chatRoomIDs}], format, callback );
	}
}

exports.queryAll = function( format, callback ) {
	rongrequest.requestWithSameFields( apis['chatroom']['query'], {}, [], format, callback );
}
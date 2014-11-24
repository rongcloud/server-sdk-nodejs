var apis = require( './apis' );
var rongrequest = require( './rongrequest' );

exports.create = function( chatRoomIDNamePairs, format, callback ) {
	var params = {};
	for( var i=0; i<chatRoomIDNamePairs; ++i ) {
		var key = 'chatroom[' + chatRoomIDNamePairs[i].id + ']';
		params[ key ] = chatRoomIDNamePairs[i].name;
	}

	rongrequest.request( apis['chatroom']['create'], params, format, callback );
}
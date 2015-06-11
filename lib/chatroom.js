var apis 		= require( './apis' );
var util 		= require( './util' );
var rongrequest = require( './rongrequest' );
var rcResult 	= require( '../const' ).result;

exports.create = function( chatRoomIDNamePairs, format, callback ) {
	var params = {};
	var chatRoomId;
	var validChatRoomId = true;
	for( var i=0; i<chatRoomIDNamePairs.length; ++i ) {
		chatRoomId = chatRoomIDNamePairs[i].id;
		if( !util.validateId( chatRoomId ) ) {
			validChatRoomId = false;
			break;
		}
		var key = 'chatroom[' + chatRoomId + ']';
		params[ key ] = chatRoomIDNamePairs[i].name;
	}
	if( validChatRoomId ) {
		rongrequest.request( apis['chatroom']['create'], params, format, callback );	
	}
	else {
		return callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
	}
}

exports.destroy = function( chatRoomIDs, format, callback ) {
	if( 'object' == typeof chatRoomIDs && chatRoomIDs.length ) {
		if( !util.validateIDs( chatRoomIDs ) ) {
			return callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
		}
		rongrequest.requestWithSameFields( apis['chatroom']['destroy'], {}, [{field:'chatroomId', values:chatRoomIDs}], format, callback );
	}
	else {
		if( !util.validateId( chatRoomIDs ) ) {
			return callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
		}
		rongrequest.request( apis['chatroom']['destroy'], { chatroomId : chatRoomIDs }, format, callback );
	}
}

exports.query = function( chatRoomIDs, format, callback ) {
	if( 'object' == typeof chatRoomIDs && chatRoomIDs.length ) {
		// Check the IDs.
		var valid = util.validateIDs( chatRoomIDs );
		if( !valid ) {
			callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
		}
		else {
			rongrequest.requestWithSameFields( apis['chatroom']['query'], {}, [{field:'chatroomId', values:chatRoomIDs}], format, callback );
		}
	}
	else {
		if( !util.validateId( chatRoomIDs ) ) {
			return callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
		}
		rongrequest.request( apis['chatroom']['query'], { chatroomId : chatRoomIDs }, format, callback );
	}
	
}

exports.user = {};
exports.user.query = function( chatRoomId, format, callback ) {
  if( !util.validateId( chatRoomId ) ) {
	  return callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
  }
  rongrequest.request( apis['chatroom']['user']['query'], {
    chatroomId : chatRoomId
  }, format, function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.queryAll = function( format, callback ) {
	rongrequest.requestWithSameFields( apis['chatroom']['query'], {}, [], format, callback );
}

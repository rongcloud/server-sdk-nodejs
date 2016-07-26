var apis 		= require( './apis' );
var util 		= require( './util' );
var rongrequest = require( './rongrequest' );
var rcResult 	= require( '../const' ).result;

exports.create = function( chatRoomIDNamePairs, format, callback ) {
	var params = {};
	var chatroomId;
	var validChatRoomId = true;
	for( var i=0; i<chatRoomIDNamePairs.length; ++i ) {
		chatroomId = chatRoomIDNamePairs[i].id;
		if( !util.validateId( chatroomId ) ) {
			validChatRoomId = false;
			break;
		}
		var key = 'chatroom[' + chatroomId + ']';
		params[ key ] = chatRoomIDNamePairs[i].name;
	}
	if( validChatRoomId ) {
		rongrequest.request( apis['chatroom']['create'], params, format, callback );
	}
	else {
		return callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
	}
}

exports.join = function(chatroomId,userId,format,callback){
	util.check(['string','string','string','function'],[chatroomId,userId,format,callback],'chatroom.join');
	rongrequest.request(apis['chatroom']['join'],
	{
		chatroomId : chatroomId,
		userId : userId
	},format,callback);
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
exports.message = {};

exports.user.query = function( chatroomId, count, order, format, callback ) {
  if( !util.validateId( chatroomId ) ) {
	  return callback( { code : rcResult.INVALID_CHATROOMID, message : rcResult.INVALID_CHATROOMID_MSG }, null );
  }
  rongrequest.request( apis['chatroom']['user']['query'], {
    chatroomId : chatroomId,
		count:count,
		order:order
  }, format, function( err, resultText ) {
    return callback( err, resultText );
  } );
}

exports.user.gagAdd = function(chatroomId,userId,minute,format,callback){
	util.check(['string','string','number','string','function'],[chatroomId,userId,minute,format,callback],'chatroom.user.gag.add');
	rongrequest.request(apis['chatroom']['user']['gagAdd'],
			{
				chatroomId : chatroomId,
				userId:userId,
				minute:minute
			},format,callback);
}

exports.user.gagRollback = function(chatroomId,userId,format,callback){
	util.check(['string','string','string','function'],[chatroomId,userId,format,callback],'chatroom.user.gag.rollback');
	rongrequest.request(apis['chatroom']['user']['gagRollback'],
			{
				chatroomId : chatroomId,
				userId:userId
			},format,function(err,resultText){
					return callback(err,resultText);
			});
}

exports.user.gagList = function(chatroomId,format,callback){
	util.check(['string','string','function'],[chatroomId,format,callback],'chatroom.user.gag.list');
	rongrequest.request(apis['chatroom']['user']['gagList'],
			{
				chatroomId : chatroomId
			},format,function(err,resultText){
					return callback(err,resultText);
			});
}

exports.user.blockAdd = function(chatroomId,userId,minute,format,callback){
	util.check(['string','string','number','string','function'],[chatroomId,userId,minute,format,callback],'chatroom.user.block.add');
	rongrequest.request(apis['chatroom']['user']['blockAdd'],
			{
				chatroomId : chatroomId,
				userId:userId,
				minute:minute
			},format,function(err,resultText){
					return callback(err,resultText);
			});
}

exports.user.blockRollback = function(chatroomId,userId,format,callback){
	util.check(['string','string','string','function'],[chatroomId,userId,format,callback],'chatroom.user.block.rollback');
	rongrequest.request(apis['chatroom']['user']['blockRollback'],
			{
				chatroomId : chatroomId,
				userId:userId
			},format,function(err,resultText){
					return callback(err,resultText);
			});
}

exports.user.blockList = function(chatroomId,format,callback){
	util.check(['string','string','function'],[chatroomId,format,callback],'chatroom.user.block.list');
	rongrequest.request(apis['chatroom']['user']['blockList'],
			{
				chatroomId : chatroomId
			},format,function(err,resultText){
					return callback(err,resultText);
			});
}

exports.message.stopDistribution = function(chatroomId,format,callback){
		util.check(['string','string','function'],[chatroomId,format,callback],'chatroom.message.stopDistribution');
		rongrequest.request(apis['chatroom']['message']['stop'],
			{
				chatroomId : chatroomId
			},
			format,function(err,resultText){
					return callback(err,resultText);
			});
}

exports.message.resumeDistribution = function(chatroomId,format,callback){
		util.check(['string','string','function'],[chatroomId,format,callback],'chatroom.message.resumeDistribution');
		rongrequest.request(apis['chatroom']['message']['resume'],
			{
				chatroomId : chatroomId
			},
			format,function(err,resultText){
					return callback(err,resultText);
			});
}

exports.queryAll = function( format, callback ) {
	rongrequest.requestWithSameFields( apis['chatroom']['query'], {}, [], format, callback );
}

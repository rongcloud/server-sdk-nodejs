var rongrequest = require( './rongrequest' );

exports.user 	 = require( './user' );
exports.message  = require( './message' );
exports.group 	 = require( './group' );
exports.chatroom = require( './chatroom' );
exports.wordfilter = require( './wordfilter' );


exports.init 			  = rongrequest.init;
exports.setParseResponse          = rongrequest.setParseResponse;
exports.validateSignature = rongrequest.validateSignature;

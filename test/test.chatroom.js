var should 		= require( 'should' );
var _ 			= require( 'underscore' );

var testConfig  = require( './config' );
var rongSDK 	= require( '../index' );

var chatroomIDs   = _.keys( testConfig.chatroom.chatroomIdNamePairs );
var chatroomNames = _.values( testConfig.chatroom.chatroomIdNamePairs );

describe( 'Chatroom Test', function() {
	before( function( done ) {
		// Init the SDK before testing.
		rongSDK.init( testConfig.appKey, testConfig.appSecret );
		done();
	} );

	after( function( done ) {
		done();
	} );

	describe( 'Create Chatroom', function() {
		it( 'Create chatroom: should return OK', function( done ) {
			rongSDK.chatroom.create( testConfig.chatroom.chatroomIdNamePairs, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );

	describe( 'Destroy Chatroom', function() {
		it( 'Destroy a single chatroom: should return OK', function( done ) {
			rongSDK.chatroom.destroy( chatroomIDs.pop(), function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

		it( 'Destroy chatrooms: should return OK', function( done ) {
			rongSDK.chatroom.destroy( chatroomIDs.splice( 0, 2 ), function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

	} );




} );
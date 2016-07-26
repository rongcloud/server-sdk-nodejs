var should 		= require( 'should' );
var _ 			= require( 'underscore' );

var testConfig  = require( './config' );
var rongSDK 	= require( '../index' );

var chatroomIDs   = _.keys( testConfig.chatroom.chatroomIdNamePairs );
var chatroomNames = _.values( testConfig.chatroom.chatroomIdNamePairs );
var testUser = testConfig.token;

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
			var chatroomIdNamePairsArray = [];
			_.each( chatroomIDs, function( chatroomId ) {
				chatroomIdNamePairsArray.push( { id : chatroomId, name : testConfig.chatroom.chatroomIdNamePairs[ chatroomId ] } );
			} );
			rongSDK.chatroom.create( chatroomIdNamePairsArray , function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );

	describe( 'Join Chatroom', function() {
		it('Join chatroom : should return OK',function(done){
				rongSDK.chatroom.join(chatroomIDs[0],testUser.userId,'json',function(err,resultText){
					should.not.exists( err );
					var result = JSON.parse( resultText );
					result.code.should.equal( 200 );
					done();
				});
		});
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


	describe( 'Query Chatroom', function() {
		it( 'Query a single chatroom: should return OK', function( done ) {
			rongSDK.chatroom.query( chatroomIDs[0], function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				var found = _.findWhere( result.chatRooms, { chrmId : chatroomIDs[0] } );
				found.should.not.be.undefined;
				found.should.have.property( 'chrmId', chatroomIDs[0] );
				done();
			} );
		} );

	} );

	describe( 'Query Chatroom Users', function() {
		it( 'Query the users of a chatroom: should return OK', function( done ) {
			rongSDK.chatroom.user.query( chatroomIDs[0],10,1, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

	} );


	describe('Banned Chatroom', function() {
		it('Add banned user to the chatroom: should return OK', function( done ) {
			rongSDK.chatroom.user.gagAdd( chatroomIDs[0],testUser.userId,2,'json', function( err, resultText ) {
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		});

		it('Remove banned user from the chatroom',function(done){
			rongSDK.chatroom.user.gagRollback(chatroomIDs[0],testUser.userId,'json', function( err, resultText ) {
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		});

		it('Query banned users from the chatroom',function(done){
			rongSDK.chatroom.user.gagList(chatroomIDs[0],'json', function( err, resultText ) {
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			});
		});
	});


	describe('Block Chatroom', function() {
		it('Add block user to the chatroom: should return OK', function( done ) {
			rongSDK.chatroom.user.blockAdd( chatroomIDs[0],testUser.userId,2,'json', function( err, resultText ) {
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		});

		it('Remove block user from the chatroom: should return OK',function(done){
			rongSDK.chatroom.user.blockRollback(chatroomIDs[0],testUser.userId,'json', function( err, resultText ) {
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		});

		it('Query block users from the chatroom: should return OK',function(done){
			rongSDK.chatroom.user.blockList(chatroomIDs[0],'json', function( err, resultText ) {
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			});
		});
	});

	describe('Chatroom message distribution',function(){
		 it('stopDistribution: should return OK',function(done){
			 	rongSDK.chatroom.message.stopDistribution(chatroomIDs[0],'json', function( err, resultText ) {
					var result = JSON.parse( resultText );
					result.code.should.equal( 200 );
					done();
				});
		 });

		 it('resumeDistribution: should return OK',function(done){
				rongSDK.chatroom.message.resumeDistribution(chatroomIDs[0],'json', function( err, resultText ) {
					var result = JSON.parse( resultText );
					result.code.should.equal( 200 );
					done();
				});
		 });
	});
} );

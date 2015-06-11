var should 		= require( 'should' );
var _ 			= require( 'underscore' );

var testConfig  = require( './config' );
var rongSDK 	= require( '../index' );

var groupIDs 	= _.keys( testConfig.group.groupIdNamePairs );
var groupNames 	= _.values( testConfig.group.groupIdNamePairs );

describe( 'Group Test', function() {
	before( function( done ) {
		// Init the SDK before testing.
		rongSDK.init( testConfig.appKey, testConfig.appSecret );
		done();
	} );

	after( function( done ) {
		done();
	} );

	describe( 'Sync Group', function() {
		it( 'Synchornize group: should return OK', function( done ) {
			rongSDK.group.sync( testConfig.group.userId, testConfig.group.groupIdNamePairs, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );

	describe( 'Quit Group', function() {
		it( 'Quit group: should return OK', function( done ) {
			rongSDK.group.quit( testConfig.group.userId, groupIDs[0], function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );

	describe( 'Create/Join Group', function() {
		it( 'Create/Join group with a single user: should return OK', function( done ) {
			rongSDK.group.create( testConfig.group.userId, 'MyGroupID', 'MyGroupName' , function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

		it( 'Create/Join group with multiple users: should return OK', function( done ) {
			rongSDK.group.join( [ testConfig.message.fromUserId, testConfig.message.toUserId ], 'MyGroupID', 'MyGroupName' , function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );

	describe( 'Dissmiss Group', function() {
		it( 'Dismiss group(' + groupNames[0] + '): should return OK', function( done ) {
			rongSDK.group.dismiss( testConfig.group.userId, groupIDs[0], function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

		it( 'Dismiss group(' + groupNames[1] + '): should return OK', function( done ) {
			rongSDK.group.dismiss( testConfig.group.userId, groupIDs[1], function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

		it( 'Dismiss group(MyGroupName): should return OK', function( done ) {
			rongSDK.group.dismiss( testConfig.group.userId, 'MyGroupID', function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

	} );


	describe( 'Refresh Group', function() {
    var newGroupName = groupNames[0];
		it( 'Refresh group(' + groupNames[0] + ') to be ' + newGroupName + ': should return OK', function( done ) {
			rongSDK.group.refresh( groupIDs[0], newGroupName, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
  });


} );

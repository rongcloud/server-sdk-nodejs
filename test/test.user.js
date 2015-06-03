
var should 		= require( 'should' );
var testConfig  = require( './config' );
var rongSDK 	= require( '../index' );


describe( 'User Test', function() {
	before( function( done ) {
		// Init the SDK before testing.
		rongSDK.init( testConfig.appKey, testConfig.appSecret );
		done();
	} );

	after( function( done ) {
		done();
	} );

	describe( 'Get token', function() {
		it( 'Should return OK', function( done ) {
			rongSDK.user.getToken( testConfig.token.userId, testConfig.token.name, testConfig.token.portraitUri, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );



	describe( 'Refresh user info', function() {
		it( 'Should return OK', function( done ) {
			rongSDK.user.refresh( testConfig.token.userId, testConfig.token.name, testConfig.token.portraitUri, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );


} );

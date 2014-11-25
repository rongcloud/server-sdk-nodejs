var should 		= require( 'should' );
var testConfig  = require( './config' );
var rongSDK 	= require( '../index' );


describe( 'Message Test', function() {
	before( function( done ) {
		// Init the SDK before testing.
		rongSDK.init( testConfig.appKey, testConfig.appSecret );
		done();
	} );

	after( function( done ) {
		done();
	} );

	describe( 'Send Message', function() {
		it( 'Text message: should return OK', function( done ) {
			rongSDK.message.publish( testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:TxtMsg', testConfig.message.textMsg, function( err, resultText ) {
				should.not.exists( err );
				console.log( resultText );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );
	} );



	// describe( 'Broadcast Message', function() {
	// 	it( 'Should return OK', function( done ) {
	// 		rongSDK.message.broadcast( testConfig.message.fromUserId, 'RC:TxtMsg', testConfig.message.textMsg, function( err, resultText ) {
	// 			should.not.exists( err );
	// 			console.log( resultText );
	// 			var result = JSON.parse( resultText );
	// 			result.code.should.equal( 200 );
	// 			done();
	// 		} );
	// 	} );
	// } );

} );
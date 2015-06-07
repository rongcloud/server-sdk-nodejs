var fs 			= require( 'fs' );
var should 		= require( 'should' );

var testConfig  = require( './config' );
var rongSDK 	= require( '../index' );

var base64Voice	= new Buffer( fs.readFileSync( './testvoice.amr' ) ).toString( 'base64' );
var base64Image	= new Buffer( fs.readFileSync( './raindrop.jpg' ) ).toString( 'base64' );

describe( 'Message Test', function() {
	before( function( done ) {
		// Init the SDK before testing.
		rongSDK.init( testConfig.appKey, testConfig.appSecret );
		done();
	} );

	after( function( done ) {
		done();
	} );

	describe( 'Publish Message', function() {
		it( 'Text message: should return OK', function( done ) {
			var textMessageObject = { content : testConfig.message.textMsg };
			rongSDK.message.publish( testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:TxtMsg', JSON.stringify( textMessageObject ), function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

		it( 'Image message: should return OK', function( done ) {
			var imageMessageObject = { content : base64Image, imageUrl : 'http://lanceju-com.qiniudn.com/raindrop.jpg' };
			rongSDK.message.publish( testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:ImgMsg', JSON.stringify( imageMessageObject ), function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
		} );

		it( 'Voice message: should return OK', function( done ) {
			var voiceMessageObject = { content : base64Voice, duration : 4 };
			rongSDK.message.publish( testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:VcMsg', JSON.stringify( voiceMessageObject ), function( err, resultText ) {
				should.not.exists( err );
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
	// 			var result = JSON.parse( resultText );
	// 			result.code.should.equal( 200 );
	// 			done();
	// 		} );
	// 	} );
	// } );

} );

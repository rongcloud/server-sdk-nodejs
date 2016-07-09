var should 		= require( 'should' );

var testConfig  = require( './config' );
var rongSDK 	= require( '../index' );


describe( 'Wordfilter Test', function() {
    before( function( done ) {
        // Init the SDK before testing.
        rongSDK.init( testConfig.appKey, testConfig.appSecret );
        done();
    } );

    after( function( done ) {
        done();
    } );

    it( 'Add wordfilter: should return OK', function( done ) {
        rongSDK.wordfilter.add( 'word1', function( err, resultText ) {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            done();
        } );
    } );

    it( 'List wordfilters: should return OK', function( done ) {
        rongSDK.wordfilter.list( function( err, resultText ) {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            done();
        } );
    } );

    it( 'Delete wordfilter: should return OK', function( done ) {
        rongSDK.wordfilter.delete( 'word1', function( err, resultText ) {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            done();
        } );
    } );

} );


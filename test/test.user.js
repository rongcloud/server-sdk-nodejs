
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

	describe( 'Check user online status', function() {
		it( 'Check a non-existing user, should return OK', function( done ) {
			rongSDK.user.checkOnline( 'im not here', function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
        result.status.should.equal( '0' );  // Notice: the status is a string, not int.
				done();
			} );
		} );
	} );

	describe( 'Block user', function() {
		it( 'Block a user within 1 minute, should return OK', function( done ) {
			rongSDK.user.block( testConfig.token.userId, 1, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );

        // Check if the user is in the blocked list.
			  rongSDK.user.queryBlocked( function( err, resultText ) {
          should.not.exists( err );
          var result = JSON.parse( resultText );
          result.code.should.equal( 200 );
          should.exists( result.users );
          var isUserBlocked = findUser( result.users, testConfig.token.userId );
          isUserBlocked.should.equal( true );
				  done();
        } );

			} );
		} );
	} );


	describe( 'Unblock user', function() {
		it( 'Unblock the previously blocked user, should return OK', function( done ) {
			rongSDK.user.unblock( testConfig.token.userId, function( err, resultText ) {
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );

        // Check if the user is in the blocked list.
			  rongSDK.user.queryBlocked( function( err, resultText ) {
          should.not.exists( err );
          var result = JSON.parse( resultText );
          result.code.should.equal( 200 );
          should.exists( result.users );
          var isUserBlocked = findUser( result.users, testConfig.token.userId );
          isUserBlocked.should.equal( false );
				  done();
        } );

			} );
		} );
	} );


	describe( 'Query blocked users', function() {
		it( 'The test is obtained in the block/unblock user API tests', function( done ) {
      done();
		} );
	} );

} );


function findUser( users, userId ) {
  var found = false;
  for( var i=0; i<users.length; ++i ) {
    if( users[i].userId === testConfig.token.userId ) {
      found = true;
      break;
    }
  }
  return found;
}

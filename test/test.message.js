var async       = require( 'async' );
var parseString = require( 'xml2js' ).parseString;
var fs 			    = require( 'fs' );
var should 		  = require( 'should' );

var testConfig  = require( './config' );
var rongSDK 	  = require( '../index' );

var base64Voice	= new Buffer( fs.readFileSync( './testvoice.amr' ) ).toString( 'base64' );
var base64Image	= new Buffer( fs.readFileSync( './raindrop.jpg' ) ).toString( 'base64' );

var optionalArgs = [ 'push content', 'push data' ];

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
      // Testing for all the situations of arguments.
      var args = [ testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:TxtMsg', JSON.stringify( textMessageObject ) ];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );

		} );

		it( 'Image message: should return OK', function( done ) {
			var imageMessageObject = { content : base64Image, imageUrl : 'http://lanceju-com.qiniudn.com/raindrop.jpg' };
			var args = [ testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:ImgMsg', JSON.stringify( imageMessageObject ) ];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );


		} );

		it( 'Voice message: should return OK', function( done ) {

			var voiceMessageObject = { content : base64Voice, duration : 4 };
			var args = [testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:VcMsg', JSON.stringify( voiceMessageObject ) ];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );

		} );


		it( 'Image Text message: should return OK', function( done ) {
			var imageTextMessageObject = { title : 'hellotitle', content : 'hello', imageUrl : 'http://lanceju-com.qiniudn.com/raindrop.jpg', extra : 'image from a user' };

			var args = [testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:ImgTextMsg', JSON.stringify( imageTextMessageObject ) ];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );

		} );

		it( 'Location message: should return OK', function( done ) {
			var locationMessageObject = { content : 'You got a location message', latitude : 24.114, longitude : 334.221, poi : '北京市朝阳区北苑路北辰泰岳大厦', extra : 'The location of rong cloud' };

			var args = [testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:LBSMsg', JSON.stringify( locationMessageObject ) ];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.private.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );

		} );

		it( 'ContactNtf message: should return OK', function( done ) {
			var contactNtfMessageObject = { operation:"op1",sourceUserId:"24",targetUserId:"21",message:"haha",extra:"helloExtra"};
			var args = [testConfig.message.fromUserId, testConfig.message.toUserId, 'RC:ContactNtf', JSON.stringify( contactNtfMessageObject ) ];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.private.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );

		} );

	} );


	describe( 'Publish Template Message', function() {
		it( 'Send template message: should return OK', function( done ) {

      var content = JSON.stringify( { content : "aa{c}{e}{d}", extra : "bb" } );
      var values  = [ { "{c}":"1","{d}":"2","{e}":"3"} ];

      /*
			rongSDK.message.private.publish_template( testConfig.message.fromUserId, [testConfig.message.toUserId], 'RC:TxtMsg', content, values, [ 'push content for user' ], ['push data for user'], function( err, resultText ) {
        return done();
				should.not.exists( err );
				var result = JSON.parse( resultText );
				result.code.should.equal( 200 );
				done();
			} );
      */

			var args = [testConfig.message.fromUserId, [testConfig.message.toUserId], 'RC:TxtMsg', content, values, [ 'push content for user' ], ['push data for user'] ];

      var argsArray = [];
      argsArray.push( args.concat() );
      argsArray.push( args.concat( 'json' ) );
      argsArray.push( args.concat( 'xml' ) );

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.private.publish_template.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );



		} );

		it( 'Send system message: should return OK', function( done ) {

			var args = [testConfig.message.fromUserId, [testConfig.message.toUserId], 'RC:TxtMsg', JSON.stringify( { content : 'Hello, world!' } )];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.system.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );

		} );

    it( 'Send group message before joining the group: should return error', function( done ) {
      rongSDK.message.group.publish( testConfig.message.fromUserId, 'ProgrammerGroup1', 'RC:TxtMsg', JSON.stringify( { content : 'Hello, world!' } ), null, null, function( err, resultText ) {
        should.exists( err );
        // Joining the group
        rongSDK.group.join( testConfig.message.fromUserId, 'ProgrammerGroup1', 'Programmers group', function( err, resultText ) {
          should.not.exists( err );
          var result = JSON.parse( resultText );
          result.code.should.equal( 200 );
          done();
        } );

      } );
    } );

    it( 'Send group message after joining the group: should return OK', function( done ) {
      var args = [testConfig.message.fromUserId, 'ProgrammerGroup1', 'RC:TxtMsg', JSON.stringify( { content : 'Hello, world!' } )];

      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.group.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        // Dismiss the group after testing.
        rongSDK.group.quit( testConfig.message.fromUserId, 'ProgrammerGroup1', function( err, resultText ) {
          should.not.exists( err );
          var result = JSON.parse( resultText );
          result.code.should.equal( 200 );
          done();
        } );
      } );

    } );

		it( 'Send chatroom message: should return OK', function( done ) {
			var args = [testConfig.message.fromUserId, 'my chatroom', 'RC:TxtMsg', JSON.stringify( { content : 'Hello, world!' } ) ];
      var argsArray = [];
      for( var i=0; i<3; ++i ) {
        argsArray.push( args.concat( optionalArgs.slice( 0, i ) ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'json' ) );
        argsArray.push( args.concat( optionalArgs.slice( 0, i ), 'xml' ) );
      }

      async.each( argsArray, function( _args, cb ) {
        rongSDK.message.chatroom.publish.apply( this, _args.concat( function( err, resultText ) {
          if( _args[ _args.length - 1 ] === 'xml' ) {
            should.not.exists( err );
            parseString( resultText, function( err, result ) {
              parseInt( result.xml.code[0] ).should.equal( 200 );
              cb();
            } );
          }
          else {
            should.not.exists( err );
            var result = JSON.parse( resultText );
            result.code.should.equal( 200 );
            cb();
          }
        } ) );
      }, function() {
        done();
      } );
		} );

  } );


  // Since this API is a charing service, make sure your appKey&appSecret is from an charged account.
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

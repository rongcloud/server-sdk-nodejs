
var superagent = require( 'superagent' );
var sha1	   = require( 'sha1' );

var BASEURL	  = 'https://api.cn.rong.io';
var APPKEY 	  = undefined;
var APPSECRET = undefined;
var TIMESTAMP = undefined;
var SIGNATURE = undefined;
var NONCE 	  = undefined;
var HEADERS	  = {};

var FORMAT 	  = 'json';

exports.init = function( appKey, appSecret ) {
	APPKEY 	  = appKey;
	APPSECRET = appSecret;
	NONCE	    = parseInt( Math.random() * 0xffffff );
	TIMESTAMP = Date.parse( new Date() )/1000;
	SIGNATURE = sha1( APPSECRET + NONCE + TIMESTAMP  );

	HEADERS['App-Key'] 	 	= APPKEY;
	HEADERS['Nonce'] 		= NONCE;
	HEADERS['Timestamp']	= TIMESTAMP;
	HEADERS['Signature']	= SIGNATURE;

	HEADERS['Content-Type'] = 'application/x-www-form-urlencoded';	
}


exports.request = function( api, params, format, callback ) {
	var f = 'json';
	if( (typeof format ) == 'function' ) { // Use default format 'json'
		callback = format;
	}
	else {
		f = ( format === 'xml' ? 'xml' : 'json' );
	}


	superagent.agent()
	.post( BASEURL + api + '.' + f )
	.set( HEADERS )
	.send( params )
	.end( function( err, result ) {
		if( err ) {
			return callback( err, null );
		}
		else {
			return callback( null, result.text );
		}
	} );
}


exports.requestWithSameFields = function( api, params, fieldAndValues, format, callback ) {
	var f = 'json';
	if( (typeof format ) == 'function' ) { // Use default format 'json'
		callback = format;
	}
	else {
		f = ( format === 'xml' ? 'xml' : 'json' );
	}

	var agent = superagent.agent()
	.post( BASEURL + api + '.' + f )
	.set( HEADERS );

	for( var i=0; i<fieldAndValues.length; ++i ) {
		var field = fieldAndValues[i].field;
		var values = fieldAndValues[i].values;
		for( var j=0; j<values.length; ++j ) {
			agent = agent.send( field + '=' + values[j] );
		}
	}

  for( var k in params ) {
    agent = agent.send( k + '=' + params[k] );
  }

  agent.end( function( err, result ) {
		if( err ) {
			return callback( err, null );
		}
		else {
			return callback( null, result.text );
		}
	} );
}

exports.validateSignature = function( nonce, timestamp, signature ) {
	return sha1( APPSECRET + nonce + timestamp ) == signature;
}


exports.requestWithHeaders = function( api, params, format, headers, callback ) {
	var f = 'json';
	if( (typeof format ) == 'function' ) { // Use default format 'json'
		callback = format;
	}
	else {
		f = ( format === 'xml' ? 'xml' : 'json' );
	}

  // Attach the specified headers.
  var _headers = {};
  for( var k in HEADERS ) {
    _headers[k] = headers[k] ? headers[k] : HEADERS[k];
  }

	superagent.agent()
	.post( BASEURL + api + '.' + f )
	.set( _headers )
	.send( params )
	.end( function( err, result ) {
		if( err ) {
			return callback( err, null );
		}
		else {
			return callback( null, result.text );
		}
	} );
}

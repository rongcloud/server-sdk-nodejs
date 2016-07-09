var superagent = require( 'superagent' );
var sha1 = require('./util').sha1;

var BASEURL	  = 'http://api.cn.ronghub.com';
var BASEURL_SMS	  = 'http://api.sms.ronghub.com';
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
}

exports.request = function( api, params, format, callback ) {
	return requestWithDomain( BASEURL, api, params, format, callback );
}

exports.requestSMS = function( api, params, format, callback ) {
	return requestWithDomain( BASEURL_SMS, api, params, format, callback );
}

requestWithDomain = function( base_url, api, params, format, callback ) {
	var f = 'json';
	if( (typeof format ) == 'function' ) { // Use default format 'json'
		callback = format;
	}
	else {
		f = ( format === 'xml' ? 'xml' : 'json' );
	}


	superagent.agent()
	.post( base_url + api + '.' + f )
	.set( HEADERS )
	.type( 'form' )
	.send( params )
	.end( function( err, result ) {
		if( err ) {
			return callback( err, result ? result.text : null );
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
			agent = agent.send( encodeURIComponent(field) + '=' + encodeURIComponent(values[j]) );
		}
	}

  for( var k in params ) {
    agent = agent.send( encodeURIComponent(k) + '=' + encodeURIComponent(params[k]) );
  }

  agent.end( function( err, result ) {
		if( err ) {
			return callback( err, result ? result.text : null );
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
			return callback( err, result ? result.text : null );
		}
		else {
			return callback( null, result.text );
		}
	} );
}

exports.get = function( api, params, callback ) {
	superagent.agent()
	.get( BASEURL_SMS + api + '.json' )
	.query( params )
	.end( function( err, result ) {
		if( err ) {
			return callback( err, result ? result.text : null );
		}
		else {
			return callback( null, result.text );
		}
	} );
}


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
	NONCE	  = parseInt( Math.random() * 0xffffff );
	TIMESTAMP = Date.parse( new Date() );
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
		f = format;
	}

	superagent.agent()
	.post( BASEURL + api + '.' + f )
	.set( HEADERS )
	.send( params )
	.end( function( result ) {
		if( result.err ) {
			return callback( result.err, null );
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
		f = format;
	}

	var agent = superagent.agent()
	.post( BASEURL + api + '.' + f )
	.set( HEADERS );

	for( var i=0; i<fieldAndValues.length; ++i ) {
		var field = fieldAndValues[i].field;
		var values = fieldAndValues[i].values;
		var param = {};
		for( var j=0; j<values.length; ++j ) {
			param[field] = values[j];
			agent = agent.send( param );
		}
	}

	agent.send( params )
	.end( function( result ) {
		if( result.err ) {
			return callback( result.err, null );
		}
		else {
			return callback( null, result.text );
		}
	} );
}

exports.validateSignature = function( nonce, timestamp, signature ) {
	return sha1( APPSECRET + nonce + timestamp ) == signature;
}
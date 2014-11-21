module.exports = {};

function define( key, value ) {
	module.exports[key] = value;
}

define( 'token', { 'get' : '/user/getToken' } );

define( 'message', { 'publish' : '/message/publish', 'broadcast' : '/message/broadcast' } );
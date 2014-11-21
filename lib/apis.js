module.exports = {};

function define( key, value ) {
	module.exports[key] = value;
}

define( 'token', { 'get' : '/user/getToken' } );
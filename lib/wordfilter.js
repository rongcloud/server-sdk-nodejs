var apis 		= require( './apis' );
var rongrequest = require( './rongrequest' );
var promisify   = require( './util' ).promisify;

exports.add = promisify(function( word, format, callback ) {
    if( word === '' || word === null || word === undefined ) {
        return callback( 'Empty word' );
    }

    var params = { word : word };
    rongrequest.request( apis['wordfilter']['add'], params, format, function( err, result ) {
        return callback( err, result );
    } );
});

exports.delete = promisify(function( word, format, callback ) {
    if( word === '' || word === null || word === undefined ) {
        return callback( 'Empty word' );
    }

    var params = { word : word };
    rongrequest.request( apis['wordfilter']['delete'], params, format, function( err, result ) {
        return callback( err, result );
    } );
});

exports.list = promisify(function( format, callback ) {
    rongrequest.request( apis['wordfilter']['list'], {}, format, function( err, result ) {
        return callback( err, result );
    } );
});

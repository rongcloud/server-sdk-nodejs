module.exports = {};

function define( key, value ) {
	module.exports[ key ] = value;
}

define( 'SUCCESS', 0 );

// Chat room related consts.
define( 'INVALID_CHATROOMID', 1000 );
define( 'INVALID_CHATROOMID_MSG', 'Invalid chat room id! Space, tab and new line are not allowed in chat room id!' );


define( 'INVALID_GROUPID', 2000 );
define( 'INVALID_GROUPID_MSG', 'Invalid group id! Space, tab and new line are not allowed in group id!' );
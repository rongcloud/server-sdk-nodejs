module.exports = {};

function define( key, value ) {
  module.exports[key] = value;
}

define( 'user', {
  'getToken' : '/user/getToken',
  'refresh'  : '/user/refresh'
} );

define( 'message', {
  'publish'   : '/message/publish',
  'broadcast' : '/message/broadcast'
} );

define( 'group', {
  'sync'    : '/group/sync',
  'create'  : '/group/create',
  'quit'    : '/group/quit',
  'dismiss' : '/group/dismiss'
} );

define( 'chatroom', {
  'create'  : '/chatroom/create',
  'destroy' : '/chatroom/destroy',
  'query'   : '/chatroom/query'
} );
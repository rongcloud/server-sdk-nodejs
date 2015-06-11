module.exports = {};

function define( key, value ) {
  module.exports[key] = value;
}

define( 'user', {
  'getToken'      : '/user/getToken',
  'refresh'       : '/user/refresh',
  'checkOnline'   : '/user/checkOnline',

  'block'         : '/user/block',
  'unblock'       : '/user/unblock',
  'queryBlocked'  : '/user/block/query',

  'addToBlackList'      : '/user/blacklist/add',
  'removeFromBlacklist' : '/user/blacklist/remove',
  'queryBlacklist'      : '/user/blacklist/query'
} );

define( 'message', {
  'private' : {
    'publish'          : '/message/publish',
    'publish_template' : '/message/private/publish_template'
  },
  'system' : {
    'publish' : '/message/system/publish'
  },
  'group' : {
    'publish' : '/message/group/publish'
  },
  'chatroom' : {
    'publish' : '/message/chatroom/publish'
  },
  'publish'   : '/message/publish',
  'broadcast' : '/message/broadcast',
  'history' : '/message/history'
} );

define( 'group', {
  'sync'    : '/group/sync',
  'create'  : '/group/create',
  'quit'    : '/group/quit',
  'dismiss' : '/group/dismiss',
  'refresh' : '/group/refresh'
} );

define( 'chatroom', {
  'create'  : '/chatroom/create',
  'destroy' : '/chatroom/destroy',
  'query'   : '/chatroom/query',
  'user'    : {
    'query' : '/chatroom/user/query'
  }
} );

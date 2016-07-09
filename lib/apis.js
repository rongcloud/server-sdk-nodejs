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
  'refresh' : '/group/refresh',
  'user' : {
    'query' : '/group/user/query',
    'gag' : {
      'add' : '/group/user/gag/add',
      'rollback' : '/group/user/gag/rollback',
      'list' : '/group/user/gag/list'
    }
  }
} );

define( 'chatroom', {
  'create'  : '/chatroom/create',
  'destroy' : '/chatroom/destroy',
  'query'   : '/chatroom/query',
  'user'    : {
    'query' : '/chatroom/user/query'
  }
} );

define( 'wordfilter', {
  'add'    : '/wordfilter/add',
  'delete' : '/wordfilter/delete',
  'list'   : '/wordfilter/list'
} );

define( 'sms', {
  'send'       : '/send',
  'sendCode'   : '/sendCode',
  'verifyCode' : '/verifyCode',
  'getImgCode' : '/getImgCode'
} );

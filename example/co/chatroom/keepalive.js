//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var KeepAlive = Chatroom.KeepAlive;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/keepalive.html#add
*/
co(function *() {
  var chatroom = {
  	id: 'chrmId001'
  };
  var result = yield KeepAlive.add(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/keepalive.html#remove
*/
co(function *() {
  var chatroom = {
  	id: 'chrmId001'
  };
  var result = yield KeepAlive.remove(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/keepalive.html#getList
*/
co(function *() {
  var result = yield KeepAlive.getList();
  console.log(result);
}).catch(error => {
  console.log(error);
});

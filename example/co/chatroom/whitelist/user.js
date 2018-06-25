//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Whitelist = Chatroom.Whitelist.User;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/whitelist/user.html#add
*/
co(function *() {
  var chatroom = {
  	id: 'chatroom001',
  	members: [{
  		id: 'member01'
  	}]
  };
  var result = yield Whitelist.add(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/whitelist/user.html#remove
*/
co(function *() {
  var chatroom = {
  	id: 'chatroom001',
  	members: [{
  		id: 'member02'
  	}]
  };
  var result = yield Whitelist.remove(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/whitelist/user.html#getList
*/
co(function *() {
  var chatroom = {
  	id: 'chatroom001'
  };
  var result = yield Whitelist.getList(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

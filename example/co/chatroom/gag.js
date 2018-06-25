//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Gag = Chatroom.Gag;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/gag.html#add
*/
co(function *() {
  var chatroom = {
  	id: 'chatroom001',
  	members: [{
  		id: 'member02'
  	}],
  	minute: 30
  };
  var result = yield Gag.add(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/gag.html#remove
*/
co(function *() {
  var chatroom = {
  	id: 'chatroom001',
  	members: [{
  		id: 'member02'
  	}]
  };
  var result = yield Gag.remove(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/gag.html#getList
*/
co(function *() {
  var chatroom = {
  	id: 'chatroom001'
  };
  var result = yield Gag.getList(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Ban = Chatroom.Ban;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/ban.html#add
*/
co(function *() {
  var chatroom = {
  	members: [{
  		id: 'member01'
  	}],
  	minute: 30
  };
  var result = yield Ban.add(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/ban.html#remove
*/
co(function *() {
  var chatroom = {
  	members: [{
  		id: 'member02'
  	}]
  };
  var result = yield Ban.remove(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/ban.html#getList
*/
co(function *() {
  var result = yield Ban.getList();
  console.log(result);
}).catch(error => {
  console.log(error);
});

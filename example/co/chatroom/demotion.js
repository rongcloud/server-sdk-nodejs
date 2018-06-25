//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Demotion = Chatroom.Demotion;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/demotion.html#add
*/
co(function *() {
  var chatroom = {
  	msgs: ['RC:TxtMsg01', 'RC:TxtMsg02']
  };
  var result = yield Demotion.add(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});
/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/demotion.html#remove
*/
co(function *() {
  var chatroom = {
  	msgs: ['RC:TxtMsg01']
  };
  var result = yield Demotion.remove(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});
/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/demotion.html#getList
*/
co(function *() {
  var result = yield Demotion.getList();
  console.log(result);
}).catch(error => {
  console.log(error);
});

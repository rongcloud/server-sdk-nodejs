//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var WhiteList = Chatroom.Whitelist.Message;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/whitelist/message.html#add
*/
co(function *() {
  var chatroom = {
  	msgs: ['RC:TxtMsg01']
  };
  var result = yield WhiteList.add(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});
/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/whitelist/message.html#remove
*/
co(function *() {
  var chatroom = {
  	msgs: ['RC:TxtMsg01']
  };
  var result = yield WhiteList.remove(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/whitelist/message.html#getList
*/
co(function *() {
  var result = yield WhiteList.getList();
  console.log(result);
}).catch(error => {
  console.log(error);
});

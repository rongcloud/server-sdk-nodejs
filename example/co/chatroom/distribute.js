//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Distribute = Chatroom.Distribute;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/distribute.html#stop
*/
co(function *() {
  var chatroom = {
  	id: 'chrmId001'
  };
  var result = yield Distribute.stop(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});
/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/distribute.html#resume
*/
co(function *() {
  var chatroom = {
  	id: 'chrmId001'
  };
  var result = yield Distribute.resume(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var Chatroom = Message.Chatroom;

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/chatroom.html#send
co(function* (){
  var message = {
  	senderId: 'sea9902',
  	targetId: 'kmn001',
  	objectName: 'RC:TxtMsg',
  	content: {
  		content: '你好，主播'
  	}
  };
  var result = yield Chatroom.send(message);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*

API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/chatroom.html#broadcast

此功能需开通专有服务: http://www.rongcloud.cn/deployment#overseas-cloud
*/

co(function* (){
  var message = {
  	senderId: 'sea9902',
  	objectName: 'RC:TxtMsg',
  	content: {
  		content: '欢迎来到绿色直播间，禁止谩骂、涉黄等违规行为'
  	}
  };
  var result = yield Chatroom.broadcast(message);
  console.log(result);
}).catch(error => {
  console.log(error);
});

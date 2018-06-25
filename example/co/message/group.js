//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var Group = Message.Group;

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/group.html#send
co(function* (){
  var message = {
  	senderId: 'sea9902',
  	targetId: 'markoiwm',
  	objectName: 'RC:TxtMsg',
  	content: {
  		content: '你好，小明'
  	}
  };
  var result = yield Group.send(message);
  console.log(result);
}).catch(error => {
  console.log(error);
});

  /**
  API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/group.html#sendMention
  */
co(function* (){
  var message = {
  	senderId: 'sea9902',
  	targetId: 'markoiwm',
  	objectName: 'RC:TxtMsg',
  	content: {
  		content: '你好，小明',
  		mentionedInfo: {
  			type: 1,
  			userIds: ['kladd', 'almmn1'],
  			pushContent: '问候消息'
  		}
  	}
  };
  var result = yield Group.sendMention(message);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/private.html#recall

客户端发送消息成功后可以取到消息的 uId 和 sentTime，可通过客户端将参数传到服务端
*/
co(function* (){
  var message = {
  	senderId: 'sea9901',
  	targetId: 'markoiwm',
  	uId: '5GSB-RPM1-KP8H-9JHF',
  	sentTime: 1519444243981
  };
  var result = yield Group.recall(message);
  console.log(result);
}).catch(error => {
  console.log(error);
});

'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var Private = Message.Private;

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/private.html#send
var message = {
	senderId: 'sea9902',
	targetId: 'markoiwm',
	objectName: 'RC:TxtMsg',
	content: {
		content: '你好，小明'
	}
};
Private.send(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/private.html#sendTemplate

sea9901、sea9902 是用户 Id， 发送成功后:

sea9901:
	收到消息: 小明语文成绩 90 分
	收到 Push: 小明你的成绩出来了
		
sea9902:
	收到消息: 小红语文成绩 95 分
	收到 Push: 小红你的成绩出来了


注意事项： objectName 类型的消息与 template 中的属性需一致，例如:

文本消息的 objectName 是 RC:TxtMsg ，属性有 content ，那么 template 的属性是 content

data 和 push 是必传项

消息类型对应关系请参考: http://www.rongcloud.cn/docs/server_sdk_api/GLOSSARY.html
*/ 
var message = {
	senderId: 'kamdnq',
	objectName: 'RC:TxtMsg',
	template: {
		content: '{name}, 语文成绩 {score} 分'
	},
	content: {
		sea9901: {
			data: {'{name}': '小明', '{score}': '90'},
			push: '{name} 你的成绩出来了'
		},
		sea9902: {
			data: {'{name}': '小红', '{score}': '95'},
			push: '{name} 你的成绩出来了'
		}
	}
};
Private.sendTemplate(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/private.html#recall

客户端发送消息成功后可以取到消息的 uId 和 sentTime，可通过客户端将参数传到服务端
*/
var message = {
	senderId: 'sea9901',
	targetId: 'sea9902',
	uId: '5GSB-RPM1-KP8H-9JHF',
	sentTime: 1519444243981
};
Private.recall(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});


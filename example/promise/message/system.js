'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var System = Message.System;


// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/system.html#send
var message = {
	senderId: '__system__',
	targetId: 'sea9902',
	objectName: 'RC:TxtMsg',
	content: {
		content: '你好，小明，我是系统管理员'
	}
};
System.send(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/system.html#broadcast
var message = {
	senderId: '__system__',
	objectName: 'RC:TxtMsg',
	content: {
		content: '明天 9:00 ，20 层会议室开大会'
	}
};
System.broadcast(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/system.html#sendTemplate

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
	senderId: '__system__',
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

System.sendTemplate(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
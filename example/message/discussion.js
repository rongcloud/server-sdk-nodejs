'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var Discussion = Message.Discussion;

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/message/discussion.html#send
var message = {
	senderId: 'sea9902',
	targetId: 'markoiwm',
	objectName: 'RC:TxtMsg',
	content: {
		content: '你好，小明'
	}
};
Discussion.send(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/message/private.html#recall

客户端发送消息成功后可以取到消息的 uId 和 sentTime，可通过客户端将参数传到服务端
*/
var message = {
	senderId: 'sea9901',
	targetId: '4aaac47c-e1f6-49ed-afe9-123adb',
	uId: '5GSB-RPM1-KP8H-9JHF',
	sentTime: 1519444243981
};
Discussion.recall(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

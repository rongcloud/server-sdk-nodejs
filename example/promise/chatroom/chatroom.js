'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#create
*/
var chatroom = {
	id: 'chrm001',
	name: 'RongCloud'
};
Chatroom.create(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#destory
*/
var chatroom = {
	id: 'chrm001'
};
Chatroom.destory(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#get
*/
var chatroom = {
	id: 'chrm002',
	count: 20,
	order: 1
};
Chatroom.get(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#isExist
*/
var chatroom = {
	id: 'chrm002',
	members: [{
		id: 'sea9902'
	}]
};
Chatroom.isExist(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
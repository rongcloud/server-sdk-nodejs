'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Gag = Chatroom.Gag;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/gag.html#add
*/
var chatroom = {
	id: 'chatroom001',
	members: [{
		id: 'member02'
	}],
	minute: 30
};
Gag.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/gag.html#remove
*/
var chatroom = {
	id: 'chatroom001',
	members: [{
		id: 'member02'
	}]
};
Gag.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/gag.html#getList
*/
var chatroom = {
	id: 'chatroom001'
};
Gag.getList(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
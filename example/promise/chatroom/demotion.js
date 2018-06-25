'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Demotion = Chatroom.Demotion;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/demotion.html#add
*/
var chatroom = {
	msgs: ['RC:TxtMsg01', 'RC:TxtMsg02']
};
Demotion.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/demotion.html#remove
*/
var chatroom = {
	msgs: ['RC:TxtMsg01']
};
Demotion.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/demotion.html#getList
*/
Demotion.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
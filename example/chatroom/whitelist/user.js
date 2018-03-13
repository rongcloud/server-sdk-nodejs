'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Whitelist = Chatroom.Whitelist.User;

/*
http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/whitelist/user.html#add
*/
var chatroom = {
	id: 'chatroom001',
	members: [{
		id: 'member01'
	}]
};
Whitelist.add(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/whitelist/user.html#remove
*/
var chatroom = {
	id: 'chatroom001',
	members: [{
		id: 'member02'
	}]
};
Whitelist.remove(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
http://rongcloud.github.io/server-sdk-nodejs/docs/v1/chatroom/whitelist/user.html#getList
*/
var chatroom = {
	id: 'chatroom001'
};
Whitelist.getList(chatroom).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

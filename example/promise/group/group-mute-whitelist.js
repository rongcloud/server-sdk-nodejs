'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});
var Group = RongSDK.Group;
var MuteWhitelist = Group.Mute.Whitelist;

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/whiteList/mute-user.html#add
*/
MuteWhitelist.add({
	id: 'WaterGroup',
	members: [{
		id: 'sea9901'
	}]
}).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/whiteList/mute-user.html#remove
*/
MuteWhitelist.remove({
	id: 'WaterGroup',
	members: [{
		id: 'sea9901'
	}]
}).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/whiteList/mute-user.html#getList
*/
MuteWhitelist.getList({
	id: 'WaterGroup'
}).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
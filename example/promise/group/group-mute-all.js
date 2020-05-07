'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});
var Group = RongSDK.Group;
var MuteAll = Group.Mute.All;

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/mute-all-members.html#add
*/
MuteAll.add({
	groups: [{
		id: 'seal9901'
	}]
}).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/mute-all-members.html#remove
*/
MuteAll.remove({
	groups:  [{
		id: 'seal9901'
	}]
}).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/mute-all-members.html#getList
*/
MuteAll.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
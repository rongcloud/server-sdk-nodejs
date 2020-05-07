'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Group = RongSDK.Group;
var MuteMember = Group.Mute.Member;

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/mute-members.html#add
*/
var group = {
	id: 'watergroup',
	members: [{
		id: 'sea9901'
	}],
	minute: 50
};
MuteMember.add(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/mute-members.html#remove
*/
var group = {
	id: 'watergroup',
	members: [{
		id: 'dkamn901'
	}]
};
MuteMember.remove(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: https://www.rongcloud.cn/docs/server_sdk_api/group/mute-members.html#getList
*/
var group = {
	id: 'watergroup'
};
MuteMember.getList(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
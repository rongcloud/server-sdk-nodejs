'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Group = RongSDK.Group;
var Gag = Group.Gag;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/gag.html#add
*/
var group = {
	id: 'watergroup',
	members: [{
		id: 'sea9901'
	}],
	minute: 50
};
Gag.add(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/gag.html#remove
*/
var group = {
	id: 'watergroup',
	members: [{
		id: 'dkamn901'
	}]
};
Gag.remove(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/gag.html#getList
*/
var group = {
	id: 'watergroup'
};
Gag.getList(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Group = RongSDK.Group;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#sync
*/
var user = {
	id: 'martin9901',
	groups: [{id: 'group999', name: 'RongCloud'}]
};
Group.sync(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#create
*/
var group = {
	id: 'watergroup',
	name: 'WaterGroup',
	members: [{
		id: 'sea9901'
	}]
};
Group.create(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#join
*/
var group = {
	id: 'watergroup',
	member: {
		id: 'sea9901'
	}
};
Group.join(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#quit
*/
var group = {
	id: 'watergroup',
	member: {
		id: 'sea9901'
	}
};
Group.quit(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#dismiss
*/
var params = {
	id: 'watergroup',
	member: {
		id: 'sea9901'
	}
};
Group.dismiss(params).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#update
*/
var group = {
	id: 'watergroup',
	name: 'RongCloud'
};
Group.update(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#get
*/
var group = {
	id: 'watergroup'
};
Group.get(group).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

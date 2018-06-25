'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var User = RongSDK.User;
var UserBlock = User.Block;

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/block.html#add
var user = {
	id: 'ujadk90ha',
	minute: 60
};
UserBlock.add(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/block.html#remove
var user = {
	id: 'ujadk90ha'
};
UserBlock.remove(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/block.html#getList
UserBlock.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

'use strict';

var RongSDK = require('../../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var User = RongSDK.User;
var Blacklist = User.Blacklist;

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/user/black.html#add
var user = {
	id: 'ujadk90ha',
	blacklist: [{
		id: 'kkj9o01'
	}]
};
Blacklist.add(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/user/black.html#remove
var user = {
	id: 'ujadk90ha',
	blacklist: [{
		id: 'kkj9o01'
	}]
};
Blacklist.remove(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/user/black.html#getList
var user = {
	id: 'ujadk90ha'
};
Blacklist.getList(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
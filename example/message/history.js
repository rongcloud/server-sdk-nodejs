'use strict';

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var History = Message.History;

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/message/history.html#get
var message = {
	date: '2018030613'
};
History.get(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

// API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/message/history.html#get
var message = {
	date: '2018030613'
};
History.remove(message).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
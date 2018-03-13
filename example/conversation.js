'use strict';

var RongSDK = require('../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Conversation = RongSDK.Conversation;

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/conversation/conversation.html#mute
*/ 
var conversation = {
	type: 'PRIVATE',
	userId: 'mka091amn',
	targetId: 'adm1klnm'
};
Conversation.mute(conversation).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/conversation/conversation.html#unmute
*/ 
var conversation = {
	type: 'PRIVATE',
	userId: 'mka091amn',
	targetId: 'adm1klnm'
};
Conversation.unmute(conversation).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
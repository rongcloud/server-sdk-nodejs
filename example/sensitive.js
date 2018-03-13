'use strict';

var RongSDK = require('../')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Sensitive = RongSDK.Sensitive;

/*
添加敏感词替换
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/sensitive/sensitive.html#add
*/ 
var rule = {
	keyword: '小米手机',
	replace: 'iPhone7',
	type: 0
};
Sensitive.add(rule).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
添加敏感词屏蔽
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/sensitive/sensitive.html#add
*/ 
var rule = {
	keyword: '小米手机',
	type: 1
};
Sensitive.add(rule).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/sensitive/sensitive.html#remove
*/ 
var rule = {
	keywords: '小米手机'
};
Sensitive.remove(rule).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/*
API 文档: http://rongcloud.github.io/server-sdk-nodejs/docs/v1/sensitive/sensitive.html#getList
*/ 
Sensitive.getList().then(result => {
	console.log(result);
}, error => {
	console.log(error);
});
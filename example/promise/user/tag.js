'use strict';

var RongSDK = require('rongcloud-sdk')({
  appkey: '8luwapkvucoil',
  secret: 'y0icysjl4h3LWz'
});

var User = RongSDK.User;
var UserTag = User.Tag;

/* 设置指定用户 Tag */
var user = {
	id: 'ujadk90ha',
	tags: ["RongCloud"]
};
UserTag.set(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/* 移除指定用户 Tag */
var user = {
	id: 'ujadk90ha'
};
UserTag.remove(user).then(result => {
	console.log(result);
}, error => {
	console.log(error);
});

/* 批量获取用户 Tag */
var users = [{
  id: 'mon9901'
},{
  id: 'mon9902'
},{
  id: 'ujadk90ha'
}];
UserTag.getList(users).then(result => {
  console.log(result);
}, error => {
  console.log(error);
});

/* 批量设置用户 Tag */
var params = {
  users: [{
    id: 'mon9901'
  },{
    id: 'mon9902'
  }],
  tags: ["IM", "RTC"]
};
UserTag.batchSet(params).then(result => {
  console.log(result);
}, error => {
  console.log(error);
});

/* 批量移除用户 Tag */
var params = {
  users: [{
    id: 'mon9901'
  }]
};
UserTag.batchRemove(params).then(result => {
  console.log(result);
}, error => {
  console.log(error);
});
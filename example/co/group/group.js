//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Group = RongSDK.Group;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#sync
*/
co(function* (){
  var user = {
  	id: 'martin9901',
  	groups: [{id: 'group999', name: 'RongCloud'}]
  };
  var result = yield Group.sync(user);
  console.log(result);
}).catch(error => {
  console.log(error);
});

  /*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#create
*/
co(function* (){
  var group = {
  	id: 'watergroup',
  	name: 'WaterGroup',
  	members: [{
  		id: 'sea9901'
  	}]
  };
  var result = yield Group.create(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#join
*/
co(function* (){
  var group = {
  	id: 'watergroup',
  	member: {
  		id: 'sea9901'
  	}
  };
  var result = yield Group.join(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#quit
*/
co(function* (){
  var group = {
  	id: 'watergroup',
  	member: {
  		id: 'sea9901'
  	}
  };
  var result = yield Group.quit(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#dismiss
*/
co(function* (){
  var params = {
  	id: 'watergroup',
  	member: {
  		id: 'sea9901'
  	}
  };
  var result = yield Group.dismiss(params);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#update
*/
co(function* (){
  var group = {
  	id: 'watergroup',
  	name: 'RongCloud'
  };
  var result = yield Group.update(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

  /*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/group.html#get
*/
co(function* (){
  var group = {
  	id: 'watergroup'
  };
  var result = yield Group.get(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

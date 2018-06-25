//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Group = RongSDK.Group;
var Gag = Group.Gag;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/gag.html#add
*/
co(function* (){
  var group = {
  	id: 'watergroup',
  	members: [{
  		id: 'sea9901'
  	}],
  	minute: 50
  };
  var result = yield Gag.add(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/gag.html#remove
*/
co(function* (){
  var group = {
  	id: 'watergroup',
  	members: [{
  		id: 'dkamn901'
  	}]
  };
  var result = yield Gag.remove(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/group/gag.html#getList
*/
co(function* (){
  var group = {
  	id: 'watergroup'
  };
  var result = yield Gag.getList(group);
  console.log(result);
}).catch(error => {
  console.log(error);
});

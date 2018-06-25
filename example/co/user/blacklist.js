//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var User = RongSDK.User;
var Blacklist = User.Blacklist;

co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/black.html#add
  var user = {
  	id: 'ujadk90ha',
  	blacklist: [{
  		id: 'kkj9o01'
  	}]
  };
  var result = yield Blacklist.add(user);
  console.log(result);
}).catch(error => {
  console.log(error);
});
co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/black.html#remove
  var user = {
  	id: 'ujadk90ha',
  	blacklist: [{
  		id: 'kkj9o01'
  	}]
  };
  var result = yield Blacklist.remove(user);
  console.log(result);
}).catch(error => {
  console.log(error);
});
co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/black.html#getList
  var user = {
  	id: 'ujadk90ha'
  };
  var result = yield Blacklist.getList(user);
  console.log(result);
}).catch(error => {
  console.log(error);
});

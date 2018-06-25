//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var User = RongSDK.User;
var UserBlock = User.Block;

co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/block.html#add
  var user = {
  	id: 'ujadk90ha',
  	minute: 60
  };
  var result = yield UserBlock.add(user);
  console.log(result);
}).catch(error => {
  console.log(error);
});

co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/block.html#remove
  var user = {
  	id: 'ujadk90ha'
  };
  var result = yield UserBlock.remove(user);
  console.log(result);
}).catch(error => {
  console.log(error);
});

co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/block.html#getList
  var result = yield UserBlock.getList();
  console.log(result);
}).catch(error => {
  console.log(error);
});

//npm install co --save
var co = require('co');
var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var User = RongSDK.User;

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/user.html#register
co(function* (){
  var user = {
  	id: 'ujadk90ha',
  	name: 'Maritn',
  	portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
  };
  user = yield User.register(user);
  console.log(user);
}).catch(error => {
  console.log(error);
});

// API 文档: http://www.rongcloud.cn/docs/server_sdk_api/user/user.html#update
co(function* (){
  var user = {
  	id: 'ujadk90ha',
  	name: 'MarMar',
  	portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
  };
  user = yield User.update(user);
  console.log(user);
}).catch(error => {
  console.log(error);
});

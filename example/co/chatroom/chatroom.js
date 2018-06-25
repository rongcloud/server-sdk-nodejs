//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#create
*/
co(function *() {
  var chatroom = {
  	id: 'chrm001',
  	name: 'RongCloud'
  };
  var result = yield Chatroom.create(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#destory
*/
co(function *() {
  var chatroom = {
  	id: 'chrm001'
  };
  var result = yield Chatroom.destory(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#get
*/
co(function *() {
  var chatroom = {
  	id: 'chrm002',
  	count: 20,
  	order: 1
  };
  var result = yield Chatroom.get(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/chatroom.html#isExist
*/
co(function *() {
  var chatroom = {
  	id: 'chrm002',
  	members: [{
  		id: 'sea9902'
  	}]
  };
  var result = yield Chatroom.isExist(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Chatroom = RongSDK.Chatroom;
var Block = Chatroom.Block;

/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/block.html#add
*/
co(function *() {
  var chatroom = {
  	id: 'chrmId001',
  	members: [{
  		id: 'seal9901'
  	}],
  	minute: 30
  };
  var result = yield Block.add(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});
/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/block.html#remove
*/
co(function *() {
  var chatroom = {
  	id: 'chrmId001',
  	members: [{
  		id: 'seal990'
  	}]
  };
  var result = yield Block.remove(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});
/*
API 文档: http://www.rongcloud.cn/docs/server_sdk_api/chatroom/block.html#getList
*/
co(function *() {
  var chatroom = {
  	id: 'chrmId001'
  };
  var result = yield Block.getList(chatroom);
  console.log(result);
}).catch(error => {
  console.log(error);
});

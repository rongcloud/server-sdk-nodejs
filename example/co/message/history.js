//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Message = RongSDK.Message;
var History = Message.History;

co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/history.html#get
  var message = {
  	date: '2018030613'
  };
  var result = yield History.get(message);
  console.log(result);
}).catch(error => {
  console.log(error);
});

co(function* (){
  // API 文档: http://www.rongcloud.cn/docs/server_sdk_api/message/history.html#get
  var message = {
  	date: '2018030613'
  };
  var result = yield History.remove(message);
  console.log(result);
}).catch(error => {
  console.log(error);
});

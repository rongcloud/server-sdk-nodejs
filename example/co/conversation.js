'use strict';
//npm install co --save
var co = require('co');
var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Conversation = RongSDK.Conversation;

co(function* (){
  /*
  API 文档: http://www.rongcloud.cn/docs/server_sdk_api/conversation/conversation.html#mute
  */
  var conversation = {
  	type: 'PRIVATE',
  	userId: 'mka091amn',
  	targetId: 'adm1klnm'
  };
  var result = yield Conversation.mute(conversation);
  console.log(result);
}).catch(error => {
  console.log(error);
});

co(function* (){
  /*
  API 文档: http://www.rongcloud.cn/docs/server_sdk_api/conversation/conversation.html#unmute
  */
  var conversation = {
  	type: 'PRIVATE',
  	userId: 'mka091amn',
  	targetId: 'adm1klnm'
  };
  var result = yield Conversation.unmute(conversation);
  console.log(result);
}).catch(error => {
  console.log(error);
});

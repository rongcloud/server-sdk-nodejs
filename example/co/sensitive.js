//npm install co --save
var co = require('co');

var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapkvucoil',
    secret: 'y0icysjl4h3LWz'
});

var Sensitive = RongSDK.Sensitive;

co(function* (){
  /*
  添加敏感词替换
  API 文档: http://www.rongcloud.cn/docs/server_sdk_api/sensitive/sensitive.html#add
  */
  var rule = {
  	keyword: '小米手机',
  	replace: 'iPhone7',
  	type: 0
  };
  var result = yield Sensitive.add(rule);
  console.log(result);
}).catch(error => {
  console.log(error);
});

co(function* (){
  /*
  添加敏感词屏蔽
  API 文档: http://www.rongcloud.cn/docs/server_sdk_api/sensitive/sensitive.html#add
  */
  var rule = {
  	keyword: '小米手机',
  	type: 1
  };
  var result = yield Sensitive.add(rule);
  console.log(result);
}).catch(error => {
  console.log(error);
});

co(function* (){
  /*
  API 文档: http://www.rongcloud.cn/docs/server_sdk_api/sensitive/sensitive.html#remove
  */
  var rule = {
  	keywords: '小米手机'
  };
  var result = yield Sensitive.remove(rule);
  console.log(result);
}).catch(error => {
  console.log(error);
});

co(function* (){
  /*
  API 文档: http://www.rongcloud.cn/docs/server_sdk_api/sensitive/sensitive.html#getList
  */
  var result = yield Sensitive.getList();
  console.log(result);
}).catch(error => {
  console.log(error);
});

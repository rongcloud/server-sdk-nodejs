### Server SDK

#### 初始化

```
npm install rongcloud-sdk
```

#### 使用

以注册用户为例

```js
var RongSDK = require('rongcloud-sdk')({
    appkey: '8luwapucoil',
    secret: 'y0iyjl4h3LWz'
});

// API 文档: http://www.rongcloud.cn/docs/server/sdk/user/user.html#register
var User = RongSDK.User;
var user = {
	id: 'ujadk90ha',
	name: 'Maritn',
	portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
};
User.register(user).then(result => {
	console.log(result);
}, error => { 
	console.log(error);
});
```

#### 文档

[API 文档](http://rongcloud.github.io/server-sdk-nodejs/docs)

[API 示例](./example)

#### 单元测试

1、下载或克隆 `server-sdk-nodejs`

2、进入项目 `server-sdk-nodejs` 目录

3、安装依赖 `npm install`

4、运行单元测试 `npm test`

#### 声明

3.0.0 版本 SDK API 不再向老版本兼容，老版本 SDK 可用但不再维护


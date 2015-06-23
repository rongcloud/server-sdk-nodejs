The RongCloud Server SDK
------------------------

[Rong Cloud](http://rongcloud.cn) is committed to providing cloud-based instant messaging services for Internet and Mobile Internet developers. It enables developers to quickly integrate instant messaging capabilities with applications without any hardware installation requirements.

The server SDK is a wrapper of all the https API calls, which could be found [here](http://www.rongcloud.cn/docs/server.html)


## Install

```bash
$ npm install rongcloud-sdk
```

## Init

```js
var rongcloudSDK = require( 'rongcloud-sdk' );
rongcloudSDK.init( 'APP_KEY', 'APP_SECRET' );
```

## Usage


```js
rongcloudSDK.user.getToken( '0001', 'Lance', 'http://files.domain.com/avatar.jpg', function( err, resultText ) {
  if( err ) {
    // Handle the error
  }
  else {
    var result = JSON.parse( resultText );
    if( result.code === 200 ) {
      //Handle the result.token
    }
  }
} );

```

## Asking for a xml format response

```js
rongcloudSDK.user.getToken( '0001', 'Lance', 'http://files.domain.com/avatar.jpg', 'xml', function( err, resultText ) {
  if( err ) {
    // Handle the error
  }
  else {
    // Handle the xml string, since Node.JS doesn't provide a native xml object, you have to handle it by yourself.
  }
} );
```

##  API Coverage
The SDK covers all of the RongCloud APIs, including:

[User](http://www.rongcloud.cn/docs/server.html#用户服务)

[User block](http://www.rongcloud.cn/docs/server.html#用户封禁服务)

[User blackList](http://www.rongcloud.cn/docs/server.html#用户黑名单服务)

[Message](http://www.rongcloud.cn/docs/server.html#消息发送服务)

[Messsage routing](http://www.rongcloud.cn/docs/server.html#消息路由服务)

[Message history](http://www.rongcloud.cn/docs/server.html#消息历史记录服务)

[Group](http://www.rongcloud.cn/docs/server.html#群组服务)

[Chatroom](http://www.rongcloud.cn/docs/server.html#聊天室服务)

The SDK API is designed to keep accordant with the http request path, with all the **"/"** replaced with **"."**, that is, for the https API:

`https://api.cn.rong.io/user/getToken`

You can call 

`rongcloudSDK.user.getToken`


## Testing
Since most of the time the user won't be using the components for testing(they are async, underscore, mocha, should and xml2js), these components are obtained only in the npm test script( you can see the scripts for testing in package.json), for testing, just run:

```bash
$ npm install
$ npm test
```

## License
[MIT](LICENSE)

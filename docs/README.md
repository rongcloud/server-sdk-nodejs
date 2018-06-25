#### 使用步骤

##### 1、注册开发者，请移步 [开发者后台](https://developer.rongcloud.cn)

##### 2、创建应用

##### 3、获取 Appkey 、 Secret

#### Server SDK{#server-sdk}

各平台 SDK **源码**、**示例** 请移步: [Java](https://github.com/rongcloud/server-sdk-java)、 [Node.js](https://github.com/rongcloud/server-sdk-nodejs)

#### SDK 使用指南

<img src="http://www.rongcloud.cn/docs/assets/img/guide/archietecture@2x.png" width="600" height="500">

>图解

蓝色框表示应用服务器 (App Server)，用来处理业务数据，比如用户信息、群组关系等

App Server 会使用到融云 Server SDK： [Java](https://github.com/rongcloud/server-sdk-java)、 [Node.js](https://github.com/rongcloud/server-sdk-nodejs)

蓝色为应用（App），客户端发送消息使用，会用到各端 SDK: [iOS](http://www.rongcloud.cn/docs/ios.html#integration)、[Android](http://www.rongcloud.cn/docs/android.html#integration)、[Web](http://www.rongcloud.cn/docs/web.html#sdk)、[Desktop](http://www.rongcloud.cn/docs/desktop.html)

绿色框表示融云服务器 (RongCloud Server) ，是消息通道，调用各端 SDK 发送消息即可

## 系统消息模块

### System.send(message){#send}

`message` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 3.0.0 |
| targetId	  		| string 	| 	是 	| 接收方 Id| 3.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 3.0.0 |
| content 			| object 	| 	是 	| 消息内容| 3.0.0 |
| pushContent		| string 	| 	否 	| push 内容, 分为两类 [内置消息 Push](../GLOSSARY.md#inner-message-push) 、[自定义消息 Push](../GLOSSARY.md#custom-message-push) | 3.0.0 |
| pushData 			| object 	| 	否 	| iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData| 3.0.0 |
| count 			| string 	| 	否 	| 针对 iOS 平台，Push 时用来控制未读消息显示数 | 3.0.0 |
| isPersisted 		| string 	| 	否 	|  <span style="color:red;">是否在融云服务器存储, 0: 不存储, 1: 存储, 默认: 1 </span>| 3.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### System.broadcast(message){#broadcast}

给应用内所有用户发送消息，每小时最多发 2 次，每天最多发送 3 次

`message` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 3.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 3.0.0 |
| content 			| object 	| 	是 	| 消息内容| 3.0.0 |

```json
{
    "code": 200
}
```

### System.sendTemplate(message){#sendTemplate}

`message` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 3.0.0 |
| objectName  		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 3.0.0 |
| template 			| object 	| 	是 	| 发送消息模版，必须与 objectName 的消息体一致，详细请参考 [示例](../README.md#server-sdk)  | 3.0.0 |
| content 			| object 	| 	是 	| 数据内容，包含消息内容和接收者，详细请参考各平台 [SDK](../README.md)| 3.0.0 |

```json
{
    "code": 200
}
```

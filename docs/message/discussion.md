## 讨论组模块

### Discussion.send(message){#send}

`message` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 3.0.0 |
| targetId	  		| string 	| 	是 	| 讨论组 Id| 3.0.0 |
| objectName 		| string 	| 	是 	| 消息类型, 分为两类: [内置消息类型](../GLOSSARY.md#inner-message) 、[自定义消息类型](../GLOSSARY.md#custom-message) | 3.0.0 |
| content 			| object 	| 	是 	| 消息内容| 3.0.0 |
| pushContent		| string 	| 	否 	| push 内容, 分为两类 [内置消息 Push](../GLOSSARY.md#inner-message-push) 、[自定义消息 Push](../GLOSSARY.md#custom-message-push) | 3.0.0 |
| pushData 			| object 	| 	否 	| iOS 平台为 Push 通知时附加到 payload 中，Android 客户端收到推送消息时对应字段名为 pushData| 3.0.0 |
| count 			| string 	| 	否 	| 针对 iOS 平台，Push 时用来控制未读消息显示数 | 3.0.0 |
| isPersisted 		| string 	| 	否 	| 是否在融云服务器存储, 0: 不存储, 1: 存储, 默认: 1| 3.0.0 |
| isCounted 		| number 	| 	否 	| 在各端是否计数, 0: 不计数, 1: 计数, 默认: 1| 3.0.0 |
| isIncludeSender 	| string 	| 	否 	| 发送者自己是否接收此条消息, 0: 不接收, 1: 接收, 默认: 0| 3.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Discussion.recall(message){#recall}

撤回已发送的讨论组消息，撤回时间无限制，只允许撤回用户自己发送的消息

`message` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| senderId	  		| string 	| 	是 	| 发送人 Id| 3.0.0 |
| targetId	  		| string 	| 	是 	| 讨论组 Id| 3.0.0 |
| uId 				| string 	| 	是 	| 消息的唯一标识，各端 SDK 发送消息成功后会返回 uId  | 3.0.0 |
| sentTime 			| object 	| 	是 	| 消息的发送时间，各端 SDK 发送消息成功后会返回 sentTime| 3.0.0 |

```json
{
    "code": 200
}
```
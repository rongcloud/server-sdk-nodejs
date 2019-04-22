## 会话模块{#conversation}

会话类型说明:

| 	类型   	  |	说明
| :-----------|:--------
|	PRIVATE	  | 单聊
|	GROUP	  |	群聊
|	DISCUSSION|	讨论组
|	SYSTEM	  |	系统会话

### Conversation.mute(conversation){#mute}

设置用户某个会话屏蔽 Push

`conversation` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| type		  		| string 	| 	是 	| 会话类型 `PRIVATE`、`GROUP`、`DISCUSSION`、`SYSTEM`| 3.0.0 |
| userId	  		| string 	| 	是 	| 设置用户 Id	| 3.0.0 |
| targetId	  		| string 	| 	是 	| 需要屏蔽的目标 Id | 3.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Conversation.unmute(conversation){#unmute}

设置用户某个会话接收 Push

`conversation` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| type		  		| string 	| 	是 	| 会话类型 `PRIVATE`、`GROUP`、`DISCUSSION`、`SYSTEM`| 3.0.0 |
| userId	  		| string 	| 	是 	| 设置用户 Id	| 3.0.0 |
| targetId	  		| string 	| 	是 	| 需要接收 Push 的目标 Id | 3.0.0 |

##### 请求成功

```json
{
    "code": 200
}
```

### Conversation.get(conversation){#get}

查询用户某一会话消息免打扰的设置状态。

`conversation` 参数的**属性说明**:

| 参数   	 		|	类型		| 必填	| 说明 							|最低版本	|
| :----------------	|:--------	|:-----	|:------------------------------|:----- |
| type		  		| string 	| 	是 	| 会话类型 `PRIVATE`、`GROUP`、`DISCUSSION`、`SYSTEM`| 3.0.0 |
| userId	  		| string 	| 	是 	| 设置用户 Id	| 3.0.0 |
| targetId	  		| string 	| 	是 	| 需要接收 Push 的目标 Id | 3.0.0 |

##### 请求成功

```json
{
	"code": 200,
	"isMuted": 0
}
```

| 参数   	 |	类型		| 说明
| :----------|:--------	|:-----
|	code	 |	number	| 返回码，200 为正常。
|	isMuted		 |	number	| 消息免打扰设置状态，0 表示为关闭，1 表示为开启。

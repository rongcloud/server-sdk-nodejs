### 消息类型{#message}

消息类型分两类 `内置消息类型`、`自定义消息类型`，内置消息类型定义了常用消息，例如 `文本消息`、`图片消息` 等，若内置消息无法满足业务需求，可以使用自定消息类型	

#### 内置消息{#inner-message}

##### 消息类型{#inner-message-type}

##### 文本消息

消息类型: `RC:TxtMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| 文本消息内容
|	extra	 |	any		|	否 	| 附加信息，例如: 发送消息携带用户信息

结构示例:

```json
{
	"content": "你好 RongCloud!",
	"extra": {
		"id": "mndk90",
		"name": "孙大圣"
	}
}
```

##### 图片消息

消息类型: `RC:ImgMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| `jpg` 类型缩略图，格式为 Base64，不包含头信息 `data:image/jpg;base64,`
|	imageUri |	string	|	是 	| 图片消息 URL
|	extra	 |	any		|	否 	| 附加信息

JSON 示例:

```json
{
	"content": "iVBORw0KGgoAAAAN...5ErkJggg==",
	"imageUri": "http://www.rongcloud.cn/avatar.jpg",
	"extra": "附加信息"
}
```

##### 语音消息

消息类型: `RC:VcMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| 语音内容，格式为 Base64 类型的 AMR
|	duration |	number	|	是 	| 语音时长，单位: 秒
|	extra	 |	any		|	否 	| 附加信息

结构示例:

```json
{
	"content": "IyFBTVIKPJEXFr5me...5ErkJggg==",
	"duration": 10,
	"extra": "附加信息"
}
```

##### 图文消息

消息类型: `RC:ImgTextMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	title  	 |	string	|	是 	| 消息标题
|	content  |	string	|	是 	| 概要
|	imageUri |	stirng	|	是 	| 图片地址
|	url	 	 |	string	|	是 	| 跳转路径
|	extra	 |	any		|	否 	| 附加信息

结构示例:

```json
{
	"title": "RongCloud",
	"content": "即时通讯",
	"imageUri": "http://www.rongcloud.cn/1.jpg",
	"url": "http://www.rongcloud.cn",
	"extra": "附加信息"
}
```

##### 文件消息

消息类型: `RC:FileMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	name  	 |	string	|	是 	| 名称
|	size 	 |	number	|	是 	| 大小，单位: 字节
|	type	 |	stirng	|	是 	| 类型，文件后缀名，不包含 `.`
|	fileUrl	 |	string	|	是 	| 文件地址
|	extra	 |	any		|	否 	| 附加信息

结构示例:

```json
{
	"name": "user.md",
	"size": 3014,
	"type": "md",
	"fileUrl": "http://www.rongcloud.com/user.md",
	"extra": "附加信息"
}
```

##### 位置消息

消息类型: `RC:LBSMsg`

消息结构:

| 属性   	 |	类型		| 必填	| 说明 							
| :----------|:--------	|:-----	|:------------------------------
|	content  |	string	|	是 	| `jpg` 类型缩略图，格式为 Base64，不包含头信息 `data:image/jpg;base64,`
|	latitude |	number	|	是 	| 经度
|	longitude|	number	|	是 	| 纬度
|	poi	 	 |	string	|	是 	| 位置信息
|	extra	 |	any		|	否 	| 附加信息

结构示例:

```json
{
	"content": "/9j/4AAQSkZJRgABA...jUHg4p9aos//2Q==",
	"latitude": 24.114,
	"longitude": 334.221,
	"poi": "北京市朝阳区北苑路北辰泰岳大厦",
	"extra": "附加内容"
}
```

##### Push 内容{#inner-message-push}

中文 Push:

| 消息   	 |	类型			| 单聊									|  群聊
| :----------|:----------	|:--------------------------------------| :-------	
| 文本消息	 |RC:TxtMsg		| 发送者: `content` 内容					| 群名: `content` 内容
| 图片消息	 |RC:ImgMsg		| 发送者: [图片] 							| 群名: [图片]
| 语音消息	 |RC:VcMsg		| 发送者: [语音] 							| 群名: [语音]
| 图文消息	 |RC:ImgTextMsg	| 发送者: [图文] 							| 群名: [图文]
| 文件消息	 |RC:FileMsg	| 发送者: [文件] 							| 群名: [文件]
| 位置消息	 |RC:LBSMsg		| 发送者: [位置] 							| 群名: [位置]

英文 Push:

| 消息   	 |	类型			| 单聊									|  群聊
| :----------|:----------	|:--------------------------------------| :-------	
| 文本消息	 |RC:TxtMsg		| 发送者: `content` 内容					| 群名: `content` 内容
| 图片消息	 |RC:ImgMsg		| 发送者: [Image] 						| 群名: [Image]
| 语音消息	 |RC:VcMsg		| 发送者: [Voice] 						| 群名: [Voice]
| 图文消息	 |RC:ImgTextMsg	| 发送者: [Rich Content] 				| 群名: [Rich Content]
| 文件消息	 |RC:FileMsg	| 发送者: [File] 						| 群名: [File]
| 位置消息	 |RC:LBSMsg		| 发送者: [Location] 					| 群名: [Location]
		
#### 自定义消息{#custom-message}

当内置消息类型无法满足业务需求是，可使用自定义消息实现业务

##### 消息类型{#custom-message-type}

`自定义消息` 类型名称无限制，对格式做 `前缀:名称` 约定，例如 `Mt:ChrmNotify`，消息题可按需求自定义

例如需求:	 考试结束了，需要学生们发送成绩单，定义消息 `Stu:score` 属性有 `score` 

结构示例:

```json
{
	"score": {
		"english": 95,
		"physics": 96
	}
}
```
##### Push 内容{#custom-message-push}

自定义消息默认无 Push， 若需要 Push 请设置`发送消息` 接口 `PushContent` 属性
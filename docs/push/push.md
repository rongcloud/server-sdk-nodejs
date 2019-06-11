## 广播推送模块

### Push.push(push){#push}

推送和广播消息合计每小时只能发送 2 次，每天最多发送 3 次，此功能 Java SDK 3.0.4 版本开始支持，Node.js SDK 3.0.1 版本开始支持。


`push` 参数的**属性说明**：

参数          | 类型   | 必填	  | 说明
:--------------|:-------|:-------------------|:---------
platform  | array	| 	是  | 目标操作系统，iOS、Android 最少传递一个。如果需要给两个系统推送消息时，则需要全部填写。
audience     | String	| 	是  | 推送条件，包括：tag 、userid 、packageName 、 is_to_all。
tag      | array	| 	否  | 用户标签，每次发送时最多发送 20 个标签，标签之间为 AND 的关系，is_to_all 为 true 时参数无效。
tag_or       | array	| 	否  | 用户标签，每次发送时最多发送 20 个标签，标签之间为 OR 的关系，is_to_all 为 true 时参数无效，tag_or 同 tag 参数可以同时存在。
userid     | array	| 	否  | 用户 Id，每次发送时最多发送 1000 个用户，如果 tag 和 userid 两个条件同时存在时，则以 userid 为准，如果 userid 有值时，则 platform 参数无效，is_to_all 为 true 时参数无效。
packageName  | String	| 	否  | 应用包名，is_to_all 为 true 时，此参数无效。与 tag、tag_or 同时存在时为 And 的关系，向同时满足条件的用户推送。与 userid 条件同时存在时，以 userid 为准进行推送。
is_to_all  | String	| 	是  | 是否全部推送，false 表示按 tag 、tag_or 或 userid 条件推送，true 表示向所有用户推送，tag、tag_or 和 userid 条件无效。
notification | String 	| 	是 | 按操作系统类型推送消息内容，如 platform 中设置了给 iOS 和 Android 系统推送消息，而在 notification 中只设置了 iOS 的推送内容，则 Android 的推送内容为最初 alert 设置的内容。
alert      | String	| 	是  | notification 下 alert，默认推送消息内容，如填写了 iOS 或 Android 下的 alert 时，则推送内容以对应平台系统的 alert 为准。
ios   | String	| 	否  | 设置 iOS 平台下的推送及附加信息。
android| String	| 	否  | 设置 Android 平台下的推送及附加信息。
title  | String 	| 	否 | 通知栏显示的推送标题，仅针对 iOS 平台，支持 iOS 8.2 及以上版本，参数在 `ios` 节点下设置，详细可参考“设置 iOS 推送标题请求示例”。
contentAvailable   | Int	| 	否  | 针对 iOS 平台，静默推送是 iOS7 之后推出的一种推送方式。 允许应用在收到通知后在后台运行一段代码，且能够马上执行，[查看详细](http://support.rongcloud.cn/kb/NjYy?_blank)。1 表示为开启，0 表示为关闭，默认为 0
alert  | String 	| 否 | iOS 或 Android 不同平台下的推送消息内容，传入后默认的推送消息内容失效，不能为空
extras  | String	|  否  | iOS 或 Android 不同平台下的附加信息，如果开发者自己需要，可以自己在 App 端进行解析
badge   | int   	| 否  | 应用角标，仅针对 iOS 平台；不填时，表示不改变角标数；为 0 或负数时，表示 App 角标上的数字清零；否则传相应数字表示把角标数改为指定的数字，最大不超过 9999，参数在 `ios` 节点下设置，详细可参考“设置 iOS 角标数 HTTP 请求示例”
category | String 	| 否  | iOS 富文本推送的类型开发者自已定义，自已在 App 端进行解析判断，与 richMediaUri 一起使用
richMediaUri | String 	| 否   | iOS 富文本推送内容的 URL，与 category 一起使用

##### 请求成功

`JSON 格式：`

```
{
  "code":200,
  "id":"50whSR6kQiHb7YgFwQzXIb"
}
```

名称   | 类型 | 说明
:-------|:-----|:-------------------
`code` | int  | 返回码，200 为正常。
`id` | String  | 推送唯一标识。


### Push.message(message){#message}

推送和广播消息合计每小时只能发送 2 次，每天最多发送 3 次，此功能 Java SDK 3.0.4 版本开始支持，Node.js SDK 3.0.1 版本开始支持。

`message` 参数的**属性说明**：

参数          | 类型   | 必填	  | 说明	
:--------------|:-------|:-------------------|:----------
 platform  | array | 	是 | 目标操作系统，iOS、Android 最少传递一个。如果需要给两个系统推送消息时，则需要全部填写。
 fromuserid   | String  | 	是  | 发送人用户 Id。
 audience     | String| 	是  | 推送条件，包括： tag、userid、is_to_all。
 tag      | array | 	否 | 用户标签，每次发送时最多发送 20 个标签，标签之间为 AND 的关系，is_to_all 为 true 时参数无效。
 tag_or       | array | 	否 | 用户标签，每次发送时最多发送 20 个标签，标签之间为 OR 的关系，is_to_all 为 true 时参数无效，tag_or 同 tag 参数可以同时存在。
 userid      | array | 	否 | 用户 Id，每次发送时最多发送 1000 个用户，如果 tag 和 userid 两个条件同时存在时，则以 userid 为准，如果 userid 有值时，则 platform 参数无效，is_to_all 为 true 时参数无效。
 is_to_all  | String | 	是 | 是否全部推送，false 表示按 tag 、tag_or 或 userid 条件推送，true 表示向所有用户推送，tag、tag_or 和 userid 条件无效。
 content    | String | 	是 | 发送消息内容。
 objectName | String | 	是 | 消息类型。
 notification | String | 	否 | 按操作系统类型推送消息内容，如 platform 中设置了给 iOS 和 Android 系统推送消息，而在 notification 中只设置了 iOS 的推送内容，则 Android 的推送内容为最初 alert 设置的内容。
 alert      | String | 	是 | 默认推送消息内容，如填写了 iOS 或 Android 下的 alert 时，则推送内容以对应平台系统的 alert 为准。（必传）
 ios    | String | 	否 | 设置 iOS 平台下的推送及附加信息。
 android| String | 	否 | 设置 Android 平台下的推送及附加信息。
 alert  | String | 	否 | iOS 或 Android 不同平台下的推送消息内容，传入后默认的推送消息内容失效，不能为空。
 contentAvailable   | Int | 	否 | 针对 iOS 平台，对 SDK 处于后台暂停状态时为静默推送，是 iOS7 之后推出的一种推送方式。 允许应用在收到通知后在后台运行一段代码，且能够马上执行，[查看详细](http://support.rongcloud.cn/kb/NjYy?_blank)。1 表示为开启，0 表示为关闭，默认为 0
 extras  | String | 	否  | iOS 或 Android 不同平台下的附加信息，如果开发者自己需要，可以自己在 App 端进行解析。


##### 请求成功

```json
{
  "code":200,
  "id":"50whSR6kQiHb7YgFwQzXIb"
}
```

名称   | 类型 | 说明
:-------|:-----|:-------------------
`code` | int  | 返回码，200 为正常。
`id` | String  | 广播消息唯一标识。


| 模块          | 方法名            | 说明                               | 支持版本（Tag） |
|:--------------|:------------------|:------------------------------------|:------------|
| 用户信息       | register                   | 注册， 获取 token            | 3.0.1       |
|               | update                     | 更新用户信息                 | 3.0.1             |
| 黑名单         | Blacklist.add              | 添加黑名单                   | 3.0.1              |
|               | Blacklist.getList          | 获取黑名单列表                | 3.0.1              |
|               | Blacklist.remove           | 移除黑名单                    |3.0.1               |
| 用户封禁       | Block.add                  | 添加用户封禁                   | 3.0.1             |
|               | Block.getList              | 获取用户封禁列表               |  3.0.1             |
|               | Block.remove               | 移除用户封禁                   | 3.0.1              |
| 用户标签       | Tag.set                   | 添加用户标签                    | 3.0.1             |
|               | Tag.batchset              | 批量添加用户标签                | 3.0.1             |
|               | Tag.get                   | 获取用户标签                    | 3.0.1             |
| 敏感词          | add                        | 添加敏感词，添加后默认 2 小时生效           |3.0.1      |
|                | getList                    | 获取敏感词列表                           |3.0.1      |
|                | remove                     | 移除敏感词，支持批量移除功能，移除后默认 2 小时生效|3.0.1 |
| 消息发送        | Private.send               | 发送单聊消息    |3.0.1                    |
|                | Private.sendTemplate       | 发送单聊模板消息|3.0.1                    |
|                | Private.recall             | 消息单聊撤回    |3.0.1                   |
|                | Chatroom.send              | 发送聊天室消息  |3.0.1                   |
|                | Chatroom.broadcast         | 发送聊天室广播消息|3.0.1                   |
|                | Group.send                 | 发送群组消息    | 3.0.1                  |
|                | Group.sendMention          | 发送群组 @ 消息 | 3.0.1                  |
|                | Group.recall               | 撤回群组消息    | 3.0.1                  |
|                | System.send                | 发送系统消息    | 3.0.1                  |
|                | System.sendTemplate        | 发送系统模板消息  | 3.0.1                  |
|                | System.broadcast           | 发送广播消息，单个应用每小时只能发送 2 次，每天最多发送 3 次。|3.0.1|
| 消息历史记录     | Message.history.get        | 消息历史记录下载地址获取|3.0.1|
|                | Message.history.remove     | 消息历史记录删除方法|3.0.1|
| 广播推送        | Push.push| 发送推送，推送和广播消息合计，单个应用每小时只能发送 2 次，每天最多发送 3 次。     |3.0.2 |
|               | Push.message| 发送广播消息，推送和广播消息合计，单个应用每小时只能发送 2 次，每天最多发送 3 次。|3.0.2|
| 群组            | create                     | 创建群组      |3.0.1|
|                | sync                       | 同步群关系     |3.0.1|
|                | update                     | 更新群信息     |3.0.1|
|                | get                        | 获取群信息     |3.0.1|
|                | invite                     | 邀请人加入群组   |3.0.1|
|                | quit                       | 退出群组      |3.0.1|
|                | dismiss                    | 解散群组      |3.0.1|
| 会话免打扰(Conversation) | mute               | 添加免打扰会话   |3.0.1|
|                | unMute                     | 移除免打扰会话   |3.0.1|
|                | get                        | 免打扰会话状态获取 |3.0.1|
| 聊天室          | create                     | 创建聊天室     |3.0.1|
|                | destroy                    | 销毁聊天室     |3.0.1|
|                | get                        | 查询聊天室信息   |3.0.1|
|                | isExist                    | 检查用户是否在聊天室|3.0.1|
| 聊天室封禁       | Block.add        | 被封禁后用户无法加入该聊天室，如用户正在聊天室中将被踢出聊天室 | 3.0.1|
|                | Block.getList              | 获取聊天室封禁用户列表  |3.0.1|
|                | Block.remove               | 移除聊天室封禁用户 |3.0.1|
| 聊天室消息优先级  | Demotion.add     | 添加后因消息量激增导致服务器压力较大时，默认丢弃低级别的消息 | 3.0.1|
|                | Demotion.getList           | 查询聊天室低优先级消息列表  |3.0.1|
|                | Demotion.remove            | 移除聊天室低优先级消息      |3.0.1|
| 聊天室消息分发控制| Distribute.stop            | 停止聊天室消息分发，服务端收到上行消息后不进行下行发送| 3.0.1|
|                | Distribute.resume          | 恢复聊天室消息分发 |3.0.1|
| 聊天室保活       | Keepalive.add              | 添加保活聊天室，保活中的聊天室不会被自动销毁|3.0.1|
|                | Keepalive.remove           | 移除保活聊天室   |3.0.1|
|                | Keepalive.getList          | 获取保活聊天室列表 |3.0.1|
| 聊天室消息白名单 | Whitelist.message.add      | 消息量激增导致服务器压力较大时不会被丢弃，确保消息到达 | 3.0.1|
|               | Whitelist.message.remove   | 移除白名单消息类型 |3.0.1|
|               | Whitelist.message.getList  | 获取白名单消息类型列表  |3.0.1|
| 聊天室用户白名单 | Whitelist.user.add         | 在消息量激增导致服务器压力较大时不会被丢弃，确保消息到达 | 3.0.1|
|               | Whitelist.user.remove      | 移除白名单用户   |3.0.1|
|               | Whitelist.user.getList     | 获取白名单用户列表 |3.0.1|
### 文档导航

点击模块名称可快速跳转

```{mermaid}
graph TB
   subgraph 聊天室模块
		聊天室
		聊天室-全局禁言
		聊天室-成员禁言
		聊天室-封禁
		聊天室-消息降级
		聊天室-消息分发
		聊天室-保活
		聊天室-白名单
    end
```

```{mermaid}
graph TB
    subgraph 用户模块
        用户
        用户-黑名单
        用户-封禁
        用户-在线状态
	end

	subgraph 群组模块
		群组
		群组-禁言
	end

    subgraph 消息模块
        消息
		历史消息
    end

    subgraph 会话模块
		会话
    end

    subgraph 敏感词模块
		敏感词
    end

	subgraph 错误码模块
		错误码
    end

    click 用户 "./user/" "前往用户模块"
```

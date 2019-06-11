"use strict";
const utils = require('../../lib/utils');
const _ = utils.underscore;
const RongCloud = require('../../index');

beforeAll(function () {
    let appkey = '8luwapkvucoil';
    let secret = 'y0icysjl4h3LWz';

    this.rongSDK = RongCloud({
        appkey: appkey,
        secret: secret
    });

    this.appkey = appkey;
    this.secret = secret;

    this.user = {
        minute: 10,
        largeMinute: 543200,

        tags: ['IM'],

        id: 'ujadk90ha',
        largeId: _.times(35, () => {
            return 'Id'
        }).join(''),
        emptyId: '',

        name: 'Martin',
        largeName: _.times(64, () => {
            return 'name'
        }).join(''),

        portrait: 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982',
        largePortraitUri: _.times(100, () => {
            return 'http://7xogjk.com1.z0.glb.clouddn.com/IuDkFprSQ1493563384017406982'
        }).join(''),

        blacklist: [{
            id: '1001'
        }]
    };

    this.group = {
        id: 'groupId1',
        emptyId: '',
        largeName: _.times(64, () => {
            return 'name'
        }).join(''),
        sync: {
            id: 'martin9901',
            groups: [{ id: 'group999', name: 'RongCloud' }]
        },
        create: {
            id: 'kl9k98mn',
            name: 'RongCloud',
            members: [{
                id: 'ujadk90ha'
            }]
        },
        join: {
            id: 'kl9k98mn',
            name: 'RongCloud',
            member: {
                id: 'ujsk100a'
            }
        },
        invite: {
            id: 'kl9k98mn',
            name: 'RongCloud',
            members: [{
                id: 'ujsk100a'
            }]
        },
        quit: {
            id: 'kl9k98mn',
            member: {
                id: 'sea9901'
            }
        },
        dismiss: {
            id: 'kl987hkl',
            member: {
                id: 'sea9901'
            }
        },
        kick: {
            id: 'kl9k98mn',
            members: [{
                id: 'sea9901'
            }]
        },
        update: {
            id: 'watergroup',
            name: 'Water'
        },
        get: {
            id: 'kl9k98mn'
        }
    };

    this.groupGag = {
        add: {
            id: 'watergroup',
            members: [{
                id: 'member01'
            }],
            minute: 43200
        },
        remove: {
            id: 'watergroup',
            members: [{
                id: 'member01'
            }]
        },
        getList: {
            id: 'watergroup'
        }
    };

    this.sensitive = {
        keyword: '小米手机',
        replace: 'iPhone7',
        keywords: ['法轮功'],
        largeKeywords: ['法轮功', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'
        ]
    };

    this.message = {
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.failMessage = {
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        //必须是对象，此处举反例验证
        content: 'helloworld'
    };

    this.groupMessage = {
        senderId: 'sea9902',
        targetId: 'group01',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.groupMentionMessage = {
        senderId: 'sea9902',
        targetId: 'markoiwm',
        objectName: 'RC:TxtMsg',
        content: {
            content: '你好，小明',
            mentionedInfo: {
                type: 1,
                userIds: ['kladd', 'almmn1'],
                pushContent: '问候消息'
            }
        }
    };

    this.systemMessage = {
        senderId: '__SYSTEM__',
        targetId: 'dkadnn901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.discussMessage = {
        senderId: 'sea9901',
        targetId: 'dkadnn901dis',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        }
    };

    this.broadcastMessage = {
        senderId: '__SYSTEM__',
        objectName: 'RC:TxtMsg',
        content: {
            content: '文本消息测试-system'
        }
    };

    this.broadcastChrmMessage = {
        senderId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: '文本消息测试-chat'
        }
    };

    this.templateMessage = {
        senderId: '__SYSTEM__',
        objectName: 'RC:TxtMsg',
        template: {
            content: '{name}, 语文成绩 {score} 分'
        },
        content: {
            sea9901: {
                data: {
                    '{name}': '小明',
                    '{score}': '90'
                },
                push: '{name} 考试成绩'
            },
            sea9902: {
                data: {
                    '{name}': '小红',
                    '{score}': '95'
                },
                push: '{name} 考试成绩'
            }
        }
    };

    this.recallMessage = {
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        },
        sentTime: 1458389271011,
        uId: 'MUSD-FKDS-AAF1-09FH'
    };

    this.failRecallMessage = {
        senderId: 'sea9902',
        targetId: 'sea9901',
        objectName: 'RC:TxtMsg',
        content: {
            content: 'helloworld'
        },
        sentTime: 1458389271011,
        uId: 'MUSD-FKDS-AAF1-09FH'
    };

    this.historyMessage = {
        date: 2018022710
    };

    this.failHistoryMessage = {
        date: 201802271011
    };

    this.conversation = {
        mute: {
            type: 'PRIVATE',
            userId: 'member01',
            targetId: 'watergroup'
        },
        unmute: {
            type: 'PRIVATE',
            userId: 'member01',
            targetId: 'watergroup'
        }
    };
    this.chatroom = {
        create: [{
            id: 'MNiuhfd91k',
            name: '大融云'
        }],
        destory: {
            id: ['MNiuhfd91k', 'testChrmId']
        },
        get: {
            id: 'MNiuhfd91k'
        },
        isExist: {
            id: 'ChartRoomId',
            members: [{
                id: 'seal9901'
            }]
        },
        banAdd: {
            members: [{
                id: 'seal9901'
            }],
            minute: 30
        },
        banRemove: {
            members: [{
                id: 'seal9901'
            }]
        },
        blockAdd: {
            id: 'ChartRoomId',
            members: [{
                id: 'seal9901'
            }],
            minute: 30
        },
        blockRemove: {
            id: 'ChartRoomId',
            members: [{
                id: 'seal9901'
            }]
        },
        blockgetList: {
            id: 'ChartRoomId'
        },
        demotionAdd: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        demotionRemove: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        distributeResume: {
            id: 'ChartRoomId'
        },
        distributeStop: {
            id: 'ChartRoomId'
        },
        gagAdd: {
            id: 'chatroom001',
            members: [{
                id: 'seal9901'
            }],
            minute: 30
        },
        gagRemove: {
            id: 'chatroom001',
            members: [{
                id: 'seal9901'
            }],
            minute: 30
        },
        gaggetList: {
            id: 'chatroom001'
        },
        keepaliveAdd: {
            id: 'chatroom001'
        },
        keepaliveRemove: {
            id: 'chatroom001'
        },
        whiteMsgAdd: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        whiteMsgRemove: {
            msgs: ['RC:TxtMsg01', 'RC:TxtMsg02', 'RC:TxtMsg03', 'RC:TxtMsg04', 'RC:TxtMsg05', 'RC:TxtMsg06']
        },
        whiteUserAdd: {
            id: 'chatroom001',
            members: [{
                id: 'seal9901'
            }]
        },
        whiteUserRemove: {
            id: 'chatroom001',
            members: [{
                id: 'seal9901'
            }]
        },
        whiteUsergetList: {
            id: 'chatroom001'
        }
    };

    this.pushContent = {
        platform: ["ios", "android"],
        audience: { tag: ["女", "年轻"], tag_or: ["北京", "上海"], userid: ["123", "456"], "is_to_all": false },
        notification: {
            alert: "this is a push",
            ios: { title: "标题", alert: "override alert", extras: { id: "userId2", name: "Lisa" } },
            android: { alert: "override alert", extras: { id: "userId", name: "martin" } }
        }
    };
    this.pushMessage = {
        platform: ["ios", "android"],
        fromUserId: 'mon888',
        audience: { tag: ["女", "年轻"], tag_or: ["北京", "上海"], userid: ["123", "456"], is_to_all: false },
        message: {
            content: JSON.stringify({ content: 'hello' }),
            objectName: "RC:TxtMsg"
        },
        notification: {
            alert: "this is a push",
            ios: { title: "标题", alert: "override alert", extras: { id: "userId2", name: "Lisa" } },
            android: { alert: "override alert", extras: { id: "userId", name: "martin" } }
        }
    };
});
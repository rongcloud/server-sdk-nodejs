"use strict";
describe('Chatroom', () => {
	let _golbal, Chatroom, ChrmBan, ChrmBlock, ChrmDemotion, ChrmDistribute, ChrmGag, ChrmKeepAlive, ChrmWhitelist, ChrmUserWhitelist, ChrmMsgWhitelist;
	beforeAll(function() {
		_golbal = this;
		Chatroom = _golbal.rongSDK.Chatroom;
		ChrmBan = Chatroom.Ban;
		ChrmBlock = Chatroom.Block;
		ChrmDemotion = Chatroom.Demotion;
		ChrmDistribute = Chatroom.Distribute;
		ChrmGag = Chatroom.Gag;
		ChrmKeepAlive = Chatroom.KeepAlive;
		
		ChrmWhitelist = Chatroom.Whitelist;
		ChrmUserWhitelist = ChrmWhitelist.User;
		ChrmMsgWhitelist = ChrmWhitelist.Message;
	});
	const config = require('../lib/chatroom/api.json');
	const banConf = require('../lib/chatroom/ban/api.json');
	const blockConf = require('../lib/chatroom/block/api.json');
	const demotionConf = require('../lib/chatroom/demotion/api.json');
	const distributeConf = require('../lib/chatroom/distribute/api.json');
	const gagConf = require('../lib/chatroom/gag/api.json');
	const keepAliveConf = require('../lib/chatroom/keepalive/api.json');
	const whitelistUserConf = require('../lib/chatroom/whitelist/user-api.json');
	const whitelistMsgConf = require('../lib/chatroom/whitelist/message-api.json');

	describe('Create', () => {
		let conf = config.create;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return Chatroom.create({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('批量创建: Success', () => {
			let chatrooms = _golbal.chatroom.create;
			return Chatroom.create(chatrooms).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('单个创建: Success', () => {
			let chatrooms = _golbal.chatroom.create;
			return Chatroom.create(chatrooms[0]).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Destory', () => {
		let conf = config.destory;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return Chatroom.destory({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.destory;
			return Chatroom.destory(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return Chatroom.destory({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('get', () => {
		let conf = config.get;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return Chatroom.get({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.get;
			return Chatroom.get(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return Chatroom.get({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('isExist', () => {
		let conf = config.isExist;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return Chatroom.isExist({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.isExist;
			return Chatroom.isExist(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return Chatroom.isExist({
				id: [],
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmBan.add', () => {
		let conf = banConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmBan.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		// 需开通专有云
		// it('Success', () => {
		// 	let chatroom = _golbal.chatroom.banAdd;
		// 	return ChrmBan.add(chatroom).then(result => {
		// 		expect(result.code).toEqual(Number(success));
		// 	});
		// });

		it('Fail', () => {
			let chatroom = _golbal.chatroom.banAdd;
			return ChrmBan.add({
				members: [],
				minute: chatroom.minute
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmBan.remove', () => {
		let conf = banConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmBan.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		// 需开通专有云
		// it('Success', () => {
		// 	let chatroom = _golbal.chatroom.banRemove;
		// 	return ChrmBan.remove(chatroom).then(result => {
		// 		console.log(result);
		// 		expect(result.code).toEqual(Number(success));
		// 	});
		// });

		it('Fail', () => {
			let chatroom = _golbal.chatroom.banRemove;
			return ChrmBan.remove({
				members: [],
				minute: chatroom.minute
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmBan.getList', () => {
		let conf = banConf.getList;

		let response = conf.response;
		let success = response.success.code;

		// 需开通专有云
		// it('Success', () => {
		// 	return ChrmBan.getList().then(result => {
		// 		console.log(result);
		// 		expect(result.code).toEqual(Number(success));
		// 	});
		// });

		it('Fail', () => {
			return ChrmBan.getList().catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmBlock.add', () => {
		let conf = blockConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmBlock.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.blockAdd;
			return ChrmBlock.add(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.blockAdd;
			return ChrmBlock.add({
				id: chatroom.id,
				members: [],
				minute: chatroom.minute
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmBlock.remove', () => {
		let conf = blockConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmBlock.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.blockRemove;
			return ChrmBlock.remove(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.blockRemove;
			return ChrmBlock.remove({
				id: chatroom.id,
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmBlock.getList', () => {
		let conf = blockConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmBlock.getList({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.blockgetList;
			return ChrmBlock.getList(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.blockgetList;
			return ChrmBlock.getList({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmDemotion.add', () => {
		let conf = demotionConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmDemotion.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.demotionAdd;
			return ChrmDemotion.add(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.demotionAdd;
			return ChrmDemotion.add({
				msgs: []
			}).then(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmDemotion.remove', () => {
		let conf = demotionConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmDemotion.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.demotionRemove;
			return ChrmDemotion.remove(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.demotionRemove;
			return ChrmDemotion.remove({
				msgs: []
			}).then(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmDemotion.getList', () => {
		let conf = demotionConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			return ChrmDemotion.getList().then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('ChrmDistribute.resume', () => {
		let conf = distributeConf.resume;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmDistribute.resume({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.distributeResume;
			return ChrmDistribute.resume(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.distributeResume;
			return ChrmDistribute.resume({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmDistribute.stop', () => {
		let conf = distributeConf.stop;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmDistribute.stop({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.distributeStop;
			return ChrmDistribute.stop(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.distributeStop;
			return ChrmDistribute.stop({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmGag.add', () => {
		let conf = gagConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmGag.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.gagAdd;
			return ChrmGag.add(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.gagAdd;
			return ChrmGag.add({
				id: chatroom.id,
				members: [],
				minute: chatroom.minute
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmGag.remove', () => {
		let conf = gagConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmGag.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.gagRemove;
			return ChrmGag.remove(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.gagRemove;
			return ChrmGag.remove({
				id: chatroom.id,
				members: [],
				minute: chatroom.minute
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmGag.getList', () => {
		let conf = gagConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmGag.getList({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.gaggetList;
			return ChrmGag.getList(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.gaggetList;
			return ChrmGag.getList({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmKeepAlive.add', () => {
		let conf = keepAliveConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmKeepAlive.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		// 需要开通专有云 http://www.rongcloud.cn/deployment#proprietary-cloud
		// it('Success', () => {
		// 	let chatroom = _golbal.chatroom.keepaliveAdd;
		// 	return ChrmKeepAlive.add(chatroom).then(result => {
		// 		expect(result.code).toEqual(Number(success));
		// 	});
		// });

		it('Fail', () => {
			let chatroom = _golbal.chatroom.keepaliveAdd;
			return ChrmKeepAlive.add({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmKeepAlive.remove', () => {
		let conf = keepAliveConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmKeepAlive.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		// 需要开通专有云 http://www.rongcloud.cn/deployment#proprietary-cloud
		// it('Success', () => {
		// 	let chatroom = _golbal.chatroom.keepaliveRemove;
		// 	return ChrmKeepAlive.remove(chatroom).then(result => {
		// 		expect(result.code).toEqual(Number(success));
		// 	});
		// });

		it('Fail', () => {
			let chatroom = _golbal.chatroom.keepaliveRemove;
			return ChrmKeepAlive.remove({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmKeepAlive.getList', () => {
		let conf = keepAliveConf.getList;

		let response = conf.response;
		let success = response.success.code;

		// 需要开通专有云 http://www.rongcloud.cn/deployment#proprietary-cloud
		// it('Success', () => {
		// 	let chatroom = _golbal.chatroom.keepalivegetList;
		// 	return ChrmKeepAlive.getList(chatroom).then(result => {
		// 		expect(result.code).toEqual(Number(success));
		// 	});
		// });

		it('Fail', () => {
			let chatroom = _golbal.chatroom.keepalivegetList;
			return ChrmKeepAlive.getList().catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmMsgWhitelist.add', () => {
		let conf = whitelistMsgConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmMsgWhitelist.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.whiteMsgAdd;
			return ChrmMsgWhitelist.add(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return ChrmMsgWhitelist.add({
            	 msgs: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmMsgWhitelist.remove', () => {
		let conf = whitelistMsgConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmMsgWhitelist.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.whiteMsgRemove;
			return ChrmMsgWhitelist.remove(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.whiteMsgRemove;
			return ChrmMsgWhitelist.remove({
            	 msgs: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmMsgWhitelist.getList', () => {
		let conf = whitelistMsgConf.getList;

		let response = conf.response;
		let success = response.success.code;
		
		it('Success', () => {
			return ChrmMsgWhitelist.getList().then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('ChrmUserWhitelist.add', () => {
		let conf = whitelistUserConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmUserWhitelist.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.whiteUserAdd;
			return ChrmUserWhitelist.add(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return ChrmUserWhitelist.add({
				 id: [],
            	 members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmUserWhitelist.remove', () => {
		let conf = whitelistMsgConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return ChrmUserWhitelist.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.whiteUserRemove;
			return ChrmUserWhitelist.remove(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let chatroom = _golbal.chatroom.whiteUserRemove;
			return ChrmUserWhitelist.remove({
				id: [],
            	 members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('ChrmUserWhitelist.getList', () => {
		let conf = whitelistMsgConf.getList;

		let response = conf.response;
		let success = response.success.code;
		
		it('参数无效', () => {
			return ChrmUserWhitelist.getList({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let chatroom = _golbal.chatroom.whiteUsergetList;
			return ChrmUserWhitelist.getList(chatroom).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return ChrmUserWhitelist.getList({
				id: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
});
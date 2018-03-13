"use strict";
describe('Message', () => {
	let _golbal, Message, Group;

	beforeAll(function() {
		_golbal = this;
		Message = _golbal.rongSDK.Message;
		Group = Message.Group;
	});

	const config = require('../../lib/message/group/api.json');

	describe('Group.send', () => {
		let conf = config.send;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Group.send(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return Group.send({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('success', () => {
			let message = _golbal.message;
			return Group.send(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Group.recall', () => {
		let conf = config.recall;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failRecallMessage;
			return Group.recall(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return Group.recall({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('撤回消息', () => {
			let message = _golbal.recallMessage;
			return Group.recall(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Group.sendMention', () => {
		let conf = config.sendMention;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Group.sendMention(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return Group.sendMention({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('success', () => {
			let message = _golbal.groupMentionMessage;
			return Group.sendMention(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
});
"use strict";
describe('Message', () => {
	let _golbal, Message, Discussion;

	beforeAll(function() {
		_golbal = this;
		Message = _golbal.rongSDK.Message;
		Discussion = Message.Discussion;
	});

	const config = require('../../lib/message/discussion/api.json');

	describe('Discussion.send', () => {
		let conf = config.send;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Discussion.send(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return Discussion.send({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('success', () => {
			let message = _golbal.message;
			return Discussion.send(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Discussion.recall', () => {
		let conf = config.recall;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failRecallMessage;
			return Discussion.recall(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return Discussion.recall({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('撤回消息', () => {
			let message = _golbal.recallMessage;
			return Discussion.recall(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
});
"use strict";
describe('Message', () => {
	let _golbal, Message, Private;

	beforeAll(function() {
		_golbal = this;
		Message = _golbal.rongSDK.Message;
		Private = Message.Private;
	});

	const config = require('../../lib/message/private/api.json');

	describe('Private.send', () => {
		let conf = config.send;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Private.send(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return Private.send({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('success', () => {
			let message = _golbal.message;
			return Private.send(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Private.recall', () => {
		let conf = config.recall;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failRecallMessage;
			return Private.recall(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return Private.recall({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('撤回消息', () => {
			let message = _golbal.recallMessage;
			return Private.recall(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Private.sendTemplate', () => {
		let conf = config.sendTemplate;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return Private.sendTemplate({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('模版消息', () => {
			let message = _golbal.templateMessage;
			return Private.sendTemplate(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
});
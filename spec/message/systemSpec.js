"use strict";
describe('Message', () => {
	let _golbal, Message, System;

	beforeAll(function() {
		_golbal = this;
		Message = _golbal.rongSDK.Message;
		System = Message.System;
	});

	const config = require('../../lib/message/system/api.json');

	describe('System.send', () => {
		let conf = config.send;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return System.send(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return System.send({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('success', () => {
			let message = _golbal.message;
			return System.send(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('System.sendTemplate', () => {
		let conf = config.sendTemplate;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return System.sendTemplate({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('模版消息', () => {
			let message = _golbal.templateMessage;
			return System.sendTemplate(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});


	describe('System.broadcast', () => {
		let conf = config.broadcast;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return System.broadcast(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return System.broadcast({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('success', () => {
			let message = _golbal.broadcastMessage;
			return System.broadcast(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
});
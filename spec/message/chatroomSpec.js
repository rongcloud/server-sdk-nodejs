"use strict";
describe('Message', () => {
	let _golbal, Message, Chatroom;

	beforeAll(function() {
		_golbal = this;
		Message = _golbal.rongSDK.Message;
		Chatroom = Message.Chatroom;
	});

	const config = require('../../lib/message/chatroom/api.json');

	describe('Chatroom.send', () => {
		let conf = config.send;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Chatroom.send(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return Chatroom.send({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('success', () => {
			let message = _golbal.message;
			return Chatroom.send(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Chatroom.broadcast', () => {
		let conf = config.broadcast;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failMessage;
			return Chatroom.broadcast(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			let message = _golbal.message;
			return Chatroom.broadcast({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
		// 需开通专属
		// it('success', () => {
		// 	let message = _golbal.broadcastMessage;
		// 	return Chatroom.broadcast(message).then(result => {
		// 		expect(result.code).toEqual(Number(success));
		// 	});
		// });
	});
});
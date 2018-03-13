"use strict";
describe('Message', () => {
	let _golbal, Message, History;

	beforeAll(function() {
		_golbal = this;
		Message = _golbal.rongSDK.Message;
		History = Message.History;
	});

	const config = require('../../lib/message/history/api.json');

	describe('History.get', () => {
		let conf = config.get;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failHistoryMessage;
			return History.get(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return History.get({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('获取历史消息文件地址', () => {
			let message = _golbal.historyMessage;
			return History.get(message).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('History.remove', () => {
		let conf = config.remove;

		let response = conf.response;
		let success = response.success.code;

		it('Fail', () => {
			let message = _golbal.failHistoryMessage;
			return History.remove(message).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('参数无效', () => {
			return History.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('删除历史消息文件地址', () => {
			let message = _golbal.historyMessage;
			return History.remove(message).then(result => {
				expect(result).not.toBeUndefined();
			});
		});
	});
});
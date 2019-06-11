"use strict";
describe('Push', () => {
	let _golbal, Push;
	beforeAll(function() {
		_golbal = this;
		Push = _golbal.rongSDK.Push;
	});
	const config = require('../lib/push/api.json');

	describe('push', () => {
		let conf = config.push;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let pushContent = _golbal.pushContent;
			return Push.push(pushContent).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return Push.push({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('message', () => {
		let conf = config.message;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let pushMessage = _golbal.pushMessage;
			return Push.message(pushMessage).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			return Push.message({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
});
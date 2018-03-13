"use strict";
describe('Sensitive', () => {
	let Sensitive, _golbal;
	beforeAll(function() {
		_golbal = this;
		Sensitive = _golbal.rongSDK.Sensitive;
	});

	const config = require('../lib/sensitive/api.json');

	describe('add', () => {
		let conf = config.add;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {
				keyword: sensitive.keyword,
				replace: sensitive.replace
			};
			return Sensitive.add(sensitive).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {
				keyword: '-'
			};
			return Sensitive.add(sensitive).then(result => {
				expect(result.code).not.toEqual(Number(success));
			});
		});

		it('缺失 keyword', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {
				replace: sensitive.replace
			};
			return Sensitive.add(sensitive).catch(error => {
				expect(error.code).not.toBeUndefined();
			});
		});

		it('敏感词屏蔽', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {
				keyword: sensitive.keyword,
				type: 1
			};
			return Sensitive.add(sensitive).catch(error => {
				expect(error.code).not.toBeUndefined();
			});
		});
	});

	describe('remove', () => {
		let conf = config.remove;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {
				keywords: sensitive.keywords,
			};
			return Sensitive.remove(sensitive).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {
				keywords: sensitive.largeKeywords
			};
			return Sensitive.remove(sensitive).then(result => {
				expect(result.code).not.toEqual(Number(success));
			});
		});

		it('缺失 keywords', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {};
			return Sensitive.remove(sensitive).catch(error => {
				expect(error.code).not.toBeUndefined();
			});
		});
	});

	describe('getList', () => {
		let conf = config.getList;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			return Sensitive.getList().then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let sensitive = _golbal.sensitive;
			sensitive = {
				type: 10
			};
			return Sensitive.getList(sensitive).catch(error => {
				expect(error.code).not.toEqual(Number(success));
			});
		});
	});
});
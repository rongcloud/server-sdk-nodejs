"use strict";
describe('User', () => {
	let _golbal, User, UserBlacklist, UserBlock, OnlineStatus, UserTag;

	beforeAll(function () {
		_golbal = this;
		User = _golbal.rongSDK.User;
		UserBlacklist = User.Blacklist;
		UserBlock = User.Block;
		OnlineStatus = User.OnlineStatus;
		UserTag = User.Tag;
	});

	const config = require('../lib/user/api.json');

	const blackConf = require('../lib/user/blacklist/api.json');
	const blockConf = require('../lib/user/block/api.json');
	const tagConf = require('../lib/user/tag/api.json');
	const onlineConf = require('../lib/user/online-status/api.json');

	describe('register', () => {
		let conf = config.register;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.portrait
			};
			return User.register(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largePortraitUri,
				name: user.name,
				portrait: user.portrait
			};
			return User.register(user).then(result => {
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('id 为空', () => {
			let user = _golbal.user;
			return User.register({
				name: user.name,
				portrait: user.portrait
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('name 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.largeName,
				portrait: user.portraitUri
			};
			return User.register(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('portrait 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.largePortraitUri
			};
			return User.register(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('update', () => {
		let conf = config.update;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.portrait
			};
			return User.update(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largePortraitUri,
				name: user.name,
				portrait: user.portrait
			};
			return User.update(user).then(result => {
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('id 为空', () => {
			let user = _golbal.user;
			return User.update({
				name: user.name,
				portrait: user.portrait
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('name 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.largeName,
				portrait: user.portraitUri
			};
			return User.update(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('portrait 超长', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				name: user.name,
				portrait: user.largePortraitUri
			};
			return User.update(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Blacklist.add', () => {
		let conf = blackConf.add;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				blacklist: user.blacklist
			};
			return UserBlacklist.add(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largePortraitUri,
				blacklist: []
			};
			return UserBlacklist.add(user).then(result => {
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				blacklist: user.blacklist
			};
			return UserBlacklist.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('blacklist 不是数组', () => {
			let user = _golbal.user;
			user = {
				blacklist: user.blacklist
			};
			return UserBlacklist.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Blacklist.remove', () => {
		let conf = blackConf.remove;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				blacklist: user.blacklist
			};
			return UserBlacklist.remove(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});


		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				blacklist: []
			};
			return UserBlacklist.remove(user).then(result => {
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				blacklist: user.blacklist
			};
			return UserBlacklist.remove(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('blacklist 不是数组', () => {
			let user = _golbal.user;
			user = {
				blacklist: user.blacklist
			};
			return UserBlacklist.remove(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Blacklist.getList', () => {
		let conf = blackConf.getList;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserBlacklist.getList(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: []
			};
			return UserBlacklist.getList(user).then(result => {
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				blacklist: user.blacklist
			};
			return UserBlacklist.getList(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Block.add', () => {
		let conf = blockConf.add;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				minute: user.minute
			};
			return UserBlock.add(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largeName,
				minute: user.minute
			};
			return UserBlock.add(user).then(result => {
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('minute is too long', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				minute: user.largeMinute
			};
			return UserBlock.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('userId 无效', () => {
			let user = _golbal.user;
			user = {
				minute: _golbal.minute
			};
			return UserBlock.add(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Block.getList', () => {
		let conf = blockConf.getList;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserBlock.getList(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Block.remove', () => {
		let conf = blockConf.remove;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserBlock.remove(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});


		it('Fail', () => {
			let user = _golbal.user;
			user = {
				id: user.largeId
			};
			return UserBlock.remove(user).then(result => {
				expect(Number(result.code)).not.toEqual(Number(success));
			});
		});

		it('userId 无效', () => {
			let user = {};
			return UserBlock.remove(user).then(result => {
				expect(result).toBeUndefined();
			}, error => {
				expect(error).not.toBeUndefined();
			});
		});
	});

	describe('Tag.set', () => {
		let conf = tagConf.set;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id,
				tags: user.tags
			};
			return UserTag.set(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Tags is emtpy', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserTag.set(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
	describe('Tag.remove', () => {
		let conf = tagConf.remove;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			user = {
				id: user.id
			};
			return UserTag.remove(user).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('UserId is emtpy', () => {
			let user = {};
			return UserTag.remove(user).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
	describe('Tag.batchSet', () => {
		let conf = tagConf.batchSet;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			let params = {
				users: [{
					id: user.id
				}],
				tags: user.tags
			};
			return UserTag.batchSet(params).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Tags is emtpy', () => {
			let user = _golbal.user;
			let params = {
				users: [{
					id: user.id
				}]
			};
			return UserTag.batchSet(params).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
	describe('Tag.batchRemove', () => {
		let conf = tagConf.batchRemove;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			let params = {
				users: [{
					id: user.id
				}]
			};
			return UserTag.batchRemove(params).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Users is emtpy', () => {
			let user = _golbal.user;
			let params = {
			};
			return UserTag.batchRemove(params).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
	describe('Tag.getList', () => {
		let conf = tagConf.getList;
		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let user = _golbal.user;
			let users = [{
				id: user.id
			}]
			return UserTag.getList(users).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});

		it('Users is emtpy', () => {
			let users;
			return UserTag.getList(users).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});
	});
});
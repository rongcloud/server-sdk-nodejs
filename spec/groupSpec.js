"use strict";
describe('Group', () => {
	let _golbal, Group, GroupGag, GroupMuteMember, GroupMuteAll, GroupMuteWhiteList;
	beforeAll(function () {
		_golbal = this;
		Group = _golbal.rongSDK.Group;
		GroupGag = Group.Gag;
		GroupMuteMember = Group.Mute.Member;
		GroupMuteAll = Group.Mute.All;
		GroupMuteWhiteList = Group.Mute.Whitelist;
	});

	const config = require('../lib/group/api.json');
	const gagConf = require('../lib/group/gag/api.json');
	const muteMemberConf = require('../lib/group/mute-member/api.json');
	const muteAllConf = require('../lib/group/mute-all-member/api.json');
	const muteWHConf = require('../lib/group/mute-whitelist/api.json');
	describe('Sync', () => {
		let conf = config.sync;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group;
			return Group.sync({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('同步群组', () => {
			let group = _golbal.group;
			return Group.sync(group.sync).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Create', () => {
		let conf = config.create;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.create;
			return Group.create({
				id: group.id,
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.create;
			return Group.create({
				id: group.id,
				name: group.name,
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group;
			return Group.create(group.create).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Join', () => {
		let conf = config.join;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.join;
			return Group.join({
				id: group.id,
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.join;
			return Group.join({
				id: group.id,
				name: group.name,
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.join;
			return Group.join(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Quit', () => {
		let conf = config.quit;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.quit;
			return Group.quit({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.quit;
			return Group.quit({
				id: group.id,
				name: group.name,
				member: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.quit;
			return Group.quit(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('Dismiss', () => {
		let conf = config.dismiss;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.dismiss;
			return Group.dismiss({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.group.dismiss;
			return Group.dismiss({
				id: group.id,
				member: {}
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.dismiss;
			return Group.dismiss(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('update', () => {
		let conf = config.update;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.update;
			return Group.update({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.update;
			return Group.update(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('get', () => {
		let conf = config.get;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			let group = _golbal.group.get;
			return Group.get({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.group.get;
			return Group.get(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupGag.add', () => {
		let conf = gagConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupGag.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.groupGag.add;
			return GroupGag.add({
				id: group.id,
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupGag.add;
			return GroupGag.add(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupGag.remove', () => {
		let conf = gagConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupGag.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Fail', () => {
			let group = _golbal.groupGag.remove;
			return GroupGag.remove({
				id: group.id,
				members: []
			}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupGag.remove;
			return GroupGag.remove(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupGag.getList', () => {
		let conf = gagConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupGag.getList({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupGag.getList;
			return GroupGag.getList(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
	/* Group Mute Memeber Start */
	describe('GroupMuteMember.add', () => {
		let conf = muteMemberConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupMuteMember.add({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Groups exceeded the limit', () => {
			let group = _golbal.groupMuteMember.addLarge;
			return GroupMuteMember.add(group).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupMuteMember.add;
			return GroupMuteMember.add(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupMuteMember.remove', () => {
		let conf = muteMemberConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupMuteMember.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Groups exceeded the limit', () => {
			let group = _golbal.groupMuteMember.removeLarge;
			return GroupMuteMember.remove(group).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupMuteMember.remove;
			return GroupMuteMember.remove(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupMuteMember.getList', () => {
		let conf = muteMemberConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let group = _golbal.groupMuteMember.getList;
			return GroupMuteMember.getList(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
	/* Group Mute Memeber End */

	/* Group Mute All Start */
	describe('GroupMuteAll.add', () => {
		let conf = muteAllConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupMuteAll.add([]).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Groups exceeded the limit', () => {
			let group = _golbal.groupMuteAll.addLarge;
			return GroupMuteAll.add(group).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupMuteAll.add;
			return GroupMuteAll.add(group).then(result => {
				expect(result.code).toEqual(Number(success));
			}).catch(error => console.log(error));
		});
	});

	describe('GroupMuteAll.remove', () => {
		let conf = muteAllConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupMuteAll.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Groups exceeded the limit', () => {
			let group = _golbal.groupMuteAll.removeLarge;
			return GroupMuteAll.remove(group).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupMuteAll.remove;
			return GroupMuteAll.remove(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupMuteAll.getList', () => {
		let conf = muteAllConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('Success', () => {
			let group = _golbal.groupMuteAll.getList;
			return GroupMuteAll.getList(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
	/* Group Mute All End */

	/* Group Mute Whitelist Start */
	describe('GroupMuteWhitelist.add', () => {
		let conf = muteWHConf.add;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupMuteWhiteList.add([]).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupMuteWhitelist.add;
			return GroupMuteWhiteList.add(group).then(result => {
				expect(result.code).toEqual(Number(success));
			}).catch(error => console.log(error));
		});
	});

	describe('GroupMuteWhitelist.remove', () => {
		let conf = muteWHConf.remove;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupMuteWhiteList.remove({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupMuteWhitelist.remove;
			return GroupMuteWhiteList.remove(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});

	describe('GroupMuteWhitelist.getList', () => {
		let conf = muteWHConf.getList;

		let response = conf.response;
		let success = response.success.code;

		it('参数无效', () => {
			return GroupMuteWhiteList.getList({}).catch(error => {
				expect(error).not.toBeUndefined();
			});
		});

		it('Success', () => {
			let group = _golbal.groupMuteWhitelist.getList;
			return GroupMuteWhiteList.getList(group).then(result => {
				expect(result.code).toEqual(Number(success));
			});
		});
	});
	/* Group Mute Whitelist End */
});
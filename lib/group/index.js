/*
	参考文档：http://rongcloud.cn/docs/server.html#group
*/
const Gag = require('./gag');

const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../request').request;
const utils = require('../utils');

const _ = utils.underscore;
const logger = utils.logger;

const getError = utils.getError;
const check = utils.check;

let sync = (user) => {
  let conf = config.sync;

  let error = check({
    api: conf,
    model: 'user',
    data: user,
    verify: verify.user
  });
  if (error) {
    return Promise.reject(error);
  }

  let data = _.pick(user, 'id');
  data = utils.rename(data, {
    id: 'userId'
  });
	
  let groupIdTpl = 'group[{{id}}]';
  let groups = user.groups;

  // 数据转换 [{"id": "wer987","name":"greoupName1"}] => {'group[wer987]': greoupName1}
  _.each(groups, (group) => {
    let groupId = utils.tplEngine(groupIdTpl, {
      id: group.id
    });
    data[groupId] = group.name;
  });

  return request({
    url: conf.url,
    data: data
  }).then(result => {
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.sync'
    });
    return error;
  });
};

let create = (group) => {
  let conf = config.create;

  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: verify.group
  });
  if (error) {
    return Promise.reject(error);
  }

  let members = group.members;
  group.members = _.map(members, (member) =>{
    return member.id;
  });
  group = utils.rename(group, {
    id: 'groupId',
    name: 'groupName',
    members: 'userId'
  });

  return request({
    url: conf.url,
    data: group
  }).then(result => {
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.create'
    });
    return error;
  });
};

let join = (group) => {
  let conf = config.join;

  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: _.extend(_.omit(verify.group, 'memberIds', 'name'), verify.member)
  });
  if (error) {
    return Promise.reject(error);
  }

  // member = {id: 'dkal'} 转为 member = 'dkal' 
  let member = group.member;
  _.extend(group, {member: member.id});
	
  group = utils.rename(group, {
    id: 'groupId',
    name: 'groupName',
    member: 'userId'
  });
  return request({
    url: conf.url,
    data: group
  }).then(result => {
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.join'
    });
    return error;
  });	
};

let quit = (group) => {
  let conf = config.quit;

  let groupVerify = verify.group;
  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: _.extend(_.pick(groupVerify, 'id'), verify.member)
  });
  if (error) {
    return Promise.reject(error);
  }

  // member = {id: 'dkaal'} 转为 member = 'dkaal' 
  let member = group.member;
  _.extend(group, {member: member.id});

  group = utils.rename(group, {
    id: 'groupId',
    member: 'userId'
  });
  return request({
    url: conf.url,
    data: group
  }).then(result => {
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.quit'
    });
    return error;
  });
};

let dismiss = (group) => {
  let conf = config.dismiss;

  let groupVerify = verify.group;
  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: _.pick(groupVerify, 'id')
  });
  if (error) {
    return Promise.reject(error);
  }

  // member = {id: 'dkal'} 转为 member = 'dkal' 
  let member = group.member;
  _.extend(group, {member: member.id});
	
  group = utils.rename(group, {
    id: 'groupId',
    member: 'userId'
  });

  return request({
    url: conf.url,
    data: group
  }).then(result => {
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.dismiss'
    });
    return error;
  });
};

let update = (group) => {
  let conf = config.update;

  let groupVerify = verify.group;
  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: _.pick(groupVerify, 'id', 'name')
  });
  if (error) {
    return Promise.reject(error);
  }

  group = utils.rename(group, {
    id: 'groupId',
    name: 'groupName'
  });

  return request({
    url: conf.url,
    data: group
  }).then(result => {
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.update'
    });
    return error;
  });
};

let get = (group) => {
  let conf = config.get;

  let groupVerify = verify.group;
  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: _.pick(groupVerify, 'id')
  });
  if (error) {
    return Promise.reject(error);
  }

  group = utils.rename(group, {
    id: 'groupId'
  });

  return request({
    url: conf.url,
    data: group
  }).then(result => {
    return utils.rename(result.text, {
      users: 'members'
    });
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.get'
    });
    return error;
  });
};

module.exports = {
  Gag: Gag,
  sync: sync,
  create: create,
  join: join,
  quit: quit,
  dismiss: dismiss,
  update: update,
  get: get
};
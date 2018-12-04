/*
	参考文档：http://rongcloud.cn/docs/server.html#group_user_gag
*/
const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let add = (group) => {
  let conf = config.add;

  let gagVerify = _.extend(_.pick(verify.group, 'id', 'memberIds'), {
    minute: verify.minute
  });
  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: gagVerify
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
      pos: 'Group.Gag.add'
    });
    return error;
  });
};

let remove = (group) => {
  let conf = config.remove;

  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: _.pick(verify.group, 'id', 'memberIds')
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
      pos: 'Group.Gag.remove'
    });
    return error;
  });
};

let getList = (group) => {
  let conf = config.getList;

  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: _.pick(verify.group, 'id')
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
    result = utils.rename(result.text, {
      users: 'members'
    });
    let members = result.members || [];
    return _.extend(result, {
      members: _.map(members, (member) => {
        return utils.rename(member, {
          userId: 'id'
        });
      })
    });
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Group.Gag.getList'
    });
    return error;
  });
};

module.exports = {
  add: add,
  remove: remove,
  getList: getList
};
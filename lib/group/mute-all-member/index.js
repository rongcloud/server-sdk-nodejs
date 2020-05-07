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

  let muteVerify = _.extend(_.pick(verify.group, 'groups'));
  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: muteVerify
  });
  if (error) {
    return Promise.reject(error);
  }

  let groupIds = _.map(group.groups, (group) => {
    return group.id;
  });
  return request({
    url: conf.url,
    data: {
      groupId: groupIds
    }
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
      pos: 'Group.MuteAll.add'
    });
    return error;
  });
};

let remove = (group) => {
  let conf = config.remove;

  let muteVerify = _.extend(_.pick(verify.group, 'groups'));
  let error = check({
    api: conf,
    model: 'group',
    data: group,
    verify: muteVerify
  });
  if (error) {
    return Promise.reject(error);
  }

  let groupIds = _.map(group.groups, (group) => {
    return group.id;
  });

  return request({
    url: conf.url,
    data: {
      groupId: groupIds
    }
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
      pos: 'Group.MuteAll.remove'
    });
    return error;
  });
};

let getList = () => {
  let conf = config.getList;
  return request({
    url: conf.url,
    data: {}
  }).then(result => {
    result = utils.rename(result.text, {
      groupinfo: 'groups'
    });
    let groups = result.groups || [];
    return _.extend(result, {
      groups: _.map(groups, (group) => {
        return utils.rename(group, {
          groupId: 'id',
          stat: 'isMuted'
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
      pos: 'Group.MuteAll.getList'
    });
    return error;
  });
};

module.exports = {
  add: add,
  remove: remove,
  getList: getList
};
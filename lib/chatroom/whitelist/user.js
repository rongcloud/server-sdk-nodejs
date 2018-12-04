/*
	参考文档：http://rongcloud.cn/docs/server.html#chatroom_user_whitelist_query
*/
const config = require('./user-api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let add = (chatroom) => {
  let conf = config.add;
  let chrmVerify = _.pick(verify.chatroom, 'id', 'members');
  let error = check({
    api: conf,
    model: 'chatroom',
    data: chatroom,
    verify: chrmVerify
  });

  if (error) {
    return Promise.reject(error);
  }

  // 转换数据格式 members = [{id: 'memberId'}] 转为 members = ['memberId']
  let members = _.map(chatroom.members, (member) => {
    return member.id;
  });
  _.extend(chatroom, {members: members});

  chatroom = utils.rename(chatroom, {
    id: 'chatroomId',
    members: 'userId'
  });

  return request({
    url: conf.url,
    data: chatroom
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
      pos: 'ChatroomUserWhiteList.add'
    });
    return error;
  });
};

let remove = (chatroom) => {
  let conf = config.remove;
  let chrmVerify = _.pick(verify.chatroom, 'id', 'members');
  let error = check({
    api: conf,
    model: 'chatroom',
    data: chatroom,
    verify: chrmVerify
  });

  if (error) {
    return Promise.reject(error);
  }

  // 转换数据格式 members = [{id: 'memberId'}] 转为 members = ['memberId']
  let members = _.map(chatroom.members, (member) => {
    return member.id;
  });
  _.extend(chatroom, {members: members});
	
  chatroom = utils.rename(chatroom, {
    id: 'chatroomId',
    members: 'userId'
  });

  return request({
    url: conf.url,
    data: chatroom
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
      pos: 'ChatroomUserWhiteList.remove'
    });
    return error;
  });
};

let getList = (chatroom) => {
  let conf = config.getList;

  let chrmVerify = _.pick(verify.chatroom, 'id');
  let error = check({
    api: conf,
    model: 'chatroom',
    data: chatroom,
    verify: chrmVerify
  });

  if (error) {
    return Promise.reject(error);
  }

  chatroom = utils.rename(chatroom, {
    id: 'chatroomId'
  });

  return request({
    url: conf.url,
    data: chatroom
  }).then(result => {
    result = utils.rename(result.text, {
      users: 'members'
    });
    let members = result.members || [];
    return _.extend(result, {
      members: _.map(members, (id) => {
        return { id: id };
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
      pos: 'ChatroomUserWhiteList.getList'
    });
    return error;
  });
};

module.exports = {
  add: add,
  remove: remove,
  getList: getList
};

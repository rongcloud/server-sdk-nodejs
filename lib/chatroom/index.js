/*
	参考文档： http://rongcloud.cn/docs/server.html#chatroom
*/
const Block = require('./block');
const Distribute = require('./distribute');
const Ban = require('./ban');
const Gag = require('./gag');
const KeepAlive = require('./keepalive');
const Demotion = require('./demotion');
const Whitelist = require('./whitelist');

const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../request').request;
const utils = require('../utils');

const _ = utils.underscore;
const logger = utils.logger;

const getError = utils.getError;
const check = utils.check;

let create = (chatrooms) => {
  let conf = config.create;
  if (!_.isArray(chatrooms)) {
    chatrooms = [chatrooms];
  }

  let error = null;
  let chrmVerify = _.pick(verify.chatroom, 'id', 'name');
  _.each(chatrooms, (chrm) => {
    error = check({
      api: conf,
      model: 'chatroom',
      data: chrm,
      verify: chrmVerify
    });
  });

  if (error) {
    return Promise.reject(error);
  }

  let data = {}, tpl = 'chatroom[{{id}}]';
  _.each(chatrooms, (chrm) => {
    let chrmId = utils.tplEngine(tpl, {
      id: chrm.id
    });
    data[chrmId] = chrm.name;
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
      pos: 'Chatroom.create'
    });
    return error;
  });
};

let destory = (chatroom) => {
  let conf = config.destory;

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
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Chatroom.destory'
    });
    return error;
  });
};

let get = (chatroom) => {
  let conf = config.get;

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
      pos: 'Chatroom.getMembers'
    });
    return error;
  });
};

let isExist = (chatroom) => {
  let conf = config.isExist;

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
    result = utils.rename(result.text, {
      result: 'members'
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
      pos: 'Chatroom.isExist'
    });
    return error;
  });
};

module.exports = {
  Block: Block,
  Distribute: Distribute,
  Ban: Ban,
  KeepAlive: KeepAlive,
  Gag: Gag,
  Demotion: Demotion,
  Whitelist: Whitelist,
  create: create,
  destory: destory,
  get: get,
  isExist: isExist
};
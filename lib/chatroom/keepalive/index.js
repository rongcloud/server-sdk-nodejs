/*
	参考文档：http://rongcloud.cn/docs/server.html#chatroom_keepalive
*/
const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let add = (chatroom) => {
  let conf = config.add;
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
      pos: 'ChatroomKeepAlive.add'
    });
    return error;
  });
};

let remove = (chatroom) => {
  let conf = config.remove;
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
      pos: 'ChatroomKeepAlive.remove'
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
    return utils.rename(result.text, {
      chatroomIds: 'chatrooms'
    });
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'ChatroomKeepAlive.getList'
    });
    return error;
  });
};

module.exports = {
  add: add,
  remove: remove,
  getList: getList
};
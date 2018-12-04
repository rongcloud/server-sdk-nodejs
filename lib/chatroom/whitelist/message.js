/*
	参考文档：http://rongcloud.cn/docs/server.html#chatroom_whitelist_query
*/
const config = require('./message-api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

//ChatroomMessageWhiteList
let add = (chatroom) => {
  let conf = config.add;

  let error = check({
    api: conf,
    model: 'chatroom',
    data: chatroom,
    verify: verify.demotion
  });

  if (error) {
    return Promise.reject(error);
  }

  chatroom = utils.rename(chatroom, {
    msgs: 'objectnames'
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

  let error = check({
    api: conf,
    model: 'chatroom',
    data: chatroom,
    verify: verify.demotion
  });

  if (error) {
    return Promise.reject(error);
  }

  chatroom = utils.rename(chatroom, {
    msgs: 'objectnames'
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
      pos: 'ChatroomUserWhiteList.reomve'
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
      whitlistMsgType: 'objectNames'
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

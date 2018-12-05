/*
	参考文档：http://rongcloud.cn/docs/server.html#chatroom_message
*/

const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let resume = (chatroom) => {
  let conf = config.resume;
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
      pos: 'ChatroomDistribute.resume'
    });
    return error;
  });
};

let stop = (chatroom) => {
  let conf = config.stop;
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
      pos: 'ChatroomDistribute.stop'
    });
    return error;
  });
};

module.exports = {
  resume: resume,
  stop: stop
};
/*
	参考文档： http://rongcloud.cn/docs/server.html#conversation_notification_set
*/
const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../request').request;
const utils = require('../utils');

const _ = utils.underscore;
const logger = utils.logger;

const Conversation = require('../conversation-type').Conversation;

const getError = utils.getError;
const check = utils.check;

let mute = (conversation) => {
  let conf = config.mute;
  let error = check({
    api: conf,
    model: 'conversation',
    data: conversation,
    verify: verify.conversation
  });

  if (error) {
    return Promise.reject(error);
  }

  // 转换会话类型 e.g. PRIVATE =>  1 && 设置免打扰标识
  let type = conversation.type;
  type = Conversation[type];
  conversation = _.extend(_.omit(conversation, 'type'), {type: type, isMuted: 1});

  conversation = utils.rename(conversation, {
    type: 'conversationType',
    userId: 'requestId'
  });

  return request({
    url: conf.url,
    data: conversation
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
      pos: 'Conversation.mute'
    });
    return error;
  });
};

let unmute = (conversation) => {
  let conf = config.unmute;
  let error = check({
    api: conf,
    model: 'conversation',
    data: conversation,
    verify: verify.conversation
  });

  if (error) {
    return Promise.reject(error);
  }

  // 转换会话类型 e.g. PRIVATE =>  1 && 设置免打扰标识
  let type = conversation.type;
  type = Conversation[type];
  conversation = _.extend(_.omit(conversation, 'type'), {type: type, isMuted: 0});

  conversation = utils.rename(conversation, {
    type: 'conversationType',
    userId: 'requestId'
  });

  return request({
    url: conf.url,
    data: conversation
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
      pos: 'Conversation.unmute'
    });
    return error;
  });
};

module.exports = {
  mute: mute,
  unmute: unmute
};
const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const logger = utils.logger;

const Conversation = require('../../conversation-type').Conversation

const getError = utils.getError;
const check = utils.check;

let send = (message) => {
  let conf = config.send;

  let content = message.content;
  if (_.isObject(content)) {
    message.content = JSON.stringify(content);
  }

  let error = check({
    api: conf,
    model: 'message',
    data: message,
    verify: verify.message
  });
  if (error) {
    return Promise.reject(error);
  }

  message = utils.rename(message, {
    senderId: 'fromUserId',
    targetId: 'toUserId'
  });

  return request({
    url: conf.url,
    data: message
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
      pos: 'message.Private.send'
    });
    return error;
  });
};

let sendTemplate = (message) => {
  let conf = config.sendTemplate;

  let error = check({
    api: conf,
    model: 'message',
    data: message,
    verify: verify.tplMsg
  });
  if (error) {
    return Promise.reject(error);
  }

  message = utils.rename(message, {
    senderId: 'fromUserId'
  });

  let _msg = _.pick(message, 'fromUserId', 'objectName');

  let content = message.content;

  let toUserIds = [], values = [], pushContent = [], pushData = [];
  _.each(content, (item, userId) => {
    toUserIds.push(userId);
    values.push(item.data);
    pushContent.push(item.push);
    pushData.push(item.pushData);
  });

  _.extend(_msg, {
    content: JSON.stringify(message.template),
    toUserId: toUserIds,
    values: values,
    pushContent: pushContent,
    pushData: pushData
  });

  return request({
    url: conf.url,
    data: _msg,
    submitType: 'json'
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
      pos: 'message.Private.sendTemplate'
    });
    return error;
  });
};

let recall = (message) => {
  let conf = config.recall;

  let error = check({
    api: conf,
    model: 'message',
    data: message,
    verify: verify.recallMsg
  });

  if (error) {
    return Promise.reject(error);
  }

  message.type = Conversation.PRIVATE;

  message = utils.rename(message, {
    senderId: 'fromUserId',
    type: 'conversationType',
    uId: 'messageUID'
  });

  return request({
    url: conf.url,
    data: message
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
      pos: 'message.Private.recall'
    });
    return error;
  });
};

module.exports = {
  send: send,
  sendTemplate: sendTemplate,
  recall: recall
};

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
    targetId: 'toDiscussionId'
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
      pos: 'message.Discussion.send'
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

  message.type = Conversation.DISCUSSION;

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
      pos: 'message.Discussion.recall'
    });
    return error;
  });
};

module.exports = {
  send: send,
  recall: recall
};

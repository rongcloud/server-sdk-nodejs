const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const logger = utils.logger;

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
    targetId: 'toChatroomId'
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
      pos: 'message.Chatrrom.send'
    });
    return error;
  });
};

let broadcast = (message) => {
  let conf = config.broadcast;
  message.content = JSON.stringify(message.content);

  let error = check({
    api: conf,
    model: 'message',
    data: message,
    verify: _.omit(verify.broadcast, 'targetId')
  });
  if (error) {
    return Promise.reject(error);
  }

  message = utils.rename(message, {
    senderId: 'fromUserId'
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
      pos: 'message.Chatrrom.broadcast'
    });
    return error;
  });
};

module.exports = {
  send: send,
  broadcast: broadcast
};

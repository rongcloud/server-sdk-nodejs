const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../request').request;
const utils = require('../utils');

const rename = utils.rename;
const logger = utils.logger;

const getError = utils.getError;
const check = utils.check;

let push = (content) => {
  let conf = config.push;
  let error = check({
    api: conf,
    model: 'content',
    data: content,
    verify: verify.content
  });

  if (error) {
    return Promise.reject(error);
  }

  return request({
    url: conf.url,
    data: content,
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
      pos: 'Push.push'
    });
    return error;
  });
};

let message = (content) => {
  let conf = config.message;
  let error = check({
    api: conf,
    model: 'content',
    data: content,
    verify: verify.content
  });

  if (error) {
    return Promise.reject(error);
  }

  content = rename(content, {
    fromUserId: 'fromuserid'
  });
  return request({
    url: conf.url,
    data: content,
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
      pos: 'Push.message'
    });
    return error;
  });
};

module.exports = {
  push: push,
  message: message
};
const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let get = (message) => {
  let conf = config.get;

  let error = check({
    api: conf,
    model: 'message',
    data: message,
    verify: verify.message
  });
  if (error) {
    return Promise.reject(error);
  }

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
      pos: 'HistoryMessage.get'
    });
    return error;
  });
};

let remove = (message) => {
  let conf = config.remove;

  let error = check({
    api: conf,
    model: 'message',
    data: message,
    verify: verify.message
  });
  if (error) {
    return Promise.reject(error);
  }

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
      pos: 'HistoryMessage.remove'
    });
    return error;
  });
};

module.exports = {
  get: get,
  remove: remove
};
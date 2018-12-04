const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const rename = utils.rename;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let add = (user) => {
  let conf = config.add;

  let error = check({
    api: conf,
    model: 'user',
    data: user,
    verify: _.pick(verify.user, 'id', 'minute')
  });

  if (error) {
    return Promise.reject(error);
  }

  user = rename(user, {
    id: 'userId'
  });

  return request({
    url: conf.url,
    data: user
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
      pos: 'add'
    });
    return error;
  });
};

let remove = (user) => {
  let conf = config.remove;

  let error = check({
    api: conf,
    model: 'user',
    data: user,
    verify: {
      id: verify.user.id
    }
  });

  if (error) {
    return Promise.reject(error);
  }

  user = rename(user, {
    id: 'userId'
  });

  return request({
    url: conf.url,
    data: user
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
      pos: 'add'
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
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'getList'
    });
    return error;
  });
};

module.exports = {
  add: add,
  remove: remove,
  getList: getList
};
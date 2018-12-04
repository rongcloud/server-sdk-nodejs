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
    verify: verify.user
  });

  if (error) {
    return Promise.reject(error);
  }

  let blacklist = _.map(user.blacklist, (user) => {
    return user.id;
  });
  _.extend(user, {blacklist: blacklist});

  user = rename(user, {
    id: 'userId',
    blacklist: 'blackUserId',
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
    verify: verify.user
  });

  if (error) {
    return Promise.reject(error);
  }

  let blacklist = _.map(user.blacklist, (user) => {
    return user.id;
  });
  _.extend(user, {blacklist: blacklist});
	
  user = rename(user, {
    id: 'userId',
    blacklist: 'blackUserId',
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
      pos: 'remove'
    });
    return error;
  });
};

let getList = (user) => {
  let conf = config.getList;

  let error = check({
    api: conf,
    model: 'user',
    data: user,
    verify: verify.user
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
    result = result.text;
    result.users = _.map(result.users, (id) => {
      return {id: id};
    });
    return result;
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
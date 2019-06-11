const Blacklist = require('./blacklist');
const Block = require('./block');
const Tag = require('./tag');

const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../request').request;
const utils = require('../utils');

const rename = utils.rename;
const logger = utils.logger;

const getError = utils.getError;
const check = utils.check;

let register = (user) => {
  let conf = config.register;
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
    id: 'userId',
    portrait: 'portraitUri'
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
      pos: 'User.register'
    });
    return error;
  });
};

let update = (user) => {
  let conf = config.update;
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
    id: 'userId',
    portrait: 'portraitUri'
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
      pos: 'User.update'
    });
    return error;
  });
};

module.exports = {
  Block: Block,
  Blacklist: Blacklist,
  Tag: Tag,
  register: register,
  update: update
};
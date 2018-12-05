const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const rename = utils.rename;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let get = (user) => {
  let conf = config.get;
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
    return result.text;
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'OnlineStatus.get'
    });
    return error;
  });
};

module.exports = {
  get: get
};
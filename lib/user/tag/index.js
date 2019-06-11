const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const _ = utils.underscore;
const rename = utils.rename;
const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let set = (user) => {
  let conf = config.set;

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
    data: user,
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
      pos: 'Tag.set'
    });
    return error;
  });
};

let remove = (user) => {
  let conf = config.set;

  let error = check({
    api: conf,
    model: 'user',
    data: user,
    verify: _.pick(verify.user, 'id')
  });

  if (error) {
    return Promise.reject(error);
  }

  user = rename(user, {
    id: 'userId'
  });

  user = _.extend(user, {
    tags: []
  });
  return request({
    url: conf.url,
    data: user,
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
      pos: 'Tag.remove'
    });
    return error;
  });
};

let batchSet = (user) => {
  let conf = config.batchSet;
  let error = check({
    api: conf,
    model: 'user',
    data: user,
    verify: verify.user
  });

  if (error) {
    return Promise.reject(error);
  }

  let userIds = _.map(user.users, (user) => {
    return user.id;
  });
  let data = {
    userIds: userIds,
    tags: user.tags
  };
  return request({
    url: conf.url,
    data: data,
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
      pos: 'Tag.batchSet'
    });
    return error;
  });
};

let batchRemove = (user) => {
  let conf = config.batchRemove;
  let error = check({
    api: conf,
    model: 'user',
    data: user,
    verify: verify.user
  });

  if (error) {
    return Promise.reject(error);
  }

  let userIds = _.map(user.users, (user) => {
    return user.id;
  });
  let data = {
    userIds: userIds,
    tags: []
  };
  return request({
    url: conf.url,
    data: data,
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
      pos: 'Tag.batchRemove'
    });
    return error;
  });
};

let getList = (users) => {
  let conf = config.getList;
  users = users || {};
  if (!_.isArray(users)) {
    users = [users];
  }

  let error = null;
  let userVerify = verify.user;
  _.each(users, (_user) => {
    let _error = check({
      api: conf,
      model: 'user',
      data: _user,
      verify: _.pick(userVerify, 'id')
    });
    if(_.isNull(error)){
      error = _error;
    }
  });
  if (error) {
    return Promise.reject(error);
  }

  let userIds = _.map(users, (user) => {
    return user.id;
  });
  let data = {
    userIds: userIds
  };

  return request({
    url: conf.url,
    data: data
  }).then(result => {
    return rename(result.text, {
      result: 'tags'
    });
  }).catch(error => {
    error = getError({
      code: error,
      errors: conf.response.fail
    });
    logger.log({
      content: error,
      level: 'error',
      pos: 'Tag.getList'
    });
    return error;
  });
};

module.exports = {
  set: set,
  remove: remove,
  batchSet: batchSet,
  batchRemove: batchRemove,
  getList: getList
};
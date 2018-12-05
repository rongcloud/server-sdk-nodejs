const config = require('./api.json');
const verify = require('./verify.json');

const request = require('../request').request;
const utils = require('../utils');

const logger = utils.logger;

const getError = utils.getError;
const check = utils.check;

/*
	参考文档: http://rongcloud.cn/docs/server.html#sensitiveword
*/

let add = (rule) => {
  let conf = config.add;
  rule.replace = rule.replace || '';
  let error = check({
    api: conf,
    model: 'rule',
    data: rule,
    verify: verify.rule
  });
  if (error) {
    return Promise.reject(error);
  }

  rule = utils.rename(rule, {
    keyword: 'word',
    replace: 'replaceWord'
  });
	
  // 敏感词屏蔽
  if (rule.type === 1) {
    delete rule.type
    delete rule.replaceWord
  }

  return request({
    url: conf.url,
    data: rule
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
      pos: 'sensitive.add'
    });
    return error;
  });
};

let remove = (sensitive) => {
  let conf = config.remove;
  let error = check({
    api: conf,
    model: 'sensitive',
    data: sensitive,
    verify: verify.sensitive
  });
  if (error) {
    return Promise.reject(error);
  }

  sensitive = utils.rename(sensitive, {
    keywords: 'words'
  });

  return request({
    url: conf.url,
    data: sensitive
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
      pos: 'sensitive.remove'
    });
    return error;
  });
};

let getList = (sensitive) => {
  sensitive = sensitive || {type: 2};

  let conf = config.getList;
  let type = sensitive.type;

  return request({
    url: conf.url,
    data: {
      type: type
    }
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
      pos: 'sensitive.getList'
    });
    return error;
  });
};

module.exports = {
  add: add,
  remove: remove,
  getList: getList
};
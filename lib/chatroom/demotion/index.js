/*
  参考文档：http://rongcloud.cn/docs/server.html#chatroom_message_priority_add
*/
const config = require('./api.json');
const verify = require('../verify.json');

const request = require('../../request').request;
const utils = require('../../utils');

const logger = utils.logger;
const getError = utils.getError;

const check = utils.check;

let add = (demotion) => {
  let conf = config.add;
  let error = check({
    api: conf,
    model: 'demotion',
    data: demotion,
    verify: verify.demotion
  });
  if (error) {
    return Promise.reject(error);
  }
  demotion = utils.rename(demotion, {
    msgs: 'objectName'
  });
  return request({
    url: conf.url,
    data: demotion
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
      pos: 'ChatroomDemotion.add'
    });
    return error;
  });
};

let remove = (demotion) => {
  let conf = config.remove;
  let error = check({
    api: conf,
    model: 'demotion',
    data: demotion,
    verify: verify.demotion
  });
  if (error) {
    return Promise.reject(error);
  }
  demotion = utils.rename(demotion, {
    msgs: 'objectName'
  });
  return request({
    url: conf.url,
    data: demotion
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
      pos: 'ChatroomDemotion.remove'
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
      pos: 'ChatroomDemotion.getList'
    });
    return error;
  });
};

module.exports = {
  add: add,
  remove: remove,
  getList: getList
};
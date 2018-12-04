const superagent = require('superagent');
const utils = require('./utils');
const _ = utils.underscore;
const tplEngine = utils.tplEngine;
const sha1 = utils.sha1;

let config = {
  appkey: '',
  secret: '',
  format: 'json',
  api: 'http://api.cn.ronghub.com',
  sms: 'http://api.sms.ronghub.com'
};

let headers = {
  Nonce: parseInt(Math.random() * 0xffffff),
  Timestamp: Date.parse(new Date()) / 1000,
  Signature: ''
};

let urlTpl = '{{domain}}/{{url}}.{{format}}';
/*
  let params = {
    domainType: 'api' | 'sms',
    data: {},
    submitType: 'form',
    success: function(result){},
    error: function(error){}
  };

*/
let request = (_params) => {
  let params = {
    domainType: 'api',
    url: '',
    data: {},
    submitType: 'form'
  };

  _.extend(params, _params);

  let data = params.data;
  let arrayData = [];
  let tpl = '{{key}}={{value}}';
  
  let submitType = params.submitType;
  let isForm = (submitType === 'form');
  if (isForm) {
    _.each(data, (val, prop) => {
      if (_.isArray(val)) {
        _.each(val, (propVal) => {
          arrayData.push(tplEngine(tpl, {
            key: encodeURIComponent(prop),
            value: encodeURIComponent(propVal)
          }));
        });
        delete data[prop];
      }
    });
  }
  params.domain = config[params.domainType];
  params.format = config.format;
  let url = tplEngine(urlTpl, params);
  let agent = superagent
    .post(url)
    .set(headers)
    .type(submitType);

  if (isForm) {
    _.each(arrayData, (_data) => {
      agent = agent.send(_data);
    });

    if (!_.isEmpty(data)) {
      _.each(data, (v, k) => {
        agent = agent.send(tplEngine(tpl, {
          key: encodeURIComponent(k),
          value: encodeURIComponent(v)
        }));
      });
    }

  }

  let isJSON = (submitType === 'json');
  if (isJSON) {
    agent = agent.send(data);
  }
  return agent.then((result) =>{
    let text = result.text;
    if (text) {
      result.text = JSON.parse(text);
    }
    return result;
  });
};

let init = (_config) => {
  _.extend(config, _config);
  headers['App-Key'] = config.appkey;
  headers.secret = config.secret;
  let signTpl = '{{secret}}{{Nonce}}{{Timestamp}}';
  let singature = tplEngine(signTpl, headers);
  headers.Signature = sha1(singature);
  delete headers.secret;
};

module.exports = {
  init: init,
  request: request
};
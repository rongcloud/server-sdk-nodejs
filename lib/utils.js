const crypto = require('crypto');
const _ = require('underscore');

let sha1 = (input) => {
  let shasum = crypto.createHash('sha1');
  shasum.update(input);
  return shasum.digest('hex');
};

let tplEngine = (temp, data, regexp) => {
  if (!(Object.prototype.toString.call(data) === '[object Array]')) {
    data = [data];
  }
  let ret = [];
  let replaceAction = (object) => {
    return temp.replace(regexp || (/{{([^}]+)}}/g), function(match, name) {
      if (match.charAt(0) === '\\') {
        return match.slice(1);
      }
      return (object[name] !== undefined) ? object[name] : '{{' + name + '}}';
    });
  };
  for (let i = 0, j = data.length; i < j; i++) {
    ret.push(replaceAction(data[i]));
  }
  return ret.join('');
};
/*
	params.val,
	params.minLen
	params.maxLen
*/
let isLength = (params) => {
  let val = params.val;
  let min = params.min || 0;
  let len = val.length || val;
  let max = params.max;
  let isLen = false;
  if (len < min) {
    isLen = true;
  }
  if (len > max) {
    isLen = true;
  }
  return isLen;
}

let isIllegalUrl = () => {
};

let rename = (obj, newNames) => {
  return _.reduce(newNames, function(memo, val, index) {
    memo[val] = obj[index];
    return memo;
  }, _.omit(obj, _.keys(newNames)));
};

let getError = (params) => {
  let code = params.code;
  let errorInfo = {};
  if (typeof code === 'object') {
    let response = code.response || {text: JSON.stringify({errorMessage: code, code: ''})};
    errorInfo = JSON.parse(response.text);
    errorInfo = rename(errorInfo, {'errorMessage': 'msg'});
    code = errorInfo.code;
  }
  let errors = params.errors;
  let info = params.info || {};

  let error = errors[code];
  if (!error) {
    error = errorInfo;
  }
  error.msg = code ? tplEngine(error.msg, info) : errorInfo.msg;
  return error;
};

let checkLength = (params) => {
  let proto = params.proto;
  let verify = params.verify[proto].length;
  let val = params.val;
  let errors = params.response;

  let isLen = isLength({
    max: verify.max,
    min: verify.min,
    val: val
  });

  let error = null;
  if (isLen) {
    error = getError({
      code: verify.invalid, 
      errors: errors,
      info: {
        name: proto,
        max: verify.max,
        min: verify.min,
        len: val.length
      }
    });
  }
  return error;
};

let checkRequire = (params) => {
  let error = null;

  let proto = params.proto;
  let verify = params.verify[proto].require;
  let val = params.val;
  let errors = params.response;

  let isIllegal = (_.isUndefined(val) || _.isNull(val));
  if (isIllegal) {
    error = getError({
      code: verify.invalid, 
      errors: errors,
      info: {
        name: proto
      }
    });
  }
  return error;
};

let getType = (type) => {
  return type.replace(/(\[\\w+ )/, '').replace('\\]', '');
};

let checkTypeof = (params) => {
  let error = null;
  let proto = params.proto;
  let verify = params.verify[proto].typeof;
  let val = params.val;
  let errors = params.response;

  let type = Object.prototype.toString.call(val);
  type = type.toLocaleLowerCase();
  let verifyType = tplEngine('[object {{type}}]', {
    type: verify.type
  });
  if (type !== verifyType) {
    error = getError({
      code: verify.invalid, 
      errors: errors,
      info: {
        currentType: getType(type),
        name: proto,
        type: getType(verifyType)
      }
    });
  }
  return error;
};

let checkSize = (params) => {
  let error = null;
	
  let proto = params.proto;
  let verify = params.verify[proto].size;
  let size = params.val;
  let errors = params.response;

  let isIllegal = (size < verify.min || size > verify.max);
  if (isIllegal) {
    error = getError({
      code: verify.invalid, 
      errors: errors,
      info: {
        size: size				
      }
    });
  }

  return error;
};
/*
  实现思路：
  1、遍历 API 中 params 参数，在 verify 中获取校验规则，按照规则调用 checkMap 
  2、checkMap 检测到不合法立即返回
  3、接受 check 返回的 error ，无异常继续，有异常返回
*/
let check = (params) => {
  let error = null;

  let model = params.model;

  let api = params.api;
  let errors = api.response.fail;
  let dataModel = api.params[model];
  let data = params.data || {};
  let verify = params.verify;
  let checkMap = {
    length: (params) => {
      return checkLength(params);
    },
    require: (params) => {
      return checkRequire(params);
    },
    typeof: (params) => {
      return checkTypeof(params);
    },
    size: (params) => {
      return checkSize(params);
    }
  };
  /*
  e.g.
  let dataModel = {
    id: '',
    name: '',
    portrait: ''
  }
  let verify = {
    id: {
      require: {
        must: true,
        invalid: "20005"
      },
      length: {
        max: 32,
        min: 1,
        invalid: "20003"
      }
    }
  };
	*/
  let isBreak = false;
  for(let proto in dataModel){
    if (isBreak) {
      break;
    }
    let protoVerify = verify[proto];
    if (protoVerify) {
      for(let rule in protoVerify){
        let ruleFun = checkMap[rule];
        error = ruleFun({
          verify: verify,
          proto: proto,
          val: data[proto],
          response: errors
        });
        if (error) {
          isBreak = true;
          break;
        }
      }
    }
  }
  return error;
};

let logger = {
  log: () => {}
};

module.exports = {
  underscore: _,
  sha1: sha1,
  tplEngine: tplEngine,
  isLength: isLength,
  rename: rename,
  getError: getError,
  check: check,
  logger: logger,
  isIllegalUrl: isIllegalUrl
};
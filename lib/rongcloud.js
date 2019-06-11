const request = require('./request');
const User = require('./user');
const Sensitive = require('./sensitive');
const Message = require('./message');
const Group = require('./group');
const Conversation = require('./conversation');
const Chatroom = require('./chatroom');
const Push = require('./push');

let modules = {
  User: User,
  Sensitive: Sensitive,
  Message: Message,
  Group: Group,
  Conversation: Conversation,
  Chatroom: Chatroom,
  Push: Push
};

module.exports = function (params) {
  request.init(params);
  return modules;
};
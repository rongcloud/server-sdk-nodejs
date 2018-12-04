module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2015,
    "sourceType": "module"
  },
  "rules": {
    "quotes": [2, "single"],
    "no-alert": "error",
    "no-irregular-whitespace": "error",
    "eqeqeq": "warn",
    "key-spacing": "error",
    "no-dupe-keys": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
    "no-control-regex": "warn",
    "no-use-before-define": "error",
    "no-restricted-globals": "warn",
    "indent": ["error", 2],
    "max-nested-callbacks": ["error", { "max": 3 }],
    "no-underscore-dangle": ["warn", { "allow": ["_msg"] }]
  }
};
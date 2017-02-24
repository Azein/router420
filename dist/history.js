'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationPush = exports.locationReplace = exports.browserHistory = undefined;

var _history = require('history');

var browserHistory = exports.browserHistory = (0, _history.createBrowserHistory)();
console.info(browserHistory);

var locationReplace = exports.locationReplace = function locationReplace(location) {
  browserHistory.replace(location);
};

var locationPush = exports.locationPush = function locationPush(location) {
  browserHistory.push(location);
};
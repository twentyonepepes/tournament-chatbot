"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commandToStream = void 0;

var _rxjs = require("rxjs");

var commandToStream = function commandToStream(command$) {
  return function (commandName) {
    var subject$ = new _rxjs.Subject();
    command$.subscribe(function (_ref) {
      var username = _ref.username,
          words = _ref.words,
          command = _ref.command,
          displayname = _ref.displayname;

      if (commandName === command) {
        subject$.next({
          username: username,
          words: words,
          displayname: displayname
        });
      }
    });
    return subject$;
  };
};

exports.commandToStream = commandToStream;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _teamCommandHandlers = require("../handlers/team-command-handlers");

var _handlers = require("../handlers");

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var a, b;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _teamCommandHandlers.handleTeamCommand)({
            words: ["TORLES"]
          });

        case 2:
          a = _context.sent;
          console.log(a);
          _context.next = 6;
          return (0, _handlers.handleFightSubmitRequest)({
            displayname: "A",
            username: "B"
          });

        case 6:
          b = _context.sent;
          console.log(b); // const b = await handleFi

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();
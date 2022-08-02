"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTournamentData = getTournamentData;
exports.submitTournamentEntrant = submitTournamentEntrant;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = require("axios");

function getTournamentData() {
  return _getTournamentData.apply(this, arguments);
}

function _getTournamentData() {
  _getTournamentData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$get, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios.get)("http://127.0.0.1:7108/tournament");

          case 2:
            _yield$get = _context.sent;
            data = _yield$get.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getTournamentData.apply(this, arguments);
}

function submitTournamentEntrant(_x) {
  return _submitTournamentEntrant.apply(this, arguments);
}

function _submitTournamentEntrant() {
  _submitTournamentEntrant = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(submission) {
    var _yield$post, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios.post)("http://127.0.0.1:7108/tournament/entrants/submit", {
              submission: submission
            });

          case 2:
            _yield$post = _context2.sent;
            data = _yield$post.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _submitTournamentEntrant.apply(this, arguments);
}
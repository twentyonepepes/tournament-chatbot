"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMatchupClusterResultEvent = handleMatchupClusterResultEvent;
exports.handleMatchupClusterStartEvent = handleMatchupClusterStartEvent;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function handleMatchupClusterStartEvent(_x) {
  return _handleMatchupClusterStartEvent.apply(this, arguments);
}

function _handleMatchupClusterStartEvent() {
  _handleMatchupClusterStartEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(matchupCluster) {
    var left, right;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            left = matchupCluster.left, right = matchupCluster.right;
            return _context.abrupt("return", {
              message: "The next two teams will now enter the ring. ".concat(left, " vs ").concat(right, ". Good luck!")
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleMatchupClusterStartEvent.apply(this, arguments);
}

function handleMatchupClusterResultEvent(_x2) {
  return _handleMatchupClusterResultEvent.apply(this, arguments);
}

function _handleMatchupClusterResultEvent() {
  _handleMatchupClusterResultEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(result) {
    var winner, matchupCluster, left, right;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            winner = result.winner, matchupCluster = result.matchupCluster;
            left = matchupCluster.left, right = matchupCluster.right;
            return _context2.abrupt("return", {
              message: "The matchup between ".concat(left, " and ").concat(right, " is over: ").concat(winner, " is the winner!")
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _handleMatchupClusterResultEvent.apply(this, arguments);
}
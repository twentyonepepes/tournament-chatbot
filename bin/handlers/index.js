"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFightResultEvent = handleFightResultEvent;
exports.handleFightStartEvent = handleFightStartEvent;
exports.handleFightSubmitRequest = handleFightSubmitRequest;
exports.handleTournamentResultEvent = handleTournamentResultEvent;
exports.handleTournamentStartEvent = handleTournamentStartEvent;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _network = require("../network");

function handleFightStartEvent(_x) {
  return _handleFightStartEvent.apply(this, arguments);
}

function _handleFightStartEvent() {
  _handleFightStartEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(fight) {
    var left, right, teamIndex, definitions, matchupNumber, ids, teams, names;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            left = fight.left, right = fight.right, teamIndex = fight.teamIndex, definitions = fight.definitions, matchupNumber = fight.matchupNumber;
            ids = [left, right];
            teams = ids.map(function (id) {
              return teamIndex[id];
            });
            names = ids.map(function (id) {
              return definitions[id].MONSTER_NAME;
            });
            return _context.abrupt("return", {
              message: "The next round will begin shortly. #".concat(matchupNumber, ": ").concat(names[0], " (").concat(teams[0], ") vs ").concat(names[1], " (").concat(teams[1], "). Good luck!")
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleFightStartEvent.apply(this, arguments);
}

function handleFightSubmitRequest(_x2) {
  return _handleFightSubmitRequest.apply(this, arguments);
}

function _handleFightSubmitRequest() {
  _handleFightSubmitRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref) {
    var username, displayname, submission, _yield$submitTourname, success, errors;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            username = _ref.username, displayname = _ref.displayname;
            submission = {
              MONSTER_NAME: displayname,
              username: username
            };
            _context2.next = 4;
            return (0, _network.submitTournamentEntrant)(submission);

          case 4:
            _yield$submitTourname = _context2.sent;
            success = _yield$submitTourname.success;
            errors = _yield$submitTourname.errors;

            if (!success) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", {
              message: "".concat(displayname, ", your tournament submission was successful. ")
            });

          case 9:
            return _context2.abrupt("return", {
              message: ""
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _handleFightSubmitRequest.apply(this, arguments);
}

function handleTournamentStartEvent(_x3) {
  return _handleTournamentStartEvent.apply(this, arguments);
}

function _handleTournamentStartEvent() {
  _handleTournamentStartEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_tournament) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", {
              message: "The next tournament will now begin."
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _handleTournamentStartEvent.apply(this, arguments);
}

function handleTournamentResultEvent(_x4) {
  return _handleTournamentResultEvent.apply(this, arguments);
}

function _handleTournamentResultEvent() {
  _handleTournamentResultEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(tournament) {
    var winner;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            winner = tournament.winner;
            return _context4.abrupt("return", {
              message: "The tournament is now over! ".concat(winner, " is the winner! Congratulations to all participants! Press F to honor the follen.")
            });

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _handleTournamentResultEvent.apply(this, arguments);
}

function handleFightResultEvent(_x5) {
  return _handleFightResultEvent.apply(this, arguments);
}

function _handleFightResultEvent() {
  _handleFightResultEvent = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(result) {
    var matchup, winner, left, right, teamIndex, definitions, matchupNumber, ids, team, name;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            matchup = result.matchup, winner = result.winner;
            left = matchup.left, right = matchup.right, teamIndex = matchup.teamIndex, definitions = matchup.definitions, matchupNumber = matchup.matchupNumber;
            ids = [left, right];
            console.table({
              winner: winner,
              left: left,
              right: right
            });
            team = teamIndex[winner];
            name = definitions[winner].MONSTER_NAME;
            return _context5.abrupt("return", {
              message: "Fight #".concat(matchupNumber, " is over: ").concat(name, " (").concat(team, ") is the winner!")
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _handleFightResultEvent.apply(this, arguments);
}
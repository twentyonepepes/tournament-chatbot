"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleTeamCommand = handleTeamCommand;
exports.handleTeamsCommand = handleTeamsCommand;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _lodash = require("lodash");

var _network = require("../network");

function handleTeamCommand(_x) {
  return _handleTeamCommand.apply(this, arguments);
}

function _handleTeamCommand() {
  _handleTeamCommand = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var words, _words, team, tournament, teamMonsterIndex, teams, monsters, noTeamFound, monsterIds, monsterNames, monsterRaces;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            words = _ref.words;
            console.log(words);
            _words = (0, _slicedToArray2["default"])(words, 1), team = _words[0];
            _context.next = 5;
            return (0, _network.getTournamentData)();

          case 5:
            tournament = _context.sent;
            teamMonsterIndex = tournament.teamMonsterIndex, teams = tournament.teams, monsters = tournament.monsters;
            noTeamFound = !teams.includes(team);

            if (!noTeamFound) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", {
              message: "No team by that name."
            });

          case 10:
            monsterIds = teamMonsterIndex[team];
            monsterNames = (0, _lodash.zipObject)(monsterIds, monsterIds.map(function (_id) {
              return monsters[_id].MONSTER_NAME;
            }));
            monsterRaces = (0, _lodash.zipObject)(monsterIds, monsterIds.map(function (_id) {
              return monsters[_id].RACE;
            }));
            return _context.abrupt("return", {
              message: "".concat(team, ": ").concat(monsterIds.map(function (_id) {
                return "".concat(monsterNames[_id], " the ").concat(monsterRaces[_id]);
              }).join(", "), ".")
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _handleTeamCommand.apply(this, arguments);
}

function handleTeamsCommand() {
  return {
    message: null
  };
}
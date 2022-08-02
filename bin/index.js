"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = require("../../../../common/client");

var _common = require("./common");

var _handlers = require("./handlers");

var _matchupClusterHandlers = require("./handlers/matchup-cluster-handlers");

var _teamCommandHandlers = require("./handlers/team-command-handlers");

var _streams = require("./streams");

function initializeTournamentChatbot() {
  return _initializeTournamentChatbot.apply(this, arguments);
}

function _initializeTournamentChatbot() {
  _initializeTournamentChatbot = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var _yield$connect, command$, clientIn$, streamHandlerPairs, _loop, _i, _streamHandlerPairs;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _client.connect)();

          case 2:
            _yield$connect = _context2.sent;
            command$ = _yield$connect.command$;
            clientIn$ = _yield$connect.clientIn$;
            streamHandlerPairs = [[_streams.fightStarting$, _handlers.handleFightStartEvent], [_streams.matchupClusterStarting$, _matchupClusterHandlers.handleMatchupClusterStartEvent], [_streams.fightResult$, _handlers.handleFightResultEvent], [_streams.matchupClusterResult$, _matchupClusterHandlers.handleMatchupClusterResultEvent], [_streams.tournamentStart$, _handlers.handleTournamentStartEvent], [_streams.tournamentResult$, _handlers.handleTournamentResultEvent], [(0, _common.commandToStream)(command$)("TEAMS"), _teamCommandHandlers.handleTeamsCommand], [(0, _common.commandToStream)(command$)("TEAM"), _teamCommandHandlers.handleTeamCommand], [(0, _common.commandToStream)(command$)("FIGHT"), _handlers.handleFightSubmitRequest]];

            _loop = function _loop() {
              var _streamHandlerPairs$_ = (0, _slicedToArray2["default"])(_streamHandlerPairs[_i], 2),
                  stream = _streamHandlerPairs$_[0],
                  handler = _streamHandlerPairs$_[1];

              stream.subscribe( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(payload) {
                  var _yield$handler, message;

                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return handler(payload);

                        case 2:
                          _yield$handler = _context.sent;
                          message = _yield$handler.message;

                          if (message) {
                            clientIn$.next(message);
                          }

                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
            };

            for (_i = 0, _streamHandlerPairs = streamHandlerPairs; _i < _streamHandlerPairs.length; _i++) {
              _loop();
            }

            ;

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initializeTournamentChatbot.apply(this, arguments);
}

;
initializeTournamentChatbot();
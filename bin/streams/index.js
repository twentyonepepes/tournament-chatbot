"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tournamentStart$ = exports.tournamentResult$ = exports.tournament$ = exports.matchupClusterStarting$ = exports.matchupClusterResult$ = exports.fightStarting$ = exports.fightResult$ = void 0;

var _streams = require("../../../../../core/streams");

var fightStarting$ = (0, _streams.SocketStreamConverter)("ws://localhost:7108/fightStarting$");
exports.fightStarting$ = fightStarting$;
var fightResult$ = (0, _streams.SocketStreamConverter)("ws://localhost:7108/fightResult$");
exports.fightResult$ = fightResult$;
var matchupClusterStarting$ = (0, _streams.SocketStreamConverter)("ws://localhost:7108/matchupClusterStarting$");
exports.matchupClusterStarting$ = matchupClusterStarting$;
var matchupClusterResult$ = (0, _streams.SocketStreamConverter)("ws://localhost:7108/matchupClusterResult$");
exports.matchupClusterResult$ = matchupClusterResult$;
var tournamentResult$ = (0, _streams.SocketStreamConverter)("ws://localhost:7108/tournamentResult$");
exports.tournamentResult$ = tournamentResult$;
var tournamentStart$ = (0, _streams.SocketStreamConverter)("ws://localhost:7108/tournamentStart$");
exports.tournamentStart$ = tournamentStart$;
var tournament$ = (0, _streams.SocketStreamConverter)("ws://localhost:7108/tournament$");
exports.tournament$ = tournament$;
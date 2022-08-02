import { SocketStreamConverter } from "../../../../../core/streams";

export const fightStarting$ = SocketStreamConverter(`ws://localhost:7108/fightStarting$`);
export const fightResult$ = SocketStreamConverter(`ws://localhost:7108/fightResult$`);
export const matchupClusterStarting$ = SocketStreamConverter(`ws://localhost:7108/matchupClusterStarting$`);
export const matchupClusterResult$ = SocketStreamConverter(`ws://localhost:7108/matchupClusterResult$`);
export const tournamentResult$ = SocketStreamConverter(`ws://localhost:7108/tournamentResult$`);
export const tournamentStart$ = SocketStreamConverter(`ws://localhost:7108/tournamentStart$`);
export const tournament$ = SocketStreamConverter(`ws://localhost:7108/tournament$`);
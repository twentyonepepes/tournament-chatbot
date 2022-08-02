import { connect } from "../../../../common/client";
import { commandToStream } from "./common";

import { 
	handleFightStartEvent, 
	handleFightResultEvent, 
	handleTournamentResultEvent, 
	handleTournamentStartEvent,
	handleFightSubmitRequest,
} from './handlers'

import {
	handleMatchupClusterResultEvent, 
	handleMatchupClusterStartEvent
} from './handlers/matchup-cluster-handlers';

import { 
	handleTeamCommand,
	handleTeamsCommand 
} from "./handlers/team-command-handlers";
import { submitTournamentEntrant } from "./network";

import { 
	fightResult$, 
	fightStarting$, 
	matchupClusterResult$, 
	matchupClusterStarting$, 
	tournamentResult$, 
	tournamentStart$
 } from "./streams";

async function initializeTournamentChatbot(){

	const { command$, clientIn$ } = await connect();

	const streamHandlerPairs = [
		[fightStarting$, handleFightStartEvent],
		[matchupClusterStarting$, handleMatchupClusterStartEvent],
		[fightResult$, handleFightResultEvent],
		[matchupClusterResult$, handleMatchupClusterResultEvent],
		[tournamentStart$, handleTournamentStartEvent],
		[tournamentResult$, handleTournamentResultEvent],
		[commandToStream(command$)("TEAMS"), handleTeamsCommand],
		[commandToStream(command$)("TEAM"), handleTeamCommand],
		[commandToStream(command$)("FIGHT"), handleFightSubmitRequest(submitTournamentEntrant)],
	];

	for (const [stream, handler] of streamHandlerPairs) {
		stream.subscribe( async payload=>{
			
			const result = await handler(payload);
			if (result) {

				const { message } = result;

				if (message) {
	
					clientIn$.next(message);
	
				}
			}
		});
	};
		
};

initializeTournamentChatbot();

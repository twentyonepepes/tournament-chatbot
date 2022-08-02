import { submitTournamentEntrant } from "../network";
export { handleMatchupClusterResultEvent, handleMatchupClusterStartEvent} from './matchup';

export async function handleFightStartEvent(fight) {

	const { left ,right, teamIndex, definitions, matchupNumber }= fight;
	const ids = [left,right];
	const teams = ids.map(id => teamIndex[id]);
	const names = ids.map(id => definitions[id].MONSTER_NAME);

	return {
		message : `The next round will begin shortly. #${matchupNumber}: ${names[0]} (${teams[0]}) vs ${names[1]} (${teams[1]}). Good luck!`
	};
	
}

export const handleFightSubmitRequest = (submitTournamentEntrant) => async({username,displayname}) => {
	const submission = {
		MONSTER_NAME : displayname,
		username
	};

	const { success, errors } = await submitTournamentEntrant(submission);

	if (success) {
		return {
			message : `${displayname}, your tournament submission was successful. `
		}
	}

	return {
		message : ``
	}
}

export async function handleTournamentStartEvent(_tournament) {

	return {
		message : `The next tournament will now begin.`
	};

}

export async function handleTournamentResultEvent(tournament) {

	const { winner } = tournament;

	return {
		message : `The tournament is now over! ${winner} is the winner! Congratulations to all participants! Press F to honor the fallen.` 
	};
	
}

export async function handleFightResultEvent(result) {

	const { matchup , winner } = result;
	const { left ,right, teamIndex, definitions, matchupNumber } = matchup;
	const ids = [left,right];
	console.table({
		winner,
		left,
		right
	})
	const team = teamIndex[winner]
	const name = definitions[winner].MONSTER_NAME;

	return {
		message : `Fight #${matchupNumber} is over: ${name} (${team}) is the winner!`
	};
}
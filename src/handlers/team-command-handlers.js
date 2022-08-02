import { zipObject } from "lodash";
import { getTournamentData } from "../network";

export async function handleTeamCommand({words}){

	const [team] = words;
	const tournament = await getTournamentData();
	const { teamMonsterIndex, teams, monsters } = tournament;
	const noTeamFound = !teams.includes(team);

	if (noTeamFound) {
		return {

			message : `No team by that name.`
		}
	}

	const monsterIds = teamMonsterIndex[team];
	const monsterNames = zipObject(monsterIds, monsterIds.map(_id => monsters[_id].MONSTER_NAME));
	const monsterRaces = zipObject(monsterIds, monsterIds.map(_id => monsters[_id].RACE));

	return {
		message : `${team}: ${monsterIds.map(_id => `${monsterNames[_id]} the ${monsterRaces[_id]}`).join(`, `)}.` 
	}

}

export async function handleTeamsCommand(){

	const tournament = await getTournamentData();

	const { teams, teamNumberIndex, teamColorIndex, teamIsEliminated } = tournament;

	const message = `The teams are ${teams
		.map(team => `${team} (#${teamNumberIndex[team]}, ${teamColorIndex[team]})${teamIsEliminated[team] ? ' [Eliminated]' : ''}`)
		.join(", ")
	}.`;

	return { 
		message
	}
}
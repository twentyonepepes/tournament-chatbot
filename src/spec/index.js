import { handleTeamCommand, handleTeamsCommand } from '../handlers/team-command-handlers'
import { handleFightSubmitRequest } from '../handlers';
import { tournamentMemo$ } from '../network';
import tournament from '../spec/tournament.json';

(async function(){

	tournamentMemo$.next(tournament)
	
	const a = await handleTeamCommand({words:["TORLES"]});
	console.log(a);

	const b = await handleFightSubmitRequest(()=>{return {success : true}})({displayname: "DAWG", username :"DAWG"});
	console.log(b);

	const c = await handleTeamsCommand();
	console.log(c);
})();
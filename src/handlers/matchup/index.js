import { firstValueFrom } from "rxjs";
import { matchupMemo$ } from "../../memo";

export async function handleMatchupClusterStartEvent(matchupCluster) {

	const { left, right } = matchupCluster;

	return {
		message : `The next two teams will now enter the ring. ${left} vs ${right}. Good luck!`
	};	

}

export async function handleMatchupClusterResultEvent(result) {

	const {
		winner,
		matchupCluster
	} = result;

	const { left, right } = matchupCluster;

	return {
		message : `The matchup between ${left} and ${right} is over: ${winner} is the winner!`
	};	
}

export async function handleMatchupRequestEvent() {

	const { left, right, matchupNumber, teamIndex } = await firstValueFrom(matchupMemo$); 
	// const { monsters } = await 
	// return {
	// 	message : 
	// }
}
import { get, post } from "axios";
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { tournament$ } from "../streams";

export const tournamentMemo$ = new BehaviorSubject();
tournament$.subscribe(tournament => {
	tournamentMemo$.next(tournament);
})

export async function getTournamentData(){
	return await firstValueFrom(tournamentMemo$);
	// const { data } = await get(`http://127.0.0.1:7108/tournament`);
	// return data;
}

export async function submitTournamentEntrant(submission){
	const { data } = await post(`http://127.0.0.1:7108/tournament/entrants/submit`,{submission});
	return data;
}
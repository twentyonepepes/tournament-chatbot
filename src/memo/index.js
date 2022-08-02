import { BehaviorSubject } from "rxjs";
import { fightStarting$ } from "../streams";

export const matchupMemo$ = new BehaviorSubject();

fightStarting$.subscribe((data)=>{
	matchupMemo$.next(data);
});
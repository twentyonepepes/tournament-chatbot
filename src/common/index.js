import { Subject } from "rxjs";

export const commandToStream = command$ => commandName => {

	const subject$ = new Subject();

	command$.subscribe(({username,words, command, displayname})=>{
		if (commandName === command) {
			subject$.next({username,words, displayname});
		}
	});
	
	return subject$;
}

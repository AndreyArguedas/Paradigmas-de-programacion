/**
  Demo para verificar el event loop (en node)
  Compara timers y promesas
  @author loriacarlos@gmail.com
  @since 2017
*/
function test(p1, p2, p3, p4){
	console.log({p1, p2, p3, p4})
	if (p1){
		new Promise(t => {
			setTimeout(()=> t(666), 0)
		}).then(x => console.log('then 1 ' + 666));
	}
	if (p2)
	   setTimeout(()=> console.log('sto 2 ' + 999), 0)
	
	if (p3) 
		setImmediate(()=> console.log('simm 3 ' + 888))
	
	if (p4)
		process.nextTick(()=> console.log('nt 4 ' + 777))
	
}

test(...process.argv.slice(2).map(x => parseInt(x)) );
/*

PP:node timerProm.js 1 2
{ p1: '1', p2: '2', p3: undefined, p4: undefined }
sto 2 999
then 1 666

PP:node timerProm.js 1 2
{ p1: '1', p2: '2', p3: undefined, p4: undefined }
then 1 666
sto 2 999
*/
/*
PP:node timerProm.js 1 2 3
{ p1: '1', p2: '2', p3: '3', p4: undefined }
sto 2 999
then 1 666
simm 3 888

PP:node timerProm.js 1 2 3
{ p1: '1', p2: '2', p3: '3', p4: undefined }
sto 2 999
then 1 666
simm 3 888
*/

/*

PP:node timerProm.js 1 2 3 4
{ p1: '1', p2: '2', p3: '3', p4: '4' }
nt 4 777
sto 2 999
then 1 666
simm 3 888

PP:node timerProm.js 1 2 3 4
{ p1: '1', p2: '2', p3: '3', p4: '4' }
nt 4 777
sto 2 999
then 1 666
simm 3 888
*/
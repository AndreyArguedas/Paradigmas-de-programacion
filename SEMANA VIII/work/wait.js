/**
  Demo para estudiar el event loop (en node)
  
  @author loriacarlos@gmail.com
  @since 2017
  @see test_wait.js
*/
/*
  Blocking function (don't do this!!)
*/
function wait(ms, name){
	if (name)
	   console.log('>>> Starts: ' + name + ' at ' + (new Date()));
	const start_ms = Date.now();
	for(; Date.now() - start_ms < ms; ); // Don´t do this!!!
	if(name)
	   console.log('>>> Ends  : ' + name + ' at ' + (new Date()));
	
}
function schedule(f, ms = 150){
	let timer = setTimeout(f, ms);
	return timer;
	
}
module.exports = {
	wait,
	schedule
}
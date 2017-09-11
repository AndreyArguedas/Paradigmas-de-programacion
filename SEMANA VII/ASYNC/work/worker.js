/*
 @author loriacarlos@gmail.com
 @since 2017
*/

let dateToHHMMSS = date => [date.getHours(), date.getMinutes(), date.getSeconds()]
						              .map(s => addZero(s.toString()))
						              .join(":")
;
let addZero = s => (s.length < 2) ? ("0" + s) : s;
function block(ms = 3000){
		     for (var start = new Date(); new Date().getTime() < start.getTime() + ms;);
}
onmessage = function(e) {
  block(7000);
  var workerResult = {
	  msg : `Back to:  ${(e.data.msg)} at : ${dateToHHMMSS(new Date())}`
  } ;
  postMessage(workerResult);
}
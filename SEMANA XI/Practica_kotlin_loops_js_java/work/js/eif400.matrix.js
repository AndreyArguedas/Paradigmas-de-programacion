function printMatrix(a){
   console.log(a);
}
function makeMatrix(n, m, init = null){
	return Array.from({length: n}, 
	                  (v,i) => Array.from({length: m}, (w, j) => init)
	)
}
module.exports = {
	printMatrix,
	makeMatrix
}
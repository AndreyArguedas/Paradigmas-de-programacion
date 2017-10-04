const {makeMatrix} = require('./eif400.matrix')
/* 
  a is  an array of n arrays (rows) each one being an array of m numbers (cols)
  Assume a.length > 0 , 
         a[i].length > 0 for every i, 
		 a[i].length == a[j].length for each i, j
*/
function transpose(a){ 
	const n = a.length,    // n rows
	      m = a[0].length  // m columns
	const c = makeMatrix(m, n)
	for ( let i = 0; i < m; i++ ){
		 for ( let j = 0; j < n; j++ ){
			c[i][j] = a[j][i]
		}
	}
	return c
	
}

module.exports = {
	transpose	
}
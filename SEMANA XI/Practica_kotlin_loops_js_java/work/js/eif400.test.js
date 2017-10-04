var {printMatrix} = require('./eif400.matrix')
var {transpose} = require('./eif400.transpose')

function main(){
	console.log('>>> Testing Loop <<<')
	var a = [[1, 2, 3], [4, 5, 6]]
	console.log('>>> Matrix <<<')
	printMatrix(a);
    console.log('>>> Transposed Matrix <<<')
	printMatrix(transpose(a));
	
	
}

main()
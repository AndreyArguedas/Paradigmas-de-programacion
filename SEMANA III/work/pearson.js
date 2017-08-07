
function pearson(x, y){
	var quant = (a, b) => a.length + b.length;
	var desv = (a) => sumPow(a) / a.length;
	var n = quant(x, y);
	var sumx = sumPow(x);
	var sumy = sumPow(y);
	var sum2 = sumxy(x, y);
	var sumPowx = sumPow(x,2);
	var sumPowy = sumPow(y,2);
	return (sum2 -  n * sumx * sumy) / (Math.sqrt((sumPowx - n * Math.pow(desv(x),2))) * Math.sqrt((sumPowy - n * Math.pow(desv(y),2)))) ;
}

function sumxy(x, y){
	return x.reduce( (acc, curr, i) => acc + (curr * y[i]), 0 );
}


function sumPow(a, exp = 1){
	return a.reduce( (acc, curr) => acc + Math.pow(curr,exp), 0 );
}


module.exports = {
	pearson
}

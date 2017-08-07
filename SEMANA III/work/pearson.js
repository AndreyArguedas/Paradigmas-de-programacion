
function pearson(x, y){
	var quant = (a, b) => a.length + b.length;
	var desv = (a) => sumPow(a,1) / a.length;
	var n = quant(x, y);
	var sumx = sumPow(x,1);
	var sumy = sumPow(y,1);
	var sum2 = sumxy(x, y);
	var sumPowx = sumPow(x,2);
	var sumPowy = sumPow(y,2);
	var num = sum2 - (n * (sumx / n) * (sumy / n));
	var den = Math.sqrt(sumPowx - Math.pow((sumx / n),2) * n) * Math.sqrt( sumPowy - Math.pow((sumy / n) , 2) * n);
	return num / den ;
}

function sumxy(x, y){
	return x.reduce( (acc, curr, i) => acc + (curr * y[i]), 0 );
}


function sumPow(a, exp){
	return a.reduce( (acc, curr) => acc + Math.pow(curr,exp), 0 );
}


module.exports = {
	pearson
}

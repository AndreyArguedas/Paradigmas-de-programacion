function pearson(x, y){
	return nominate(x, y) / denominate(x, y);
}

function nominate(x, y){
	return dot(x, y) - n(x) * average(x) * average(y);
}

function denominate(x, y){
	return subDenominate(x) * subDenominate(y);
}

function subDenominate(a){
	return Math.sqrt(sum(a,2) - (a.length * average(a, 2)));
}

function dot(x, y){
	return x.reduce( (acc, curr, i) => acc + ( curr * y[i] ), 0 );
}

function n(x){
	return  x.length;
}

function average(a, exp = 1){
	return Math.pow(a.reduce( (acc, curr, i) => acc + curr, 0) / a.length, exp);
}

function sum(a, exp = 1){
	return a.reduce( (acc, curr) => acc + Math.pow(curr, exp), 0);
}


module.exports = {
	pearson
}
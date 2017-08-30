class RNumber extends Number {
	constructor(val){
	   super(val)
	   this.val = val
	   this.actual = 0;
	}
	[Symbol.iterator](){
		var num = this;
		num.actual = 0;
		return {
			return : function(){
				console.log( num + 'ended' ),
				num.actual = 0;
			},
			next(){
				return (num.actual < num.val) ? {value: num.actual++} : {done:true}
			}
		}
	}
}

module.exports = {
	RNumber
}
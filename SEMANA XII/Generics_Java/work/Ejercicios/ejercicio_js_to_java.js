/*
 Logre traducir estos casos a de ES6 a Java8-FP
 class Ejercicio {
	 public ?? comp(?? f){ // Ponga el tipo de f y de retorno de comp
		 // escriba cuerpo de comp
	 }
	 public ?? mapComp(??[] a){ // Ponga el tipo de a y de retorno de mapComp
	 }
	 public static void main(String... args){
		 // traduzca aca main 
	 }
 }
*/

class Ejercicio {
	comp(f){
		return g => x => g(f(x))
	}
	
	mapComp(a){
		return f => g => a.map(this.comp(f)(g));
	}
}

function main(){
	let f = x => x + 666;
	let g = x => x * x;
	let a = [10, 20, 30];
	let E = new Ejercicio();
	console.log(a, ' ---> ', E.mapComp(a)(f)(g));	
}

main();


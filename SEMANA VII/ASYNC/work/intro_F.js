/*
 @author loriacarlos@gmail.com
 @since 2017
*/

// Sincrono
	 function F(x, y){
		 let f = x => 'f(' + x + ')';
		 let g = x => 'g(' + x + ')'; 
		 let h = x => 'h(' + x + ')';
		 return [g(f(x)), h(y)];
	 }
// Con Promesa 
	 function asPromise(f, delay=0){
		 return x => new Promise((res, rej) => setTimeout(() => res(f(x)), 0))
	 }
	 function recoverValue(p, res){
		 return p.then(v => res.value = v);
		 
	 }
	 function PF(x, y){
			 let fs = x => 'f(' + x + ')';
			 let gs = x => 'g(' + x + ')';;
			 let hs = x => 'h(' + x + ')';
			 let [f, g, h] = [fs, gs, hs].map(asPromise);
			 
			 return Promise.all([f(x).then(g), h(y)]);
						   
	  }
	  
	  let val = PF(1, 2);
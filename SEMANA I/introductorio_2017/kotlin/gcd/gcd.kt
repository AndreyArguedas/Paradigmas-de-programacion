/*
 Compilar
 kotlinc gcd.kt
 Run (por ejemplo gcd(235, 75)
 kotlin GcdKt 940 600
*/

/* if ( a == b ) return a;
  if ( a == 0 ) return b;
  if ( b == 0 ) return a;
  return if ( a > b ) gcd(a - b, b) 
         else gcd(a, b - a); */
		 
// Kotlin recursivo por reglas
fun gcd( a: Int, b: Int) : Int =
 when {
   a == b -> a
   a == 0 -> b
   b == 0 -> a
   a > b  -> gcd(a - b, b)
   else   -> gcd(a, b - a) 
  }



fun main(args : Array<String>){
  var a : Int = 0;
  var b : Int = 0;
  if ( args.count() >= 1){
    a = args[0].toInt();
  }
  if ( args.count() >= 2){
    b = args[1].toInt();
  }
  println("gcd($a, $b)= ${gcd(a, b)}")
  
}
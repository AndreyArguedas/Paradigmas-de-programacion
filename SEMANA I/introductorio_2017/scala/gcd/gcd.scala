
object Gcd {

   def gcd(a: Int, b: Int) : Int = 
     
    ( a, b) match {
	    case (0, b) => b
		case (a, 0) => a
		case (a, b) if (a > b) 
		            => gcd(a - b, b)
		case _      => gcd(a, b - a)
	  
	}
    

   def main(args: Array[String]) = {
        var a = 0; var b = 0;
		if ( args.length >= 1  ){
			a = args(0).toInt;
		}
		if ( args.length >= 2  ){
			b = args(1).toInt;
		}
		println(s"gcd($a, $b)= ${gcd(a, b)}");
		
   }
}

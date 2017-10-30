/*
 Demo de oop en Kotlin
*/
package eif400.part03

import java.math.BigDecimal
import java.math.RoundingMode

/*
  Simple shape
*/
interface Shape2D {
  val area:Double

}
/*
  some colors
*/
enum class Color {
   RED, BLUE, GREEN, WHITE
}
/*
  Simple Rectangle
*/
open class Rectangle( val height: Double = 0.0, val width:Double = 0.0 ) : Shape2D {
    override val area
	   get()= height * width
	open var color: Color = Color.WHITE
	   set(value){
	      field = value
	   }

}

/* Simple Triangle */

class Triangle( val height: Double, val base:Double ) : Shape2D {
    override val area 
    get()= height * base / 2

	  var color: Color = Color.WHITE
	   set(value){
	      field = value
	   }

}

/* Simple square */

class Square( val side: Double) : Rectangle() {
    override val area 
    get()= side * side

	  override var color: Color = Color.WHITE

	   set(value){
	      field = value
	   }

}

/*
  proyects rect alphaInGrads grades  counterclockwise 
  devuelve la altura (h) y base (b) del trinagulo que se proyecta
*/
const val PI_180 = Math.PI/180.0

fun Rectangle.proyect(alphaInGrads:Double = 45.0): Pair<Double, Double>{
   val alpha = alphaInGrads * PI_180
   val h = Math.cos(alpha) * this.height
   val b = Math.sin(alpha) * this.height
   return Pair(b, h)
}
/*
  Rounds a double converting to double
  Potential bug in Kotlin is doubleValue is called
*/
fun round(value: Double, digits: Int = 2): BigDecimal =
    BigDecimal(value).setScale(digits, RoundingMode.HALF_UP)

/*
   Testing stuff
*/	
fun main(args: Array<String>){
   println(">>> Testing Shapes OOP <<<")
   val rect = Rectangle(5.0, 10.0);
   println("rect area = ${rect.area} color=${rect.color}")
   rect.color = Color.BLUE;
   println("rect new color=${rect.color}")
   val alpha = 60.0;
   val (base, height) = rect.proyect(alpha)
   println("rect proyects to ${round(base)} X ${round(height)} after $alpha degrees")
   println("Let's do a triangle")
   val tr = Triangle(5.0, 10.0)
   println("triangle area = ${tr.area} color=${tr.color}")
   tr.color = Color.BLUE;
   println("triangle new color=${tr.color}")

   println("Let's do a square")
   val sqr = Square(5.0)
   println("square area = ${sqr.area} color=${sqr.color}")
   sqr.color = Color.RED;
   println("square new color=${sqr.color}")

   // object expression demo
   val obj = object {
        var x: Int = 666
        var y: Int = 999
    }
   print("Demo de object: obj.x + obj.y = ${obj.x + obj.y}")

}





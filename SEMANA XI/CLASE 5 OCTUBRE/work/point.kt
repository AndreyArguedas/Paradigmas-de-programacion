package eif400.oop.kt

data class Point(val x : Double, val y: Double)

fun Point.toString() = "Point(x=${this.x}, y=${this.y})"

fun Point.add(q : Point) = Point(this.x + q.x, this.y + q.y)

fun Point.times(s : Double) = Point(this.x * s, this.y * s)

fun Point.slope(p : Point , q : Point) = (p.y - q.y) / (p.x - q.x) 

fun main(args: Array<String>){
    println(">>> Point Test <<< ")
		
	val p = Point(10.3, 11.5)
		
	println(">>> p=${p.toString()} <<<")

    val q = p.add(p).times(2.0);

    println(">>> q=${q.toString()} <<<")

    println(">>> slope(${p.toString()},${q.toString()})=${p.slope(p, q)} <<<")
}
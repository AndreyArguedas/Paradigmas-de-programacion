// DATA CLASSES

data class Point(val x : Double, val y: Double)

val p = Point(0.0, 5.0) //Se instancia el p

p.toString() //No lo que esperariamos

p.x // 0.0

p.y //5.0

val q = Point(0.0, 5.0)

p == q //True --Llama al equals de java

p === q //False

p.copy() //Saca copias 

//Extension methods

operator fun Point.plus(q : Point) = Point(this.x + q.x, this.y + q.y)

p + q //El metodo se extiende, tambien se puede con p.plus(q)

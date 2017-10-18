fun <T> copyMutableList(source: MutableList<T>, target: MutableList<T>){
  for ( e in source )
     target.add(e)
}

fun main(args: Array<String>){
  val source = mutableListOf("e", "f", "g")
  val target: MutableList<Any>  = mutableListOf("a", "b", "c", "d")
  println("target before copy $target")
  copyMutableList(source, target)
  println("target after copy $target")

}
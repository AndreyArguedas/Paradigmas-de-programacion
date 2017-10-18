fun printListFirst(list: List<*>){
  println("First of $list is ${list.first()}")
}

fun main(args: Array<String>){
  printListFirst(mutableListOf(100, 3, 20))

}
package eif400.part04


fun stats(numbers: List<Int>): Pair<Int, Pair<Int, Double>>{ //Con fold
     val max = numbers.fold(numbers.get(1)){acum, element -> if(acum < element) element else acum}
	 val min = numbers.fold(numbers.get(1)){acum, element -> if(acum > element) element else acum}
	 val avg = numbers.fold(0){acum, next -> acum + next} / numbers.size
	 return Pair(max, Pair(min, avg.toDouble()))
}

/*fun stats(numbers: List<Int>): Pair<Int, Pair<Int, Double>>{ //Con API
     val max = numbers.max()!!
	 val min = numbers.min()!!
	 val avg = max + min / numbers.size
	 return Pair(max, Pair(min, avg.toDouble()))
}*/

fun summation(numbers: List<Int>): Int {
     return  numbers.fold(0){acum, elem -> elem * numbers.indexOf(elem) + acum}
}
fun main( args: Array<String> ){
    println(">>> Testing lambdas and collections <<<")
	
	val numbers = listOf(30, 10, 5, 225, 40, 15, 10, 5)
	val p = stats(numbers)
	println("1) stats of numbers max=${p.first}, min=${p.second.first}, avg=${p.second.second}")
	
	println("2) summation = ${summation(numbers)}")

}
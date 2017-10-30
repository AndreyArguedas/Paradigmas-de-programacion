package eif400.part04


fun stats(numbers: List<Int>): Pair<Int, Pair<Int, Double>>{
     val max = numbers.fold(numbers.get(1), {acum, (acum, next) -> if(acum < next) next else acum})
	 val min = numbers.fold(numbers.get(1), {acum, (acum, next) -> if(acum > next) next else acum})
	 val avg = numbers.fold(0, {acum, next -> acum + next}) / numbers.size()
	 return Pair(max, Pair(min, avg))
	
}
fun summation(numbers: List<Int>): Int {
     return  -1
}
fun main( args: Array<String> ){
    println(">>> Testing lambdas and collections <<<")
	
	val numbers = listOf(30, 10, 5, 225, 40, 15, 10, 5)
	val p = stats(numbers)
	println("1) stats of numbers max=${p.first}, min=${p.second.first}, avg=${p.second.first}")
	
	println("2) summation = ${summation(numbers)}")

}
fun printOnlyNumbers(args: Array<String>){
    println("Print only numbers")
    for((index,value) in args.withIndex()){
        val num = value.toIntOrNull()
        if(num != null){
            val inr = inRange(1, 10, num)
            println("$index) num=$num inRange(1, 10)=$inr")
        }
            
        else
            println("*** $value ***")
    }
}

fun selectOnlyNums(args: Array<String>) : List<Int> {
    return args.map{ it.toIntOrNull() }.filterNotNull()
}

fun maxMinOfList(nums: List<Int>): List<Int>{
    return listOf(nums.min()!!, nums.max()!!)
}

fun inRange(min : Int, max : Int, value : Int) : Boolean{
    return value in min..max 
}

fun gcd(a : Int, b : Int) : Int{
    return when{
        a % b == 0 ->  b;
        a > b ->  gcd(a - b, b)
        else ->  gcd(b , a)
    }
} 

fun main(args: Array<String>){
	println(">>> Testing <<<")
	var n = 10
	println(n)
    printOnlyNumbers(args)
    val maxMin = maxMinOfList(selectOnlyNums(args))
    println("max=${maxMin[1]} min=${maxMin[0]}")
    val gcdval = gcd(maxMin[1],maxMin[0])
    println("gcd=$gcdval")
}
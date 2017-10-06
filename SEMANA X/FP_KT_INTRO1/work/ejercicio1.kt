fun printOnlyNumbers(args: Array<String>){
    println("Print only numbers")
    for((index,value) in args.withIndex()){
        val num = value.toIntOrNull()
        if(num != null)
            println("$index) num=$num")
        else
            println("*** $value ***")
    }
}

fun selectOnlyNums(args: Array<String>) : List<Int> {
    return args.map{ it.toInt?:0 }.filter{it is Int}
}

fun maxMinOfList(nums: List<Int>): List<Int>{
    return listOf(nums.min(), nums.max())
}

fun main(args: Array<String>){
	println(">>> Testing <<<")
	var n = 10
	println(n)
    printOnlyNumbers(args)
    val maxMin = maxMinOfList(selectOnlyNums(args))
    println("max=${maxMin[1]} min=${maxMin[0]}")
}
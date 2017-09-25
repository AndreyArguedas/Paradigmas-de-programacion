/*
https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.sequences/generate-sequence.html
*/
import kotlin.coroutines.experimental.*
import kotlin.coroutines.experimental.intrinsics.*
fun main(args: Array<String>) {
	var count = 3

	val sequence = generateSequence {
		(count--).takeIf { it > 0 } // will return null, when value becomes non-positive,
		// and that will terminate the sequence
	}

	//println(sequence.toList()) // [3, 2, 1]

	sequence.forEach { println(it) }  // <- iterating that sequence second time will fail

}
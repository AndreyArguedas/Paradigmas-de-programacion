/*
https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines.experimental/build-sequence.html
*/
import kotlin.coroutines.experimental.*
import kotlin.coroutines.experimental.intrinsics.*
fun main(args: Array<String>) {
    val sequence = buildSequence {
    val start = 0
    // yielding a single value
    yield(start)
    // yielding an iterable
    yieldAll(1..5 step 2)
    // yielding an infinite sequence
    yieldAll(generateSequence(8) { it * 3 })
    }
    println(sequence.take(15).toList()) // [0, 1, 3, 5, 8, 24, 72]
}
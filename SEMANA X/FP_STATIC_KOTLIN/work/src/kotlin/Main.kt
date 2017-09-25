package eif400.kt;

import eif400.work.*;

class A(value: Int) : Base<Int>(value){
   
}

fun main(args: Array<String>){
    println(">>> Saludos desde Kotlin! <<<")
	
	Snippets().main();
	
	println("A(666).value = ${A(666).value}")	
}
package eif400.kt;

import eif400.work.*;

class A(value: Int) : Base<Int>(value){ //Constructor primario, todo en kotlin es object, : es extends e implements
	//Base esta en JAVA y es generica, notar de que una vez se hace el super
   
}

fun main(args: Array<String>){
    println(">>> Saludos desde Kotlin! <<<")

	//val s = Snippets() //Esto sustituye a new
	
	Snippets().main(); //Notar el Snippets().main() se hace asi porque no hay new
	
	println("A(666).value = ${A(666).value}")	
}
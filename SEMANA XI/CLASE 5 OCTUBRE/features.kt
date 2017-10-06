fun foo(x : Int): Int{ //Bloque de codigo
    println(x)
    return x * x
}

val a = listOf(1, 2, 3, 4)

a.javaClass //Arrays$ArrayList - Es inmutable ni siquiera si es var

a.map({ x -> x * x})

a.forEach{println(it)}

fun foo1(x: Int, f: (Int) -> Int): Int{
    return f(x)
}

//Super dry

foo1(10){it + 10 }

//NPE Y LAMBDAS

var b: String? = "***"

var a: String = "55555"

a.let{println(it)} //Imprime y retorna Unit

b = null

b.let{println(it)} //Imprime y retorna Unit, evita el NPE

// SMART CAST

val z  : Any = "****"

z.javaClass //Estatico = Any, Dinamico = String

val y : String = z //No valido, debemos castear

val y : String = z as String

b as Any //Null no se puede castaer

b as? Any //Castea si no es null

if (z is String ) println(z.length) else -1 //Z sigue siendo ANY y no ocupa casting para el length Kotlin lo hace por debajo


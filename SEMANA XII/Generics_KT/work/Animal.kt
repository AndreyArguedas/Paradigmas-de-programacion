interface Animal {
    fun feed()
}

class Chicken : Animal {
    override fun feed(){
	   println("Buck buck chicken being fed")
	}
}

class Cow : Animal {
    override fun feed(){
	   println("Moo moo cow being fed")
	}
}
data class AnimalFarm<T : Animal> ( val animals: List<T>  )

class Farmer {

   fun feedAll(f: AnimalFarm<Animal>){
       for ( a in f.animals ){
	      a.feed()
	   }
   }

}

fun main(args: Array<String>){

    val charlie = Farmer()
	val chickens = AnimalFarm(listOf(Chicken(), Chicken()))
	charlie.feedAll(chickens)
}
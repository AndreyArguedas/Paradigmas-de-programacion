fun main(args: Array<String>){
   val hashcodeComparator = Comparator<Any> {
       a1, a2 -> a1.hashCode() - a2.hashCode();
   
   }
   val listStrings = listOf("abcbcd", "efgbcdhijk", "hij");
   
   println(listStrings.sortedWith( hashcodeComparator ))
   
   val lengthComparator = Comparator<String> {
       a1, a2 -> a1.length - a2.length;
   
   }
   
   println(listStrings.sortedWith( lengthComparator ))

}
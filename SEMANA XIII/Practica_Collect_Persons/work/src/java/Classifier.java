/**
   @author loriacarlos@gmail.com
   @since 2017
*/
package eif400.files;

import java.util.*;
import java.util.stream.*;
import java.io.*;
import java.nio.file.*;
import java.lang.reflect.*;
import java.util.function.Function;

public class Classifier {

    public static <T, R> Map<String, List<R>> getGroupedBy(List<T> list, Function<T, R> toUniqueFunc, Function<R, String> groupFunc)  {
        return list.stream().map(toUniqueFunc).collect(Collectors.groupingBy(groupFunc));
    }

   public static void main(String[] args){
	    
		String filename = "data/persons.json";
		List<ReadPersons.Person> persons = ReadPersons.readJSON(filename);
		persons.stream()
		       .forEach(System.out::println);
        System.out.println("Edad promedio de personas :");
        OptionalDouble avg = persons.stream().mapToInt(i -> i.age).average();
		System.out.println(avg.getAsDouble());

        System.out.println("Familias Distintas :");
        Map < String, List < ReadPersons.Name >> families = Classifier.getGroupedBy(persons, ReadPersons.Person::getName, ReadPersons.Name::getLastAndVeryLast);
        System.out.println(String.format("There are %d families\n", families.size()));
        System.out.println("And these are their qty of members and last names: ");
        families.forEach((familyName, names) -> System.out.println(String.format("    %d - %s", names.size(), familyName)));
		
   }
}
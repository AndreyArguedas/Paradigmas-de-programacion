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

public class Classifier {
   public static void main(String[] args){
	    
		String filename = "data/persons.json";
		List<ReadPersons.Person> persons = ReadPersons.readJSON(filename);
		persons.stream()
		       .forEach(System.out::println);
        System.out.println("Edad promedio de personas :");
        OptionalDouble avg = persons.stream().mapToInt(i -> i.age).average();
		System.out.println(avg.getAsDouble());

        Class c = ReadPersons.class;
        Method[] m = c.getDeclaredMethods();
        for (int i = 0; i < m.length; i++)
            System.out.println(m[i].toString());

        System.out.println("Familias Distintas :");
        /*Map<Int, Long> counting = persons.stream().collect(
            Collectors.groupingBy(ReadPersons.Person.age, Collectors.counting())
        );

        System.out.println(counting);*/
		
   }
}
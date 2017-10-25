/**
   @author loriacarlos@gmail.com
   @since 2017
*/
package eif400.files;

import java.util.*;
import java.util.stream.*;
import java.io.*;
import java.nio.file.*;

public class Classifier {
   public static void main(String[] args){
	    
		String filename = "data/persons.json";
		List<ReadPersons.Person> persons = ReadPersons.readJSON(filename);
		persons.stream()
		       .forEach(System.out::println);
		
		
   }
}
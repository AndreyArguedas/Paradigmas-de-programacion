/**
   @author loriacarlos@gmail.com
   @since 2017
*/

package eif400.files;

import java.util.*;
import java.util.stream.*;
import java.io.*;
import java.nio.file.*;

import com.google.gson.Gson;

public class ReadPersons {
   static Gson gson = new Gson();
        	
   public static class Name { // For simplicity declared as public
		public String first;
		public String middle;
		public String last;
		public String veryLast;
		public String toString(){
			return gson.toJson(this);
		}
    }
	public static class Person {
		public Name name;
		public int age;
		public String _id;
		public String toString(){
			return gson.toJson(this);
		}
	}
   static public List<Person> readJSON(String filename){
	   
		List<String> persons_json = ReadWriteFile.readByLines(filename);
		return persons_json.stream()
		                   .map(p -> gson.fromJson(p, Person.class))
						   .collect(Collectors.toList());
   }
   
   public static void main(String[] args){
	    
		String filename = "data/persons.json";
		List<ReadPersons.Person> persons = ReadPersons.readJSON(filename);
		persons.stream()
		       .forEach(System.out::println);
		
		
   }

} 
package eif400.java;

import java.util.*;
import java.util.stream.*;
import java.util.function.*;
import java.util.function.Consumer;

interface IntegerPredicate extends Predicate<Integer>{
	
}
public class Types {
	
	public <T> Stream test1(List<T> list, Predicate f){
		Function id = x -> x;
		return list.stream()
		           .map(id)
		           .filter(f);
		  
	}
	
	public <T> void test2(List<T> list, Consumer f){
		list.stream()
		    .forEach(f);	  
	}
	
	static public void test3(Predicate<Integer> p){
		System.out.println("test3 Predicate --> " + p.test(666));
	}
	
	static public void test3(IntegerPredicate p){
		System.out.println("test3 IntegerPredicate --> " + p.test(666));
	}
	
	
	
	public static void main(String[] args){
		Function<Integer, Integer> add1 = x -> x + 1;
		test3(x -> true);
	}
	
}
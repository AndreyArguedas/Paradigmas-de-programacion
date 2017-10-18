/*
 Pregunta J
¿Por que no hay error de compilacion en fooArray pero si en fooList 
   Explique
   Indique si es de sintaxis o semantica
   Corrija el error sin eliminar fooList
*/ 
import java.util.*;
public class J {
   public void fooArray(){
       String[] as = new String[0];
	   Object[] os = as;
	   
   }
   public void fooList(){
       List<String> ls = new ArrayList();
	   List<Object> lo = ls;
   }
   public static void main(String[] args){
       
   }
}
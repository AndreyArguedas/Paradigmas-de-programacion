/**
<p> Pequeño ejemplo/ejercicio colecciones usando combinadores/lambda (jdk8)
@author Carlos Loría-Sáenz
@since 2016
*/
package eif400fp.demo.combs;
import java.util.*;
import java.util.stream.*;
import java.util.function.*;

enum Genero{
	M, F;
	
}
class Persona{
	String nombre;
	int edad;
	Genero genero;
	Persona(String nombre, Genero genero, int edad){
		this.nombre = nombre;
		this.genero = genero;
		this.edad = edad;
	}
	public String toString(){
	     return String.format("{nombre: %s, edad: %d, genero:%s}", nombre, edad, genero);
	}
	
}

public class TestCollections {
	static String[] nombres   = {"Ana", "Maria", "Pedro", "Juan", "Luis", "Alberto", "Jose" };
    static String[] apellidos = {"Ruiz", "Perez", "Gomez", "Arce", "Soto", "Ramirez", "Gomez", "Sanchez" };
	final static Random rand = new Random(666);
	final static int MAX = 100;
	
	List<Persona> lp;
	public TestCollections(){
		this.lp = initPersonas();
	}
	public static Persona genPersona(){
		int edad = rand.nextInt(100);
		Genero genero = rand.nextBoolean() ? Genero.M : Genero.F;
		String nombre = apellidos[rand.nextInt(apellidos.length)] + ", " + nombres[rand.nextInt(nombres.length)]; 
		return new Persona(nombre, genero, edad);
	}
	List<Persona> initPersonas(){
		List<Persona> lp = new ArrayList<>();
		for(int i = 0 ; i < MAX; i++){
			lp.add(genPersona());
		}
		return lp;
	}
	public void cuantosHombres(){
		// to do
	}
	public void cuantasMujeres(){
		// to do
	}
	public void cuantasMujeresAdultas(){
		// to do
	}
	public static void main(String[] args){
		TestCollections tc = new TestCollections();
		System.out.println(tc.lp);
	}
}
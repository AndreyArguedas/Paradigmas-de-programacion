import java.util.*;
import java.util.function.*;
import java.util.stream.*;
 
public class Bolsa<T> { // T es un parámetro de tipos
	  protected List<T> delegado;
	  public Bolsa(){
		  this.delegado = new ArrayList<T>();
	  }
	  public boolean vacia(){
		  return this.delegado.isEmpty();
	  }
	  public T sacar(int i){
		 return (this.vacia()) ? null
		                       : this.delegado.get(i);
	  }
	  public Bolsa<T> guardar(List<T> list){
		  list.stream()
		      .forEach(e -> this.delegado.add(e));
		  return this;
			  
	  }
	  public void guardar(T obj){
		  this.delegado.add(obj);
	  }
	  public int largo(){
		  return this.delegado.size();
	  }
	  // Pruebe cambiando ? por T, S, Object y compila
	  public static void imprimaUnaBolsa(Bolsa<?> bolsa){
		IntStream.range(0, bolsa.largo())
		         .forEach( i -> System.out.println(bolsa.sacar(i)));
	  }
	  public String toString(){
		  return this.delegado.toString();
	  }
	  
	  void forEach(Consumer<? super T> c){
		  this.delegado.forEach(c);
	  }
	  public static void main(String[] args){
		  Bolsa<Integer> nums = new Bolsa<>(); // Integer es un argumento de tipo
		  nums.guardar(Arrays.asList(1,2,3,4));
		  System.out.println("Nums: " + nums);
		  Bolsa<String>  hileras = new Bolsa<>(); 
		  hileras.guardar(Arrays.asList("a", "b", "c"));
		  System.out.println("Hileras: " + hileras);
		  Bolsa.imprimaUnaBolsa(nums);
		  
		  Bolsa<?> b = new Bolsa<String>();
		  // Si se descomenta no compila
		  // b.guardar(new Object());
		  
		  
	  }
	  
}
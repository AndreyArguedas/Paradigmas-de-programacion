import java.util.*;
import java.util.function.*;
import java.util.stream.*;
 
class BolsaReciclable<T> extends Bolsa<T>{
	
}
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
	  public static <S> void imprimaUnaBolsa(Bolsa<S> bolsa){
		IntStream.range(0, bolsa.largo())
		         .forEach( i -> System.out.println(bolsa.sacar(i)));
	  }
	  
	  public boolean compararConOtraBolsaEnPos(Bolsa<? extends T> otra, int pos){
		  // Por simpleza por ==
		  return this.largo() == otra.largo() && this.sacar(pos) == otra.sacar(pos);
	  }
	  
	  public void pasarAOtraBolsaPorPos(Bolsa<? super T> otra, int pos){
		 otra.guardar(this.sacar(pos));
		  
	  }
	  
	  public String toString(){
		  return this.delegado.toString();
	  }
	  
	  
	  public static void main(String[] args){
		  Bolsa<Integer> nums = new Bolsa<>(); // Integer es un argumento de tipo
		  nums.guardar(Arrays.asList(1,2,3,4));
		  System.out.println("Nums: " + nums);
		  Bolsa<String>  hileras = new Bolsa<>(); 
		  hileras.guardar(Arrays.asList("a", "b", "c"));
		  System.out.println("Hileras: " + hileras);
		  Bolsa.imprimaUnaBolsa(nums);
		  Bolsa.imprimaUnaBolsa(hileras);
		  Bolsa<Object> objetos = new Bolsa<>();
		  System.out.println("Compararacion es " + objetos.compararConOtraBolsaEnPos(hileras, 0));
		  hileras.pasarAOtraBolsaPorPos(objetos, 0);
		  System.out.println("Objetos: " + objetos);
		  
		  
	  }
	  
}
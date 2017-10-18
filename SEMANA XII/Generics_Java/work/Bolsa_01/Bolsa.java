import java.util.*;
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
	  
	  public String toString(){
		  return this.delegado.toString();
	  }
	  
	  
	  public static void main(String[] args){
		  Bolsa<Integer> nums = new Bolsa<>(); // Integer es un argumento de tipo
		  nums.guardar(Arrays.asList(1, 2 ,3, 4));
		  System.out.println("Nums: " + nums);
		  Bolsa<String>  hileras = new Bolsa<>(); 
		  hileras.guardar(Arrays.asList("a", "b", "c"));
		  System.out.println("Hileras: " + hileras);
		  //Bolsa<Object> objetos = hileras;
		 
		  
	  }
	  
}
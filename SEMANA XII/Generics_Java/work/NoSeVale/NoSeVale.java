import java.util.*; 
public class NoSeVale<R>{
	public static <T>  T convertir(String a, T t){
		return (T)a;
	}
	// static R x; // No se vale, solo hay una clase NoSeVale y R es no estatica
	public static void main(String[] args){
		List<String> lista = new ArrayList<>();
		/* if(lista instanceof List<String>) // No se vale preguntar por un tipo de objeto generico
			System.out.println("Si");
		else
			System.out.println("No"); */
		
		/* List<Integer>[] a = new List<Integer>[1]; // no se vale crear un arreglo de un tipo generico */
		
		convertir("csh", 100); // Se vale pero unchecked Warning. No se cae
		
	}
}
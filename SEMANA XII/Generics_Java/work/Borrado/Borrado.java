import java.util.*; 
public class Borrado{
	// Uso de generics normal
	public static String conGenerics(){
		List<String> lista = new ArrayList<>();
		lista.add("csh");
		return lista.get(0);
	}
	// Asi lo trata el compilador
	public static String sinGenerics(){
		List lista = new ArrayList();
		lista.add("csh");
		return (String) lista.get(0);
	} 
	// Evita esta polucion
    public static String conGenericsMal(){
		List<String> lista = new ArrayList<>();
		List listaNum = lista;
		listaNum.add(666);
		return lista.get(0);
	}
	public static void main(String[] args){
		conGenericsMal(); // Se cae
		
	}
}
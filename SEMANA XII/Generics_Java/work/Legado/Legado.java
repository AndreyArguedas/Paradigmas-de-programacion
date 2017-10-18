import java.util.*;

class SinGenerics{ // Antes de JDK5
   List datos;
   public SinGenerics(List datos){
      this.datos = datos;  //Intencion: lista de Datos
   }
   public List demeDatos(){
	   return this.datos;
   }

}
interface Dato{}
class Dato1 implements Dato{
	
}

class Dato2{
	
} 

public class Legado{
	public static void main(String[] args){ //	Despues del JDK5
		List<Dato> datosAntes = new ArrayList<>();
		SinGenerics sg = new SinGenerics(datosAntes);
		List<Dato> datosDespues = sg.demeDatos();
		
	}
}
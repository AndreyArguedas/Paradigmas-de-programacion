package eif400.test;
import static eif400.matrix.MatrixUtil.*;        // In Java
import static eif400.loop.TransposeKt.transpose; // In Kotlin

public class Main{
	
  public static void main(String[] args){
	System.out.println(">>> Testing Loop <<<");
	Double[][] a = {{1.0, 2.0, 3.0}, {4.0, 5.0, 6.0}};
	System.out.println(">>> Matrix <<<");
	printMatrix(a);
    System.out.println(">>> Transposed Matrix <<<");
	printMatrix(transpose(a));
  }

}
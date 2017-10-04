package eif400.matrix;

import java.util.Arrays;

public class MatrixUtil {
	public static void printMatrix(Double[][] a){
		int i = 0;
		System.out.print("[");
		for (Double[] row : a){
			System.out.print(Arrays.toString(row));
			if (i < a.length - 1)
				System.out.print(", ");
			i++;
		}
		System.out.print("]\n");
		
	}
	public static Double[][] makeMatrix(int n, int m, Double init){
		Double[][] res = new Double[n][m];
		for( int i = 0; i < n; i ++ )
			for (int j = 0; j < m; j++)
				res[i][j] = init;
		return res;
	}
	
	public static void main(String[] args){
		Double[][] a = {{1.0, 2.0, 3.0}, {4.0, 5.0, 6.0}};
		printMatrix(a);
		printMatrix(makeMatrix(3, 2, null));
		
	}
	
}
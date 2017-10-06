package eif400.oop.java;

public class Point {	
	
	private double x;
	private double y;
	public double getX(){ return this.x;}
	public double getY(){ return this.y;}
	
	public Point(double x, double y){
		this.x = x;
		this.y = y;
	}
	public String toString(){
		return String.format("Point(x=%s, y=%s)", x, y);
		
	}
	public Point add(Point q){
		return new Point(x + q.getX(), y + q.getY());
	}
	public Point times(double s){
		return new Point(x * s, y * s);
	}
	public static double slope(Point p, Point q){
	      return  (p.y - q.y) / (p.x - q.x); 
	
	}
	
	public static void main(String[] args){
        System.out.println(">>> Point Test <<< ");
		
		Point p = new Point(10.3, 11.5);
		
		System.out.format(">>> p=%s <<< %n", p.toString());
		
		Point q = p.add(p).times(2);
		
		System.out.format(">>> q=%s <<< %n", q.toString());
		
		System.out.format(">>> slope(%s, %s) = %s <<<%n", p, q, Point.slope(p, q));

   }
}
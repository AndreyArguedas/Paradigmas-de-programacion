class BadArray{
	public static void main(String[] args){
		String[] a = new String[1];
		Object[] o = a;
		o[0] = 666;
	} 
}
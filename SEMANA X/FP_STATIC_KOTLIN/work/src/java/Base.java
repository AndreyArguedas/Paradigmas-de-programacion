package eif400.work;

public class Base<T> {
	
	protected T value;
	
	public Base(T value){
		this.value = value;
	}
	public T getValue(){
		return this.value;
	}
	
}
/*
 Multithreading Demo
 EIF400 II-2017
 loriacarlos@gmail.com
 What is wrong with this multithreading demo?
*/
	import java.util.*;
	/*
	  Accumulates values in sum field
	  Remembers all differents accumulated values (all field)
	*/
	class Accumulator {
		private int sum = 0;
		private List<Integer> all = new ArrayList<>();
		
		public void inc(int s){
			this.sum += s;
		}
		public boolean store(int s){
		   try {
			return this.all.contains(s) || this.all.add(s);
		   }  catch (Exception e){
			   
		   }
		   return false;
		}
		public String toString(){
			return String.format("sum:%d all:%s%n", this.sum, this.all);
		}
	}
	public class ThreadUnsafe {
		
		private static Accumulator acc = new Accumulator();
		// Simulates a two independent taks service with this.acc
		public void serve(int s){
			acc.inc(s);
			acc.store(s);
		}
		// Simulates some heavy weight preparation task
		private void prepare(int i){
			try {
				Thread.sleep(i);
			} catch (Exception e){}
		}
		/* 
		   *Launches a new Thread for calling serve
		   *Notice: For simplicity we use jdk-7 old non functional style!
		*/
		public Thread race(int id, int limit){
			Thread t = new Thread(new Runnable(){
				public void run(){
					for(int i = 0; i < limit; i++){
						prepare(i);
						serve(i);
					}
					System.out.format("%nThread %d is done%n", id);
				}
			});
			t.start();
			return t;
		}
		public static void main(String[] args) throws Exception {
			// 1) Set parameters
			int nthreads = 1,  // number of threads to launch
			    limit    = 10; // sum limit: 0 + 1 + ... + limit-1
			if (args.length == 1)
			   nthreads = Integer.parseInt(args[0]);
		    // 2) Launch threads race: 
			//    nthreads each one summing 0+1+...+(limit-1)
			ThreadUnsafe tus = new ThreadUnsafe();
			for(int i = 1; i <= nthreads; i++) {
				tus.race(i, limit);
			}
			// 3) Wait and show results
			System.out.format("%nWait until 'Thread dd done' is printed %d times ; then type enter %n",
   			                  nthreads);
			System.in.read();
			int expected = nthreads * limit * (limit - 1) / 2;
			try {
			     System.out.format("Expected: %d. Calculated: %s", expected, acc.toString());
			} catch (Exception e){
				System.err.format("*** %s Thread failed (%s) ***%n", Thread.currentThread().getName(), e.toString());
			}
		}
	}



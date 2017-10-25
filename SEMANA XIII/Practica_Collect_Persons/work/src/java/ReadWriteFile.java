/**
   @author loriacarlos@gmail.com
   @since 2017
*/
package eif400.files;
import java.util.*;
import java.util.stream.*;
import java.io.*;
import java.nio.file.*;



public class ReadWriteFile { 

   static public List<String> readByLines(String fileName){
	   
		try ( Stream<String> stream = Files.lines(Paths.get(fileName)) ) {
             return  stream.collect(Collectors.toList());

		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}

   }
   static public void writeByLines(String fileName, List<String> lines) {
		Path path = Paths.get(fileName);
		try (BufferedWriter writer = Files.newBufferedWriter(path)) {   
			             lines.stream()
							  .forEach( line -> {
								  try {
									  writer.write(line + "\n");  
							      } catch (IOException e) {
									  e.printStackTrace();
								  }
							  })
						 ;
		} catch (IOException e) {
				e.printStackTrace();
				
		}
   }
   
   public static void main(String[] args){
	    List<String> lines = Arrays.asList(
		   "first line",
		   "second line",
		   "third line"
		   
		);
		String filename = "output/lines.txt";
		ReadWriteFile.writeByLines(filename, lines);
		List<String> outLines = ReadWriteFile.readByLines(filename);
		outLines.stream()
		        .forEach(System.out::println);
		
		
   }

} 
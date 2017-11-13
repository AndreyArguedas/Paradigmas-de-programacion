/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Sum;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.DoubleStream;
import java.util.stream.IntStream;

/**
 *
 * @author Andrey
 */
public class Sum {
    
    public static double sum(int  max, double epsilon){
        return IntStream.range(1, max).reduce(0, (x, y) -> {
                        System.out.println(x + "   " + y);
                        return x < Math.abs(epsilon) ? x : y * new Double(Math.pow(epsilon, y - 1)).intValue();
                });
    }
    
    public static double gcd(List<Integer> nums){
        int min = nums.stream().min(Integer::compare).get(); //El menor de toda la lista
        List<Integer> res = nums.stream().filter( i -> i > min).map(i -> i - min).collect(Collectors.toList());
        res.add(min); //Para no perder el menor
        if(res.stream().filter( i -> i == min).collect(Collectors.toList()).size() == res.size())
            return min;
        else
            return gcd(res);
    }
    
    public static void main(String [] args){
        System.out.println(gcd(Arrays.asList(36, 24, 12)));
    }
}

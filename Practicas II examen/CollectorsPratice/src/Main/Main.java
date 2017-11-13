/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Main;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 *
 * @author Andrey
 */

enum Career { CS, MATH, PHI, CHEM }

interface Student {
    String getId();
    String getName();
    Career getCareer();
    double getCareerGrade();
}

class CurrentStudent implements Student{

    private String id;
    private String name;
    Career career;
    private double grade;

    public CurrentStudent(String id, String name, Career career, double grade) {
        this.id = id;
        this.name = name;
        this.career = career;
        this.grade = grade;
    }
        
    
    @Override
    public String getId() {
        return id;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public Career getCareer() {
        return career;
    }

    @Override
    public double getCareerGrade() {
        return grade;
    }
    
}

public class Main {
    
    public static Map<Career, Double> averageByCareer(List<Student> students){
        return students.stream().collect(
                Collectors.groupingBy(Student::getCareer, Collectors.averagingDouble(Student::getCareerGrade))
        );
                
    }
    
    public static void main(String [] args){
        List<Student> students = Arrays.asList(
                new CurrentStudent("40000", "abababab", Career.CS, 56),
                new CurrentStudent("40000", "abababab", Career.CHEM, 76),
                new CurrentStudent("40000", "abababab", Career.CS, 10),
                new CurrentStudent("40000", "abababab", Career.MATH, 100),
                new CurrentStudent("40000", "abababab", Career.PHI, 85),
                new CurrentStudent("40000", "abababab", Career.CS, 100)
        );
        System.out.println(averageByCareer(students));
    }
}

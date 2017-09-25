@echo off
REM compila 
javac -cp .;classes;lib;%CLASSPATH%  -d classes src/java/*.java

kotlinc  -cp .;classes;lib;%CLASSPATH% -d classes src/kotlin/*.kt

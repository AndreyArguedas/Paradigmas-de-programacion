@echo off
REM compila modelo y compilador
javac -cp .;classes;lib;%CLASSPATH%  -d classes src/java/ast/*.java src/java/compiler/*.java

kotlinc  -cp .;classes;lib;%CLASSPATH% -d classes src/kotlin/*.kt

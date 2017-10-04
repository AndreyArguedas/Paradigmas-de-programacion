@echo off
REM Genera parser y visitors y los compila
REM Asume antlr4 esta en el PATH

call antlr4 -visitor  -o src/java/parser  -package foo.compile -no-listener grammar/Foo.g4 %*
if %ERRORLEVEL% == 1 (goto :error)
javac -d classes   -Xlint:deprecation src/java/parser/*.java
goto :end
:error 
echo "*** ANTLR compilation failed ***"
:end


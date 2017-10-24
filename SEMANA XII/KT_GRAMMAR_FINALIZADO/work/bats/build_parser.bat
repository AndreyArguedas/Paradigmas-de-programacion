@echo off
REM Genera el parser y compila
REM Asume antlr4 esta en el PATH
REM	
call antlr4 -no-visitor  -o src/java/parser -package kotlin.grammar  -no-listener grammar/UnicodeClasses.g4 grammar/KotlinLexer.g4 grammar/KotlinParser.g4 %*
if %ERRORLEVEL% == 1 (goto :error)
javac -d classes   -Xlint:deprecation src/java/parser/*.java
goto :end
:error 
echo "*** ANTLR compilation failed ***"
:end


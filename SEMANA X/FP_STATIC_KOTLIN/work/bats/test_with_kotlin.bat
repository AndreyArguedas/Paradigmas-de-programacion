@echo off
REM Tests with Kotlin
echo Prueba de Kotlin
set MAIN=eif400.kt.MainKt
kotlin -cp .;classes;lib;%CLASSPATH% %MAIN% %* 
if %ERRORLEVEL% == 1 (goto :error)
echo "*** Demo finalizado ***"
exit /b
:error
echo "*** Prueba Fallida ***"
:end
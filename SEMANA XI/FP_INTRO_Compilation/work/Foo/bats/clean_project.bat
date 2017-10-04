REM Limpia el projecto
@echo off
rd /Q /S classes  
md classes
rd /Q /S build
md build
del /Q  src\java\parser\*
cls
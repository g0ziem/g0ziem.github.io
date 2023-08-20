@echo off
echo Set objShell = CreateObject("WScript.Shell") > %temp%\OpenCalculator.vbs
echo objShell.Run("calc.exe"), 0 >> %temp%\OpenCalculator.vbs
cscript //nologo %temp%\OpenCalculator.vbs
del %temp%\OpenCalculator.vbs

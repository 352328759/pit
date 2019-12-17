@echo off&setlocal enabledelayedexpansion
set a=1000
set b=dd
set a%b%=9000
set c=!a%b%! 
echo %c%
pause
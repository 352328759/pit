@echo off
for /d %%i in (*) do (cd ./%%i
	for /d %%i in (*) do (move %%i ../)
cd..)
pause
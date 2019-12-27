@echo off
for /d %%i in (*) do (cd ./%%i
	for /d %%i in (*) do (rd %%i)
cd..)
pause
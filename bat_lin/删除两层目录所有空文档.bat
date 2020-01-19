@echo off
cd /d D:\Program Files\Tencent\QQ\DATA\352328759\Image\Group2
for /d %%i in (*) do (cd ./%%i
	for /d %%i in (*) do (rd %%i)
cd..)
for /d %%i in (*) do (rd %%i)
pause
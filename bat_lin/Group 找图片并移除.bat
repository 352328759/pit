@echo off
for /f "delims=" %%i in ('dir /b /o:d .\swq') do (
	set a=%%i
	move %%i swq/%%i
)

echo "以 swq 文件夹中的文件为目录, 将同目录下的文件移入 swq 文件夹中"
pause
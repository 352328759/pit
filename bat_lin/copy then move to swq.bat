@echo off
setlocal enabledelayedexpansion
set ms=mshta vbscript:CreateObject("Scripting.FileSystemObject").GetStandardStream(1).Write(clipboardData.getData("text"))(close)
for /f "tokens=1*" %%i in ('!ms!') do (
	set a=%%i
	move %%i swq/%%i
)
echo "复制目标文件名,打开.bat 文件将移入同目录的 swq 文件夹中"
pause
@echo off
setlocal EnableDelayedExpansion
for /r %%i in (swq\*) do (
	set v=%%i
	set var=!v:~60!
	echo .\!var:~0,2!\!var:~2,2!\!var!
	move .\!var:~0,2!\!var:~2,2!\!var! swq
)
echo "以 swq 文件夹中的文件为目录, 将同目录下的文件移入 swq 文件夹中"
pause
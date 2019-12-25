@echo off
setlocal EnableDelayedExpansion
cd swq
for %%j in (*) do (
	set var=%%j
	set ui=!var:~0,2!
	set uj=!var:~2,2!
	echo !var!
	md .\!ui!\!uj!
	move !var! .\!ui!\!uj!\!var!
)

pause